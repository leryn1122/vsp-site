import React, { memo } from 'react';
import { Layout, Button, Space } from 'tdesign-react';
import { ViewListIcon } from 'tdesign-icons-react';
import HeaderIcon from './HeaderIcon';
import Search from './Search';
import Style from './index.module.less';

const { Header } = Layout;

export default memo((props: {}) => {
  return (
    <Header className={Style.panel}>
      <Space align='center'>
        <div>Document</div>
        <div>Resources</div>
        <div>Community</div>
      </Space>
      <Space align='center'>
        <Search />
        <HeaderIcon />
      </Space>
    </Header>
  );
});
