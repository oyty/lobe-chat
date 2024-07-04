import {Brain, Settings2} from 'lucide-react';
import {useRouter} from 'next/navigation';
import {useTranslation} from 'react-i18next';
import urlJoin from 'url-join';

import {CellProps} from '@/components/Cell';
import {SettingsTabs} from '@/store/global/initialState';
import {featureFlagsSelectors, useServerConfigStore} from '@/store/serverConfig';

export const useCategory = () => {
  const router = useRouter();
  const { t } = useTranslation('setting');
  const {showLLM } = useServerConfigStore(featureFlagsSelectors);

  const items: CellProps[] = [
    {
      icon: Settings2,
      key: SettingsTabs.Common,
      label: t('tab.common'),
    },
    // {
    //   icon: Sparkles,
    //   key: SettingsTabs.SystemAgent,
    //   label: t('tab.system-agent'),
    // },
    // enableWebrtc && {
    //   icon: Cloudy,
    //   key: SettingsTabs.Sync,
    //   label: (
    //     <Flexbox align={'center'} gap={8} horizontal>
    //       {t('tab.sync')}
    //       <Tag bordered={false} color={'warning'}>
    //         {t('tab.experiment')}
    //       </Tag>
    //     </Flexbox>
    //   ),
    // },
    showLLM && {
      icon: Brain,
      key: SettingsTabs.LLM,
      label: t('tab.llm'),
    },
    // { icon: Mic2, key: SettingsTabs.TTS, label: t('tab.tts') },
    // {
    //   icon: Bot,
    //   key: SettingsTabs.Agent,
    //   label: t('tab.agent'),
    // },
    // {
    //   icon: Info,
    //   key: SettingsTabs.About,
    //   label: t('tab.about'),
    // },
  ].filter(Boolean) as CellProps[];

  return items.map((item) => ({
    ...item,
    onClick: () => router.push(urlJoin('/settings', item.key as SettingsTabs)),
  }));
};
