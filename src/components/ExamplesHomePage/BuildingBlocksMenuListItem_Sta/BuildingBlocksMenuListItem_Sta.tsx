import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BuildingBlocksLeadingElement_T } from '../BuildingBlocksLeadingElement_T/BuildingBlocksLeadingElement_T.js';
import { BuildingBlocksTrailingElement_ } from '../BuildingBlocksTrailingElement_/BuildingBlocksTrailingElement_.js';
import { HorizontalFullWidth } from '../HorizontalFullWidth/HorizontalFullWidth.js';
import classes from './BuildingBlocksMenuListItem_Sta.module.css';

interface Props {
  className?: string;
  classes?: {
    content?: string;
    root?: string;
    stateLayer?: string;
  };
  swap?: {
    leadingElement?: ReactNode;
  };
  hide?: {
    leadingElement?: boolean;
    trailingElement?: boolean;
    divider?: boolean;
  };
  text?: {
    labelText?: ReactNode;
  };
}
/* @figmaId 150:2997 */
export const BuildingBlocksMenuListItem_Sta: FC<Props> = memo(function BuildingBlocksMenuListItem_Sta(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.stateLayer || ''} ${classes.stateLayer}`}>
        {!props.hide?.leadingElement && (props.swap?.leadingElement || <BuildingBlocksLeadingElement_T />)}
        <div className={`${props.classes?.content || ''} ${classes.content}`}>
          {props.text?.labelText != null ? props.text?.labelText : <div className={classes.labelText}>Menu item</div>}
        </div>
        {!props.hide?.trailingElement && <BuildingBlocksTrailingElement_ />}
      </div>
      {!props.hide?.divider && (
        <HorizontalFullWidth className={classes.divider2} classes={{ divider: classes.divider }} />
      )}
    </div>
  );
});
