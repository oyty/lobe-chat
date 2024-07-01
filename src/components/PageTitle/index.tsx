import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · 云路助手` : '云路助手';
  }, [title]);

  return null;
});

export default PageTitle;
