import { memo } from 'react';
import { Layout, Row } from 'tdesign-react';

const { Footer: TFooter } = Layout;

const Footer = () => {
  return (
    <TFooter>
      <Row justify='center'>Copyright © 2022-{new Date().getFullYear()} Leryn. All Rights Reserved.</Row>
      <Row justify='center'>
        <a href='https://beian.miit.gov.cn' target='_blank'>
          沪ICP备2021005089号
        </a>
      </Row>
    </TFooter>
  );
};

export default memo(Footer);
