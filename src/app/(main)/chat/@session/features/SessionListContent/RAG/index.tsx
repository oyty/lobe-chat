import Link from 'next/link';
import {memo} from 'react';
import {useTranslation} from 'react-i18next';

import {DEFAULT_RAG_AVATAR} from '@/const/meta';
import {RAG_SESSION_ID} from '@/const/session';
import {SESSION_CHAT_URL} from '@/const/url';
import {useServerConfigStore} from '@/store/serverConfig';
import {useSessionStore} from '@/store/session';

import ListItem from '../ListItem';
import {useSwitchSession} from '../useSwitchSession';

const RAG = memo(() => {
  const { t } = useTranslation('chat');
  const mobile = useServerConfigStore((s) => s.isMobile);
  const activeId = useSessionStore((s) => s.activeId);
  const switchSession = useSwitchSession();

  return (
    <Link
      aria-label={t('rag.title')}
      href={SESSION_CHAT_URL(RAG_SESSION_ID, mobile)}
      onClick={(e) => {
        e.preventDefault();
        switchSession(RAG_SESSION_ID);
      }}
    >
      <ListItem
        active={activeId === RAG_SESSION_ID}
        avatar={DEFAULT_RAG_AVATAR}
        description={t('rag.desc')}
        title={t('rag.title')}
      />
    </Link>
  );
});

export default RAG;
