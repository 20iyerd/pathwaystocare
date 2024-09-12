import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './NavigationPill_StateDefault.module.css';

interface Props {
  className?: string;
  text?: {
    title?: ReactNode;
  };
}
/* @figmaId 25:117 */
export const NavigationPill_StateDefault: FC<Props> = memo(function NavigationPill_StateDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.title != null ? props.text?.title : <div className={classes.title}>Link</div>}
    </div>
  );
});
