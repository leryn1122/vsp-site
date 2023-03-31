import { memo } from 'react';
import { Layout } from 'tdesign-react';
import Gallery from './components/Gallery';
import Introduction from './components/Introduction';
import Slogan from './components/Slogan';

const Home = () => {
  return (
    <Layout>
      <Layout style={{ position: 'relative', padding: '80px', background: '#eeeeee' }}>
        <Introduction />
      </Layout>
      <Layout style={{ position: 'relative', padding: '80px', background: '#ffffff' }}>
        <Gallery />
      </Layout>
      <Layout style={{ position: 'relative', padding: '80px', background: '#eeeeee' }}>
        <Slogan />
      </Layout>
      <Layout style={{ position: 'relative', padding: '80px', background: '#ffffff' }}></Layout>
      <Layout style={{ position: 'relative', padding: '80px', background: '#eeeeee' }}></Layout>
    </Layout>
  );
};

export default memo(Home);
