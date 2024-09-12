import { memo, SVGProps } from 'react';

const Rectangle1Icon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 168 88' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 25C0 11.1929 11.1929 0 25 0H143C156.807 0 168 11.1929 168 25V63C168 76.8071 156.807 88 143 88H25C11.1929 88 0 76.8071 0 63V25Z'
      fill='#F27073'
      fillOpacity={0.5}
    />
  </svg>
);

const Memo = memo(Rectangle1Icon3);
export { Memo as Rectangle1Icon3 };
