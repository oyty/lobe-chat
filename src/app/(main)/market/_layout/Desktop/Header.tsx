'use client';

import {ChatHeader} from '@lobehub/ui';
import {createStyles} from 'antd-style';
import {memo} from 'react';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    color: ${token.colorText};
    fill: ${token.colorText};
  `,
}));

const Header = memo(() => {
  // const { styles } = useStyles();

  return (
    <ChatHeader
      left={
      // <LobeChat className={styles.logo} extra={'Discover'} size={36} type={'text'} />
        <div style={{alignSelf: 'flex-start',color: '#000', fontFamily: 'Nunito', fontSize: '26px', fontWeight: 'bold'}}>
        云路助手
      </div>
    }
      // right={<ShareAgentButton />}
    />
  );
});

export default Header;
