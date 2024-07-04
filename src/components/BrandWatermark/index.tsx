'use client';

import {memo} from 'react';
import {Flexbox, FlexboxProps} from 'react-layout-kit';
// import {theme} from "antd";

// const useStyles = createStyles(({ token, css }) => ({
//   logoLink: css`
//     height: 20px;
//     color: inherit;
//
//     &:hover {
//       color: ${token.colorLink};
//     }
//   `,
// }));

const BrandWatermark = memo<Omit<FlexboxProps, 'children'>>(({ ...rest }) => {
  // const { styles, theme } = useStyles();
  return (
    <Flexbox
      align={'center'}
      flex={'none'}
      gap={4}
      horizontal
      // style={{ color: theme.colorTextDescription, fontSize: 12, ...style }}
      {...rest}
    >
      {/*<span>Powered by</span>*/}
      {/*<Link className={styles.logoLink} href={'https://lobehub.com'} target={'_blank'}>*/}
      {/*  <LobeHub size={20} type={'text'} />*/}
      {/*</Link>*/}
    </Flexbox>
  );
});

export default BrandWatermark;
