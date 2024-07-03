import Link from 'next/link';
import {memo} from 'react';
import {useTranslation} from 'react-i18next';

import {DEFAULT_DATA_AVATAR} from '@/const/meta';
import {DATA_SESSION_ID} from '@/const/session';
import {SESSION_CHAT_URL} from '@/const/url';
import {useServerConfigStore} from '@/store/serverConfig';
import {useSessionStore} from '@/store/session';

import ListItem from '../ListItem';
import {useSwitchSession} from '../useSwitchSession';

const Data = memo(() => {
  const { t } = useTranslation('chat');
  const mobile = useServerConfigStore((s) => s.isMobile);
  const activeId = useSessionStore((s) => s.activeId);
  const switchSession = useSwitchSession();

  return (
    <Link
      aria-label={t('data.title')}
      href={SESSION_CHAT_URL(DATA_SESSION_ID, mobile)}
      onClick={(e) => {
        e.preventDefault();
        switchSession(DATA_SESSION_ID);
      }}
    >
      <ListItem
        active={activeId === DATA_SESSION_ID}
        avatar={DEFAULT_DATA_AVATAR}
        title={t('data.title')}
        description={t('data.desc')}
      />
    </Link>
  );
});

export default Data;
