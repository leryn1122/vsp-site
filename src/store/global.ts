import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { ViewpoiontLimitation } from '@/enum/viewpoiont';

const namespace = 'global';

enum Layout {
  top = 0,
  side,
}

export interface IGlobalState {
  loading: boolean;
  collapsed: boolean;
  version: string;
  layout: Layout;
  isFullPage: boolean;
  showHeader: boolean;
  showFooter: boolean;
}

const initialState: IGlobalState = {
  loading: true,
  collapsed: window.innerWidth < ViewpoiontLimitation.LargeDevice,
  version: '0.1.0',
  layout: Layout.top,
  isFullPage: false,
  showHeader: true,
  showFooter: true,
};

const globalSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      if (action.payload === null) {
        state.collapsed = !state.collapsed;
      } else {
        state.collapsed = !!action.payload;
      }
    },
    toggleShowHeader: (state) => {
      state.showHeader = !state.showHeader;
    },
    toggleShowFooter: (state) => {
      state.showFooter = !state.showFooter;
    },
    switchLayout: (state, action) => {
      if (action?.payload) {
        state.layout = action?.payload;
      }
    },
    switchFullPage: (state, action) => {
      state.isFullPage = !!action?.payload;
    },
  },
  extraReducers: () => { },
});

export const selectGlobal = (state: RootState) => state.global;

export const {
  toggleMenu,
  toggleShowHeader,
  toggleShowFooter,
  switchLayout,
  switchFullPage,
} = globalSlice.actions;

export default globalSlice.reducer;
