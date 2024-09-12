import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './_3DAvatars18.module.css';

interface Props {
  className?: string;
  classes?: {
    avatars3d_avatar_18?: string;
    root?: string;
  };
}
/* @figmaId 116:128 */
export const _3DAvatars18: FC<Props> = memo(function _3DAvatars18(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.avatars3d_avatar_18 || ''} ${classes.avatars3d_avatar_18}`}></div>
    </div>
  );
});
