import { memo } from 'react';
import { Layout, Button, Space, Image } from 'tdesign-react';
import { ArrowRightIcon } from 'tdesign-icons-react';

import Style from './Slogan.module.less';

const Slogan = () => {
  return (
    <Layout>
      <div className={Style.sloganSpace}>
        <div className={Style.sloganBrand}>VSP Language Toolchains</div>
        <div>
          <h1 className={Style.slogan}>One DIY native language and compiler toolchains</h1>
        </div>
        <div className={Style.slogan}>
          <div className={Style.sloganDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </div>
        </div>
        <div>
          <Space>
            <Button
              type='submit'
              suffix={<ArrowRightIcon />}
              style={{
                fontFamily: 'America, sans-serif',
                fontWeight: 'bold',
                lineHeight: '40px',
                paddingLeft: '1rem',
                paddingRight: '1rem',
              }}
            >
              Read the Tutorial
            </Button>
            <Button
              type='submit'
              theme='default'
              variant='outline'
              style={{
                fontFamily: 'America, sans-serif',
                fontWeight: 'bold',
                lineHeight: '40px',
                paddingLeft: '1rem',
                paddingRight: '1rem',
              }}
            >
              Learn More
            </Button>
          </Space>
          <div className={Style.sloganIllustration}>
            <Image src='https://pic.52112.com/180828/EPS-180828_147/ANTbKORm9N_small.jpg' />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default memo(Slogan);
