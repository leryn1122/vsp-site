import React from 'react';
import { Input } from 'tdesign-react';
import { SearchIcon } from 'tdesign-icons-react';
import Style from './Search.module.less';

const Search = () => <Input className={Style.panel} prefixIcon={<SearchIcon />} placeholder='I gotta know...' />;

export default React.memo(Search);
