import { memo } from 'react';
import { Avatar, Card, Swiper } from 'tdesign-react';
import SwiperItem from 'tdesign-react/es/swiper/SwiperItem';

const SwiperCard = () => {
  const cardItems = [
    {
      avatar: 'https://avatars.githubusercontent.com/u/1024025',
      content:
        "It's made more horrible by the fact that a lot of substandard programmers use it, to the point where it's much much easier to generate total and utter crap with it.",
      reference: 'Linus Torvalds',
    },
    // {
    //   avatar: 'https://avatars.githubusercontent.com/u/77315435',
    //   content: 'I want to create my own language.',
    //   reference: 'Leryn',
    // },
  ];

  return (
    <div style={{ maxHeight: '90px' }}>
      <Swiper
        animation='slide'
        autoplay={true}
        defaultCurrent={0}
        direction='vertical'
        duration={300}
        interval={4000}
        loop
        stopOnHover
        theme='light'
        trigger='click'
      >
        {cardItems.map((cardItem, cardIndex) => {
          return (
            <SwiperItem key={cardIndex} style={{ maxHeight: '90px' }}>
              <div>
                <Card
                  style={{
                    width: '400px',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderBlockColor: 'rgba(0, 0, 0, 0)',
                    borderInlineStartColor: 'rgba(0, 0, 0, 0)',
                    borderInlineEndColor: 'rgba(0, 0, 0, 0)',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Avatar
                      shape='circle'
                      size='80px'
                      image={cardItem.avatar}
                      hideOnLoadFailed={false}
                      style={{ height: '80px', width: '80px', margin: '5px' }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', width: '75%', maxHeight: '90px' }}>
                      <div
                        style={{
                          fontFamily: 'America, sans-serif',
                          fontSize: 'clamp(1rem, 2vw, 14px)',
                          fontWeight: 'bold',
                          maxWidth: '100%',
                        }}
                      >
                        {cardItem.content}
                      </div>
                      <div
                        style={{
                          fontFamily: 'America, sans-serif',
                          fontSize: 'clamp(1rem, 2vw, 14px)',
                          maxWidth: '100%',
                          textAlign: 'end',
                        }}
                      >
                        — {cardItem.reference}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </SwiperItem>
          );
        })}
      </Swiper>
    </div>
  );
};

export default memo(SwiperCard);
