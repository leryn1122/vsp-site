import { memo, useEffect } from 'react';
import { Layout } from 'tdesign-react';

import AppLayout from './AppLayout';
import { throttle } from 'lodash';

import './AppLayout.module.less';
import { ViewpoiontLimitation } from '@/enum/viewpoiont';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectGlobal, toggleMenu } from '@/store/global';

export default memo(() => {
  const AppContainer = AppLayout;

  const globalState = useAppSelector(selectGlobal);
  const dispatch = useAppDispatch();

  /**
   *
   * Determine the layout depending on the viewpoint width.
   *
   */
  useEffect(() => {
    // dispatch(switchTheme(globalState.theme));
    const handleResize = throttle(() => {
      if (window.innerWidth < ViewpoiontLimitation.SmallDevice) {
        dispatch(toggleMenu(true));
      } else if (window.innerWidth > ViewpoiontLimitation.LargeDevice) {
        dispatch(toggleMenu(false));
      }
    }, 100);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout>
      <AppContainer />
    </Layout>
  );
});
