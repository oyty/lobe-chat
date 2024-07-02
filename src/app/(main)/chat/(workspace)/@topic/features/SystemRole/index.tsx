'use client';

import { memo } from 'react';

import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';
import { useSessionStore } from '@/store/session';
import { sessionSelectors } from '@/store/session/selectors';

import SystemRoleContent from './SystemRoleContent';

const SystemRole = memo(() => {
  const { isAgentEditable: showSystemRole } = useServerConfigStore(featureFlagsSelectors);
  const isInbox = useSessionStore(sessionSelectors.isInboxSession);
  const isRAG = useSessionStore(sessionSelectors.isRAGSession);
  const isData = useSessionStore(sessionSelectors.isDataSession);

  return showSystemRole && !isInbox && !isRAG && !isData && <SystemRoleContent />;
});

export default SystemRole;
