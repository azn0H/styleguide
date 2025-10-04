import React, { useEffect } from 'react';

type Props = {
  fontUrl: string;
  exampleText: string;
  fontFamily: string;
};

const CompanyExampleText: React.FC<Props> = ({ fontUrl, exampleText, fontFamily }) => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = fontUrl;
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [fontUrl]);

  return (
    <div className={`font-${fontFamily} text-base`}>
      {exampleText}
    </div>
  );
};

export default CompanyExampleText;
