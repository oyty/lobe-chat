'use client';

import {createStyles} from 'antd-style';
import {memo, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Flexbox} from 'react-layout-kit';
import {useSendMessage} from '@/features/ChatInput/useSend';
import {useChatStore} from '@/store/chat';

const useStyles = createStyles(({ css, token, responsive }) => ({
  card: css`
    cursor: pointer;

    padding: 12px 24px;

    color: ${token.colorText};

    background: ${token.colorBgContainer};
    border-radius: 48px;

    &:hover {
      background: ${token.colorBgElevated};
    }

    ${responsive.mobile} {
      padding: 8px 16px;
    }
  `,
  icon: css`
    color: ${token.colorTextSecondary};
  `,
  title: css`
    color: ${token.colorTextDescription};
  `,
}));

// const qa = shuffle([
//   'q01',
//   'q02',
//   'q03',
//   'q04',
//   'q05',
//   'q06',
//   'q07',
//   'q08',
//   'q09',
//   'q10',
//   'q11',
//   'q12',
//   'q13',
//   'q14',
//   'q15',
// ]);

const QuestionSuggest = memo<{ mobile?: boolean }>(({ mobile }) => {
  const [updateInputMessage] = useChatStore((s) => [s.updateInputMessage]);

  const { t } = useTranslation('welcome');
  const { styles } = useStyles();
  const sendMessage = useSendMessage();

  const [qaList, setQaList] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch(apiRandomHintList);
        // if (!res.ok) {
        //   return false
        // }
        // const result = await res.json();
        const result = {
          data: [
            "这是随便聊聊问题1？",
            "这是随便聊聊问题2？",
            "这是随便聊聊问题3？",
            "这是随便聊聊问题4？",
            "这是随便聊聊问题5？",
            "这是随便聊聊问题6？"
          ]
        }
        setQaList(result.data)
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, [])

  return (
    <Flexbox gap={8} width={'100%'}>
      <Flexbox align={'center'} horizontal justify={'space-between'}>
        <div className={styles.title}>{t('guide.questions.title')}</div>
        {/*<Link href={USAGE_DOCUMENTS} target={'_blank'}>*/}
        {/*  <ActionIcon*/}
        {/*    icon={ArrowRight}*/}
        {/*    size={{ blockSize: 24, fontSize: 16 }}*/}
        {/*    title={t('guide.questions.moreBtn')}*/}
        {/*  />*/}
        {/*</Link>*/}
      </Flexbox>
      <Flexbox gap={8} horizontal wrap={'wrap'}>
        {qaList.slice(0, mobile ? 2 : 5).map((item) => {
          const text = item;
          return (
            <Flexbox
              align={'center'}
              className={styles.card}
              gap={8}
              horizontal
              key={item}
              onClick={() => {
                updateInputMessage(text);
                sendMessage({ isWelcomeQuestion: true });
              }}
            >
              {text}
            </Flexbox>
          );
        })}
      </Flexbox>
    </Flexbox>
  );
});

export default QuestionSuggest;
