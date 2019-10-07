/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table, Button, Row, Col, Card } from 'antd';
import { getBbcNews } from '../../axios';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { TableRowSelection } from 'antd/lib/table';

const columns = [
    {
        title: '新闻标题',
        dataIndex: 'title',
        width: 100,
        render: (text: any, record: any) => (
            <a href={record.url} target="_blank" rel="noopener noreferrer">
                {text}
            </a>
        ),
    },
    {
        title: '作者',
        dataIndex: 'author',
        width: 80,
    },
    {
        title: '发布时间',
        dataIndex: 'publishedAt',
        width: 80,
    },
    {
        title: '描述',
        dataIndex: 'description',
        width: 200,
    },
];

class AsynchronousTable extends React.Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        data: [],
    };
    componentDidMount() {
        this.start();
    }
    start = () => {
        this.setState({ loading: true });
        getBbcNews().then(({ articles }: { articles: any }) => {
            this.setState({
                data: articles,
                loading: false,
            });
        });
    };
    onSelectChange = (selectedRowKeys: string[]) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="表格" second="异步表格" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="异步表格--BBC新闻今日热门" bordered={false}>
                                <div style={{ marginBottom: 16 }}>
                                    <Button
                                        type="primary"
                                        onClick={this.start}
                                        disabled={loading}
                                        loading={loading}
                                    >
                                        Reload
                                    </Button>
                                    <span style={{ marginLeft: 8 }}>
                                        {hasSelected
                                            ? `Selected ${selectedRowKeys.length} items`
                                            : ''}
                                    </span>
                                </div>
                                <Table
                                    rowSelection={rowSelection as TableRowSelection<any>}
                                    columns={columns}
                                    dataSource={this.state.data}
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AsynchronousTable;
