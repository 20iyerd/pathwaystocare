import { memo, SVGProps } from 'react';

const Ellipse1Icon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={12.5} cy={12.5} r={12.5} fill='#115F95' fillOpacity={0.48} />
  </svg>
);

const Memo = memo(Ellipse1Icon4);
export { Memo as Ellipse1Icon4 };
