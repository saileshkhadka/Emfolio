// Resume.jsx
import React, { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    const link = document.createElement('a');
    link.href = `${window.location.origin}/sailesh.pdf`;
    link.download = 'sailesh.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);
  

  return;
};

export default Resume;
