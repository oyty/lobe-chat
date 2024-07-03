'use client';

import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs, PDFViewer  } from 'react-pdf';
// import { Document, Page, pdfjs, PDFViewer  } from '@react-pdf/renderer';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`


const PDFViewerPage: React.FC = () => {
    const [url, setUrl] = useState<string | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [total, setTotal] = useState<number>(3);
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const newUrl = searchParams.get('url');
        setUrl(newUrl??'');
        const pageCountString = newUrl?newUrl.slice(newUrl.indexOf('?') + 1):'';
        const params = pageCountString.split('&');
        // 遍历键值对数组，找到 page 参数
        for (let param of params) {
            const [key, value] = param.split('=');
            if (key === 'page') {
                setPageNumber(+value)
            }else if(key === 'total'){
                setTotal(+value)
            }
        }
    }, []);
    const handleChangePage = (type: 'prev' | 'next') => {
        if(type === 'prev' && pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }else if(type === 'next' && pageNumber < total){
            setPageNumber(pageNumber + 1);
        }
    }
  return (
    <div style={{ margin: '0 auto' }}>
      {
        url ?
        (   
            <>
                <Document file={url}>
                    <Page pageNumber={pageNumber} />
                </Document>
                {/* <PDFViewer>
                    <Document file={url}>
                        <Page pageNumber={1} />
                        <Page pageNumber={2} />
                        <Page pageNumber={3} />
                    </Document>
                </PDFViewer> */}
                <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center', marginTop: '20px'}}>
                    <button onClick={ () => handleChangePage('prev') }>上一页</button>
                    <span style={{margin: '0 10px'}}>{pageNumber} / {total}</span>
                    <button onClick={ ()=> handleChangePage('next') }>下一页</button>
                </div>
                {/* <iframe src={url} width="100%" height="100%"></iframe> */}
            </>
        )
        : ''
      }
    </div>
  );
};

export default PDFViewerPage;