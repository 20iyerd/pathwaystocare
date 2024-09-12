import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Content_cut } from '../Content_cut/Content_cut.js';
import classes from './BuildingBlocksLeadingElement_T.module.css';
import { Icon } from './Icon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 150:2982 */
export const BuildingBlocksLeadingElement_T: FC<Props> = memo(function BuildingBlocksLeadingElement_T(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Content_cut
        className={classes.icon2}
        swap={{
          icon: props.swap?.icon || <Icon className={classes.icon} />,
        }}
      />
    </div>
  );
});
