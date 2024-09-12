import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Content_cut.module.css';
import { Content_cutIcon } from './Content_cutIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 150:2979 */
export const Content_cut: FC<Props> = memo(function Content_cut(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Content_cutIcon className={classes.icon2} />}</div>
    </div>
  );
});
