import { useCallback } from 'react';

import { useChatStore } from '@/store/chat';
import { chatSelectors } from '@/store/chat/selectors';
import { SendMessageParams } from '@/store/chat/slices/message/action';
import { filesSelectors, useFileStore } from '@/store/file';
import {useAgentStore} from "@/store/agent";
import {agentSelectors} from "@/store/agent/slices/chat";

export type UseSendMessageParams = Pick<
  SendMessageParams,
  'onlyAddUserMessage' | 'isWelcomeQuestion'
>;

export const useSendMessage = () => {
  const [sendMessage, updateInputMessage] = useChatStore((s) => [
    s.sendMessage,
    s.updateInputMessage,
  ]);

  const [source, updateAgentConfig] = useAgentStore((s) => {
    const config = agentSelectors.currentAgentConfig(s);
    return [config.params?.source, s.updateAgentConfig];
  });

  return useCallback((params: UseSendMessageParams = {}) => {
    const store = useChatStore.getState();
    if (chatSelectors.isAIGenerating(store)) return;

    if (chatSelectors.showInboxWelcome(store)) {
      console.log('showInboxWelcome');
      updateAgentConfig({ params: { source: 'inbox' } })
    }
    if (chatSelectors.showRAGWelcome(store)) {
      console.log('showRAGWelcome');
      updateAgentConfig({ params: { source: 'rag' } })
    }
    if (chatSelectors.showDataWelcome(store)) {
      console.log('showDataWelcome');
      updateAgentConfig({ params: { source: 'data' } })
    }



    const imageList = filesSelectors.imageUrlOrBase64List(useFileStore.getState());
    // if there is no message and no image, then we should not send the message
    if (!store.inputMessage && imageList.length === 0) return;

    sendMessage({
      files: imageList,
      message: store.inputMessage,
      ...params,
    });

    updateInputMessage('');
    useFileStore.getState().clearImageList();

    // const hasSystemRole = agentSelectors.hasSystemRole(useAgentStore.getState());
    // const agentSetting = useAgentStore.getState().agentSettingInstance;

    // // if there is a system role, then we need to use agent setting instance to autocomplete agent meta
    // if (hasSystemRole && !!agentSetting) {
    //   agentSetting.autocompleteAllMeta();
    // }
  }, []);
};
