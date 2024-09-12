import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { BuildingBlocksLeadingElement_T } from '../BuildingBlocksLeadingElement_T/BuildingBlocksLeadingElement_T.js';
import { BuildingBlocksTrailingElementS } from '../BuildingBlocksTrailingElementS/BuildingBlocksTrailingElementS.js';
import { HorizontalFullWidth } from '../HorizontalFullWidth/HorizontalFullWidth.js';
import classes from './BuildingBlocksMenuListItem_Sta2.module.css';
import { Icon } from './Icon.js';

interface Props {
  className?: string;
  classes?: {
    content?: string;
    root?: string;
  };
  hide?: {
    leadingElement?: boolean;
    trailingElement?: boolean;
    divider?: boolean;
  };
}
/* @figmaId 150:2998 */
export const BuildingBlocksMenuListItem_Sta2: FC<Props> = memo(function BuildingBlocksMenuListItem_Sta2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.stateLayer}>
        {!props.hide?.leadingElement && (
          <BuildingBlocksLeadingElement_T
            swap={{
              icon: <Icon className={classes.icon} />,
            }}
          />
        )}
        <div className={`${props.classes?.content || ''} ${classes.content}`}>
          <div className={classes.labelText}>Menu item</div>
        </div>
        {!props.hide?.trailingElement && <BuildingBlocksTrailingElementS />}
      </div>
      {!props.hide?.divider && (
        <HorizontalFullWidth className={classes.divider2} classes={{ divider: classes.divider }} />
      )}
    </div>
  );
});
