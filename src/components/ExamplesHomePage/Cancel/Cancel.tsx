import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Cancel.module.css';
import { CancelIcon } from './CancelIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 150:1600 */
export const Cancel: FC<Props> = memo(function Cancel(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <CancelIcon className={classes.icon2} />}</div>
    </div>
  );
});
