import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Arrow_right } from '../Arrow_right/Arrow_right.js';
import classes from './BuildingBlocksTrailingElementS.module.css';
import { Icon } from './Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 150:2991 */
export const BuildingBlocksTrailingElementS: FC<Props> = memo(function BuildingBlocksTrailingElementS(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Arrow_right
        className={classes.icon2}
        swap={{
          icon: <Icon className={classes.icon} />,
        }}
      />
    </div>
  );
});
