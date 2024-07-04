import React from 'react';

import { metadataModule } from '@/server/metadata';
import { translation } from '@/server/translation';
import PDFViewerPage from './features/PDFViewer';



export const generateMetadata = async () => {
  const { t } = await translation('clerk');
  return metadataModule.generate({
    description: t('PDF'),
    title: t('pdf', { applicationName: 'pdf' }),
    url: '/pdf',
  });
};

const Page = async () => {
  return (
    <PDFViewerPage></PDFViewerPage>
  );
};

Page.displayName = 'Pdf';

export default Page;






