import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Popup, Badge, Dropdown, Space } from 'tdesign-react';
import {
  Icon,
  LogoGithubFilledIcon,
  HelpCircleIcon,
  SettingIcon,
  PoweroffIcon,
  UserCircleIcon,
} from 'tdesign-icons-react';
import { REPO_URL } from '@/constants';

import Style from './HeaderIcon.module.less';

const { DropdownMenu, DropdownItem } = Dropdown;

export default memo(() => {
  const navigate = useNavigate();

  const gotoGitHub = () => {
    window.open(REPO_URL);
  };

  const clickHandler = (data: any) => {
    if (data.value === 1) {
      navigate('/user/index');
    }
  };

  return (
    <Space align='center'>
      <Popup content='GitHub' placement='bottom' showArrow destroyOnClose>
        <Button
          className={Style.menuIcon}
          shape='square'
          size='large'
          variant='text'
          onClick={gotoGitHub}
          icon={<LogoGithubFilledIcon />}
        />
      </Popup>
      <Popup content='FAQ' placement='bottom' showArrow destroyOnClose>
        <Button
          className={Style.menuIcon}
          shape='square'
          size='large'
          variant='text'
          // onClick={gotoWiki}
          icon={<HelpCircleIcon />}
        />
      </Popup>
      <Dropdown trigger={'click'} onClick={clickHandler}>
        <Button variant='text' className={Style.dropdown}>
          <Icon name='user-circle' className={Style.icon} />
          {/* <span className={Style.text}>Me</span> */}
          <Icon name='chevron-down' className={Style.icon} />
        </Button>
        <DropdownMenu>
          <DropdownItem value={1}>
            <div className={Style.dropItem}>
              <UserCircleIcon />
              <span>Profile</span>
            </div>
          </DropdownItem>
          <DropdownItem
            value={2}
            // onClick={handleLogout}
          >
            <div className={Style.dropItem}>
              <SettingIcon />
              <span>Settings</span>
            </div>
          </DropdownItem>
          <DropdownItem
            value={3}
            // onClick={handleLogout}
          >
            <div className={Style.dropItem}>
              <PoweroffIcon />
              <span>Logout</span>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Space>
  );
});
