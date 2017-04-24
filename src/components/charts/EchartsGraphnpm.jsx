/**
 * Created by hao.cheng on 2017/4/21.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { npmDependencies } from '../../axios';

class EchartsGraphnpm extends React.Component {
    state = {
        option : {
        title: {
            text: 'NPM Dependencies'
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                type: 'graph',
                layout: 'none',
                // progressiveThreshold: 700,
                data: [],
                edges: [],
                label: {
                    emphasis: {
                        position: 'right',
                        show: true
                    }
                },
                roam: true,
                focusNodeAdjacency: true,
                lineStyle: {
                    normal: {
                        width: 0.5,
                        curveness: 0.3,
                        opacity: 0.7
                    }
                }
            }
        ]
    }
    };
    componentDidMount() {
        npmDependencies().then(npm => {
            this.setState({
                option: {
                    series: [
                        {
                            data: npm.nodes.map(function (node) {
                                return {
                                    x: node.x,
                                    y: node.y,
                                    id: node.id,
                                    name: node.label,
                                    symbolSize: node.size,
                                    itemStyle: {
                                        normal: {
                                            color: node.color
                                        }
                                    }
                                };
                            }),
                            edges: npm.edges.map(function (edge) {
                                return {
                                    source: edge.sourceID,
                                    target: edge.targetID
                                };
                            })
                        }
                    ]
                }
            })
        })
    }
    render() {
        return (
            <ReactEcharts
                option={this.state.option}
                style={{height: '300px', width: '100%'}}
                className={'react_for_echarts'}
            />
        )
    }
}

export default EchartsGraphnpm;