/**
 * Created by hao.cheng on 2017/4/21.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { weibo } from '../../axios';
require('echarts/map/js/china.js');


class EchartsScatter extends React.Component {
    state = {
        option: {
        backgroundColor: '#404a59',
        title : {
            text: '微博签到数据点亮中国',
            subtext: 'From ThinkGIS',
            sublink: 'http://www.thinkgis.cn/public/sina',
            left: 'center',
            top: 'top',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {},
        legend: {
            left: 'left',
            data: ['强', '中', '弱'],
            textStyle: {
                color: '#ccc'
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: [{
            name: '弱',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 1,
            large: true,
            itemStyle: {
                normal: {
                    shadowBlur: 2,
                    shadowColor: 'rgba(37, 140, 249, 0.8)',
                    color: 'rgba(37, 140, 249, 0.8)'
                }
            },
            data: []
        }, {
            name: '中',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 1,
            large: true,
            itemStyle: {
                normal: {
                    shadowBlur: 2,
                    shadowColor: 'rgba(14, 241, 242, 0.8)',
                    color: 'rgba(14, 241, 242, 0.8)'
                }
            },
            data: []
        }, {
            name: '强',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 1,
            large: true,
            itemStyle: {
                normal: {
                    shadowBlur: 2,
                    shadowColor: 'rgba(255, 255, 255, 0.8)',
                    color: 'rgba(255, 255, 255, 0.8)'
                }
            },
            data: []
        }]
    }
    };
    componentDidMount() {
        weibo().then(weiboData => {
            weiboData = weiboData.map(function (serieData, idx) {
                var px = serieData[0] / 1000;
                var py = serieData[1] / 1000;
                var res = [[px, py]];

                for (var i = 2; i < serieData.length; i += 2) {
                    var dx = serieData[i] / 1000;
                    var dy = serieData[i + 1] / 1000;
                    var x = px + dx;
                    var y = py + dy;
                    res.push([x.toFixed(2), y.toFixed(2), 1]);

                    px = x;
                    py = y;
                }
                return res;
            });
            this.setState({
                option: {
                    series: [{data: weiboData[0]}, {data: weiboData[1]}, {data: weiboData[2]}]
                }
            })
        });
    }
    render() {
        return (
            <ReactEcharts
                option={this.state.option}
                style={{height: '400px', width: '100%'}}
                className={'react_for_echarts'}
            />
        )
    }
}

export default EchartsScatter;