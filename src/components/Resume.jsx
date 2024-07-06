import React, { useEffect } from 'react';

const Resume = () => {
 useEffect(() => {
    const link = document.createElement('a');
    link.href = `${window.location.origin}/pages/sailesh.pdf`;
    link.download = 'sailesh.pdf';

    const newWindow = window.open('', '_blank');
    newWindow.document.body.appendChild(link);

    link.click();

    newWindow.document.body.removeChild(link);
    newWindow.close();
 }, []);
  
 return null;
};

export default Resume;