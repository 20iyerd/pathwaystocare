import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './NavigationPill_StateActive.module.css';

interface Props {
  className?: string;
  text?: {
    title?: ReactNode;
  };
}
/* @figmaId 25:116 */
export const NavigationPill_StateActive: FC<Props> = memo(function NavigationPill_StateActive(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.title != null ? props.text?.title : <div className={classes.title}>Link</div>}
    </div>
  );
});
