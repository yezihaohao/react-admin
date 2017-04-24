/**
 * Created by hao.cheng on 2017/4/17.
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import EchartsArea from './EchartsArea';
import EchartsGraphnpm from './EchartsGraphnpm';
import EchartsPie from './EchartsPie';
import EchartsScatter from './EchartsScatter';

class Echarts extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" span={24}>
                        <div className="gutter-box">
                            <Card title="区域图" bordered={false}>
                                <EchartsArea />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" span={12}>
                        <div className="gutter-box">
                            <Card title="关系图" bordered={false}>
                                <EchartsGraphnpm />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className="gutter-box">
                            <Card title="饼图" bordered={false}>
                                <EchartsPie />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" span={24}>
                        <div className="gutter-box">
                            <Card title="散点图" bordered={false}>
                                <EchartsScatter />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Echarts;