import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Arrow_right.module.css';
import { Arrow_rightIcon } from './Arrow_rightIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 116:457 */
export const Arrow_right: FC<Props> = memo(function Arrow_right(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Arrow_rightIcon className={classes.icon2} />}</div>
    </div>
  );
});
