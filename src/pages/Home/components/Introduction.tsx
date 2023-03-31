import { memo } from 'react';
import { Layout, Button, Space } from 'tdesign-react';
import { ArrowRightIcon } from 'tdesign-icons-react';
import SwiperCard from './SwiperCard';

import Style from './Introduction.module.less';

const Introduction = () => {
  return (
    <Layout>
      <img
        src='https://outerbounds.com/assets/images/hero-83e9e47bc0a72508e5728b485c5928fa.png'
        width='260'
        className={Style.introPicture}
      />
      <div className={Style.introAsideInfo}>
        Coming soon: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        <div style={{ color: 'var(--brand-main)' }}>RSVP</div>
      </div>
      <Space
        direction='vertical'
        breakLine
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '160px',
          paddingLeft: '50px',
          paddingRight: '50px',
        }}
      >
        <div>
          <Space direction='vertical' breakLine style={{ gap: '20px', paddingLeft: '50px', paddingRight: '50px' }}>
            <div
              style={{
                fontFamily: 'Stanley, serif',
                fontSize: 'clamp(3rem, 4vw, 56px)',
                fontWeight: 'bolder',
                lineHeight: 1.4,
                maxWidth: '720px',
              }}
            >
              One DIY native language and compiler toolchains
            </div>
            <div
              style={{
                fontFamily: 'America, sans-serif',
                fontSize: 'clamp(1rem, 2vw, 14px)',
                opacity: 0.8,
                maxWidth: '520px',
              }}
            >
              A open-source native language implemented by Rust and LLVM, providing full toolchains and develop plugins.
              Use them to build a native executable binary for your project.
            </div>
            <div>
              <Button
                type='submit'
                style={{
                  fontFamily: 'America, sans-serif',
                  fontWeight: 'bold',
                  lineHeight: '40px',
                  paddingLeft: '3rem',
                  paddingRight: '3rem',
                }}
                suffix={<ArrowRightIcon />}
              >
                Read the Tutorial
              </Button>
            </div>
          </Space>
        </div>
        <div style={{ width: '400px', paddingLeft: '50px', paddingRight: '50px' }}>
          <SwiperCard />
        </div>
        <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
          <div
            style={{
              fontFamily: 'America, sans-serif',
              fontWeight: 'bold',
              lineHeight: '40px',
              marginBottom: '2px',
            }}
          >
            Join community with compiler developers and amateurs.
          </div>
          <div>
            <Button
              type='submit'
              theme='default'
              variant='outline'
              className={Style.introCommunityButton}
              suffix={<ArrowRightIcon />}
            >
              Community coming soon...
            </Button>
          </div>
        </div>
      </Space>
    </Layout>
  );
};

export default memo(Introduction);
