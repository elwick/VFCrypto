import React from 'react';

import HeaderLogo from './HeaderLogo';
import Dropdown from '../../containers/Dropdown';
import LastRefreshed from '../../containers/LastRefreshed';
import Timer from '../../containers/Timer';
import WrapperHeader from './WrapperHeader';
import WrapperDiv from './WrapperDiv';

function Header() {
  return (
    <WrapperHeader>
      <HeaderLogo />
      <WrapperDiv>
        <Dropdown />
        <Timer />
        <LastRefreshed />
      </WrapperDiv>
    </WrapperHeader>
  );
}

export default Header;
