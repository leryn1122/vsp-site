import { memo } from 'react';
import { Space, Image } from 'tdesign-react';

import Style from './Gallery.module.less';

const Gallery = () => {
  const galleryItems = [
    {
      image: 'https://outerbounds.com/assets/images/data-f31574e58eff2f94233abceba17bd5b3.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      subtext:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n   isi ut aliquip ex ea commodo consequat.',
    },
    {
      image: 'https://outerbounds.com/assets/images/diverse-0093dfb8e4a4febb4da74c9ae3b59d53.png',
      text: 'Duis aute irure dolor in reprehenderit in voluptate',
      subtext:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      image: 'https://outerbounds.com/assets/images/deploy-79319695ed0385b64956b84cee901eb4.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      subtext:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    <div className={Style.gallery}>
      <Space direction='horizontal' align='start' breakLine className={Style.gallerySpace}>
        {galleryItems.map((galleryItem, galleryIndex) => {
          return (
            <div key={galleryIndex} style={{ maxWidth: '320px', minWidth: '240px' }}>
              <Image src={galleryItem.image} shape={'round'} className={Style.galleryPicture} />
              <div className={Style.galleryText}>{galleryItem.text}</div>
              <div className={Style.gallerySubtext}>{galleryItem.subtext}</div>
            </div>
          );
        })}
      </Space>
    </div>
  );
};

export default memo(Gallery);
