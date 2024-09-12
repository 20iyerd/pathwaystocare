import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TextStrong.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    textStrong?: ReactNode;
  };
}
/* @figmaId 25:466 */
export const TextStrong: FC<Props> = memo(function TextStrong(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.textStrong != null ? props.text?.textStrong : <div className={classes.textStrong}>Text Strong</div>}
    </div>
  );
});
