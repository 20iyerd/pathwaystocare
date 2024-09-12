import { memo, SVGProps } from 'react';

const Arrow_rightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 10V0L5 5L0 10Z' fill='#1D1B20' />
  </svg>
);

const Memo = memo(Arrow_rightIcon);
export { Memo as Arrow_rightIcon };
