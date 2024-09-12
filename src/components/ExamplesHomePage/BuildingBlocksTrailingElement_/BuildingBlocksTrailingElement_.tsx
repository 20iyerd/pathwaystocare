import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Arrow_right } from '../Arrow_right/Arrow_right.js';
import classes from './BuildingBlocksTrailingElement_.module.css';
import { Icon } from './Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 150:2986 */
export const BuildingBlocksTrailingElement_: FC<Props> = memo(function BuildingBlocksTrailingElement_(props = {}) {
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
