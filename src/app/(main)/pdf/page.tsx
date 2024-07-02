import React from 'react';
// import { Document, Page as PDFPage } from 'react-pdf';
// import { useParams } from 'next/navigation';

import { metadataModule } from '@/server/metadata';
import { translation } from '@/server/translation';
import PDFViewerPage from './features/PDFViewer';



export const generateMetadata = async () => {
  const { t } = await translation('clerk');
  return metadataModule.generate({
    description: t('pdf'),
    title: t('pdf', { applicationName: 'LobeChat' }),
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






