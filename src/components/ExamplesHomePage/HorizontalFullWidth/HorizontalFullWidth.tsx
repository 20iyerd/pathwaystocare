import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './HorizontalFullWidth.module.css';

interface Props {
  className?: string;
  classes?: {
    divider?: string;
    root?: string;
  };
}
/* @figmaId 116:160 */
export const HorizontalFullWidth: FC<Props> = memo(function HorizontalFullWidth(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.divider || ''} ${classes.divider}`}></div>
    </div>
  );
});
