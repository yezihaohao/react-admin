/**
 * Created by hao.cheng on 2017/4/22.
 */
import React from 'react';
import { Breadcrumb, Switch, Icon } from 'antd';
import { Link } from 'react-router-dom';
import themes from '../style/theme';

class BreadcrumbCustom extends React.Component {
    state = {
        switcherOn: false,
        theme: null,
        themes: JSON.parse(localStorage.getItem('themes')) || [
            {type: 'info', checked: false},
            {type: 'grey', checked: false},
            {type: 'danger', checked: false},
            {type: 'warn', checked: false},
            {type: 'white', checked: false},
        ],
    };
    componentDidMount() {
        this.state.themes.forEach(val => {
            val.checked && this.setState({
                theme: themes['theme' + val.type] || null
            });
        })
    }
    switcherOn = () => {
        this.setState({
            switcherOn: !this.state.switcherOn
        })
    };
    themeChange = (v) => {
        this.setState({
            themes: this.state.themes.map((t, i) => {
                (t.type === v.type && (t.checked = !t.checked)) || (t.checked = false);
                return t;
            }),
            theme: (v.checked && themes['theme' + v.type]) || null
        }, () => {
            localStorage.setItem('themes', JSON.stringify(this.state.themes));
        })
    };
    render() {
        const themesTag = this.state.themes.map((v, i) => (
            <div className="pull-left y-center mr-m mb-s" key={i}>
                <i className={`w-24 mr-s b-a ${v.type}`} />
                <Switch checked={v.checked} onChange={() => this.themeChange(v)} />
            </div>
        ));
        const first = <Breadcrumb.Item>{this.props.first}</Breadcrumb.Item> || '';
        const second = <Breadcrumb.Item>{this.props.second}</Breadcrumb.Item> || '';
        return (
            <span>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item><Link to={'/app/dashboard/index'}>首页</Link></Breadcrumb.Item>
                        {first}
                        {second}
                </Breadcrumb>
                <div className={`switcher dark-white ${this.state.switcherOn ? 'active' : ''}`}>
                    <a className="sw-btn dark-white" onClick={this.switcherOn}>
                        <Icon type="setting" className="text-dark" />
                    </a>
                    <div style={{padding: '1rem'}} className="clear">
                        { themesTag }
                    </div>
                </div>
                <style>{`
                    ${this.state.theme ?
                    `
                    .custom-theme {
                        // background: ${this.state.theme.header.background} !important;
                        background: linear-gradient(to right,${this.state.theme.header.background} 0,${this.state.theme.header.background}90 100%) !important;
                        color: #fff !important;
                    }
                    .custom-theme .ant-menu {
                        background: transparent !important;
                        color: #fff !important;
                    }
                    .custom-theme .ant-menu-item-group-title {
                        color: #fff !important;
                    }
                    ` : ''
                    }
                `}</style>
            </span>
        )
    }
}

export default BreadcrumbCustom;
