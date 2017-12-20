/**
 * 我的会员页面
 */
import React from 'react';

import BreadcrumbCustom from '../BreadcrumbCustom';
import {Row, Col, Card, Button, Radio, Icon, Menu, Dropdown} from 'antd';

class MyMembers extends React.Component {

    handleClick = (e) => {
        $.ajax({
                   url: "/my-comments.json",
                   dataType: 'json',
                   success: function (comments) {
                       this.setState({comments: comments});
                   }.bind(this)
               });
    };

    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="我的会员" second="全部会员"/>
                <Button onClick={this.handleClick}>测试</Button>
            </div>
        );
    }
}

export default MyMembers;