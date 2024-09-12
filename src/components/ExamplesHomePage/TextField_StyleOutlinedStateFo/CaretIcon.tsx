import { memo, SVGProps } from 'react';

const CaretIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 0 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0V16' stroke='#65558F' strokeLinecap='square' />
  </svg>
);

const Memo = memo(CaretIcon);
export { Memo as CaretIcon };
