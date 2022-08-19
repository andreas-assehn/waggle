import * as React from 'react';
import pawPrint from '../assets/paw-print.svg';

export default function Scale({ scaleValue }: { scaleValue: number }) {
  return (
    <span className='scale'>
      <img src={pawPrint} />
      {scaleValue >= 2 && <img src={pawPrint} />}
      {scaleValue >= 3 && <img src={pawPrint} />}
      {scaleValue >= 4 && <img src={pawPrint} />}
      {scaleValue >= 5 && <img src={pawPrint} />}
    </span>
  );
}
