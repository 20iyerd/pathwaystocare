import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Edit.module.css';
import { EditIcon } from './EditIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 142:1438 */
export const Edit: FC<Props> = memo(function Edit(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>
        <EditIcon className={classes.icon2} />
      </div>
    </div>
  );
});
