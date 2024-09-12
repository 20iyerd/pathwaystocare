import { memo, SVGProps } from 'react';

const Size20Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9 0.666667L11.575 5.88333L17.3333 6.725L13.1667 10.7833L14.15 16.5167L9 13.8083L3.85 16.5167L4.83333 10.7833L0.666667 6.725L6.425 5.88333L9 0.666667Z'
      stroke='#1E1E1E'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Size20Icon);
export { Memo as Size20Icon };
