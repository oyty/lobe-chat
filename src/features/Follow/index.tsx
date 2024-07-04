'use client';

import {memo} from 'react';
import {Flexbox} from 'react-layout-kit';
//
// const useStyles = createStyles(({ css, token }) => {
//   return {
//     icon: css`
//       svg {
//         fill: ${token.colorTextDescription};
//       }
//
//       &:hover {
//         svg {
//           fill: ${token.colorText};
//         }
//       }
//     `,
//   };
// });

const Follow = memo(() => {
  // const { styles } = useStyles();
  // const { t } = useTranslation('common');
  return (
    <Flexbox gap={8} horizontal>
      {/*<Link href={GITHUB} rel="noreferrer" target={'_blank'}>*/}
      {/*  <ActionIcon*/}
      {/*    className={styles.icon}*/}
      {/*    icon={SiGithub as any}*/}
      {/*    title={t('follow', { name: 'GitHub' })}*/}
      {/*  />*/}
      {/*</Link>*/}
      {/*<Link href={X} rel="noreferrer" target={'_blank'}>*/}
      {/*  <ActionIcon className={styles.icon} icon={SiX as any} title={t('follow', { name: 'X' })} />*/}
      {/*</Link>*/}
      {/*<Link href={DISCORD} rel="noreferrer" target={'_blank'}>*/}
      {/*  <ActionIcon*/}
      {/*    className={styles.icon}*/}
      {/*    icon={SiDiscord as any}*/}
      {/*    title={t('follow', { name: 'Discord' })}*/}
      {/*  />*/}
      {/*</Link>*/}
      {/*<Link href={MEDIDUM} rel="noreferrer" target={'_blank'}>*/}
      {/*  <ActionIcon*/}
      {/*    className={styles.icon}*/}
      {/*    icon={SiMedium as any}*/}
      {/*    title={t('follow', { name: 'Medium' })}*/}
      {/*  />*/}
      {/*</Link>*/}
    </Flexbox>
  );
});

Follow.displayName = 'Follow';

export default Follow;
