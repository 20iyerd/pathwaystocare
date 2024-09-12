import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Add_circle.module.css';
import { Add_circleIcon } from './Add_circleIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 150:1479 */
export const Add_circle: FC<Props> = memo(function Add_circle(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>
        <Add_circleIcon className={classes.icon2} />
      </div>
    </div>
  );
});
