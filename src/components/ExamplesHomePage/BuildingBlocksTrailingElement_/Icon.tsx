import { memo, SVGProps } from 'react';

const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 10V0L5 5L0 10Z' fill='#49454F' />
  </svg>
);

const Memo = memo(Icon);
export { Memo as Icon };
