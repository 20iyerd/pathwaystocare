import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Star_Size20 } from '../Star_Size20/Star_Size20.js';
import classes from './IconButton_VariantNeutralState.module.css';

interface Props {
  className?: string;
}
/* @figmaId 25:66 */
export const IconButton_VariantNeutralState: FC<Props> = memo(function IconButton_VariantNeutralState(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      <Star_Size20 />
    </button>
  );
});
