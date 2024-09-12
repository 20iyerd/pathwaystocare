import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BuildingBlocksStateLayer1Enabl } from '../BuildingBlocksStateLayer1Enabl/BuildingBlocksStateLayer1Enabl.js';
import { HorizontalFullWidth } from '../HorizontalFullWidth/HorizontalFullWidth.js';
import classes from './ListItemListItemDensity_Condit.module.css';

interface Props {
  className?: string;
  classes?: {
    content?: string;
    divider?: string;
    divider2?: string;
    root?: string;
  };
  hide?: {
    divider?: boolean;
  };
  text?: {
    headline?: ReactNode;
    supportingText?: ReactNode;
  };
}
/* @figmaId 116:750 */
export const ListItemListItemDensity_Condit: FC<Props> = memo(function ListItemListItemDensity_Condit(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <BuildingBlocksStateLayer1Enabl className={classes.stateLayerOverlay} />
      <div className={classes.stateLayer}>
        <div className={`${props.classes?.content || ''} ${classes.content}`}>
          {props.text?.headline != null ? props.text?.headline : <div className={classes.headline}>List item</div>}
          {props.text?.supportingText != null ? (
            props.text?.supportingText
          ) : (
            <div className={classes.supportingText}>Supporting line text lorem ipsum dolor sit amet, consectetur.</div>
          )}
        </div>
      </div>
      {props.hide?.divider === false && (
        <HorizontalFullWidth
          className={props.classes?.divider2 || ''}
          classes={{ divider: props.classes?.divider || '' }}
        />
      )}
    </div>
  );
});
