/**
 * Created by hao.cheng on 2017/4/16.
 */
import React, { ReactNode } from 'react';

interface PageProps {
    children?: ReactNode;
}

const Page = (props: PageProps) => {
    return <div style={{ height: '100%' }}>{props.children}</div>;
};

export default Page;
