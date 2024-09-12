import { memo, SVGProps } from 'react';

const Arrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 0 52' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-0.707107 52.7071C-0.316583 53.0976 0.316582 53.0976 0.707107 52.7071L7.07107 46.3431C7.46159 45.9526 7.46159 45.3195 7.07107 44.9289C6.68054 44.5384 6.04738 44.5384 5.65685 44.9289L-9.45376e-08 50.5858L-5.65685 44.9289C-6.04738 44.5384 -6.68054 44.5384 -7.07107 44.9289C-7.46159 45.3195 -7.46159 45.9526 -7.07107 46.3431L-0.707107 52.7071ZM-1 -1.86886e-09L-1 52L1 52L1 1.86886e-09L-1 -1.86886e-09Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow1Icon);
export { Memo as Arrow1Icon };
