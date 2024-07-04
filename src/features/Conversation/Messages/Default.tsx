import { ReactNode, memo } from 'react';

import { LOADING_FLAT } from '@/const/message';
import { ChatMessage } from '@/types/message';

import BubblesLoading from '../components/BubblesLoading';

/**
 * 判定PDF字符串
 */
function hasPDF(content: any) {
  // 使用正则表达式匹配URL并检查是否以.pdf结尾
  const pdfRegex = /https?:\/\/[^\s#$./?].\S*\.pdf/i;
  return pdfRegex.test(content);
}


export const DefaultMessage = memo<
  ChatMessage & {
  editableContent: ReactNode;
  isToolCallGenerating?: boolean;
}
>(({ id, editableContent, content, isToolCallGenerating }) => {
  if (isToolCallGenerating) return;

  if (content === LOADING_FLAT) return <BubblesLoading />;

  // return <div id={id}>{editableContent}</div>;
  function handleLinkClick(e:any) {
    const href = e.target.href;
    if(!hasPDF(href)){
      window.open(href);
      return;
    }
    e.preventDefault();
    //新打开一个空白的页面，展示pdf文件
    window.open(`/pdf?url=${encodeURIComponent(href)}`, '_blank');
  }
  return  hasPDF(editableContent?.props?.value??'') ? <div onClick={handleLinkClick}>{editableContent}</div> : <div id={id}>{editableContent}</div>;
});



/**
 * 解析渲染带pdf文件链接的字符串
 *
 */

/**
 * 点击跳转链接
 *
 *
 */

