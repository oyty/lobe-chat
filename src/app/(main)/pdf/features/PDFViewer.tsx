'use client';

import React, { useEffect, useState, useRef } from 'react';


const PDFViewerPage: React.FC = () => {
    const [url, setUrl] = useState<string | null>(null);
    let pageNumber = 1;
    const iframeRef = useRef<HTMLIFrameElement>(null);
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const newUrl = searchParams.get('url');
        console.log(newUrl)
        setUrl(newUrl??'');
        const pageCountString = newUrl?newUrl.slice(newUrl.indexOf('.pdf') + 4):'';
        const params = pageCountString.split(/#|&/);
        // 遍历键值对数组，找到 page 参数
        for (let param of params) {
            const [key, value] = param.split('=');
            if (key === 'page') {
                pageNumber = +value;
            }
        }
    }, []);

    //监听iframeRef
    useEffect(() => {
        const checkIframe = () => {
            if (iframeRef.current) {
                const iframe = iframeRef.current;
                if(iframe?.contentWindow?.PDFViewerApplication?.eventBus){
                    iframe.contentWindow.PDFViewerApplication.eventBus.dispatch('pagenumberchanged',{ value: pageNumber})
                }
            }
        };

        // 延迟检查 iframeRef.current
        const timeoutId = setTimeout(checkIframe, 300);

        return () => clearTimeout(timeoutId);
    }, [iframeRef]);

  return (
    <div style={{ width: '100%' }}>
      {
        url ?
        <iframe height="100%" ref={iframeRef} src={'/pdfjs/web/viewer.html?file=' + encodeURIComponent(url)} width="100%"></iframe>
        : ''
      }
    </div>
  );
};

export default PDFViewerPage;
