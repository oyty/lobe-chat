'use client';

import { SideNav } from '@lobehub/ui';
import { memo, useEffect, useState } from 'react';

import { useActiveTabKey } from '@/hooks/useActiveTabKey';

import Avatar from './Avatar';
import BottomActions from './BottomActions';
import TopActions from './TopActions';

const Nav = memo(() => {
  const sidebarKey = useActiveTabKey();
  const [isPDF, setIsPDF] = useState(true);

  useEffect(() => {
    const isExist = !window.location.href.includes('.pdf');
    setIsPDF(isExist);
  }, []);

  return (
    isPDF &&
    <SideNav
      avatar={<Avatar />}
      bottomActions={<BottomActions />}
      style={{ height: '100%', zIndex: 100 }}
      topActions={<TopActions tab={sidebarKey} />}
    />
  );
});

Nav.displayName = 'DesktopNav';

export default Nav;
