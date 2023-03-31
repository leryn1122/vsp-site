import { memo } from 'react';
import { Drawer, Layout } from 'tdesign-react';

import Content from '@/layouts/AppRouter';
import Header from '@/layouts/components/Header';
import Footer from '@/layouts/components/Footer';

import Style from './AppLayout.module.less';

const TopLayout = memo((props) => (
  <Layout className={Style.topPanel}>
    <Header />
    <Content />
    <Footer />
  </Layout>
));

export default TopLayout;
