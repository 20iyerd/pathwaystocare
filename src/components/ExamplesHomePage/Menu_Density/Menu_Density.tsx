import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BuildingBlocksMenuListItem_Sta2 } from '../BuildingBlocksMenuListItem_Sta2/BuildingBlocksMenuListItem_Sta2.js';
import { BuildingBlocksMenuListItem_Sta } from '../BuildingBlocksMenuListItem_Sta/BuildingBlocksMenuListItem_Sta.js';
import classes from './Menu_Density.module.css';

interface Props {
  className?: string;
  classes?: {
    stateLayer?: string;
    menuListItem1?: string;
    stateLayer2?: string;
    menuListItem2?: string;
    stateLayer3?: string;
    menuListItem3?: string;
    stateLayer4?: string;
    menuListItem4?: string;
    root?: string;
  };
  swap?: {
    leadingElement?: ReactNode;
    leadingElement2?: ReactNode;
    leadingElement3?: ReactNode;
    leadingElement4?: ReactNode;
  };
  hide?: {
    leadingElement?: boolean;
    trailingElement?: boolean;
    divider?: boolean;
    leadingElement2?: boolean;
    trailingElement2?: boolean;
    divider2?: boolean;
    leadingElement3?: boolean;
    trailingElement3?: boolean;
    divider3?: boolean;
    leadingElement4?: boolean;
    trailingElement4?: boolean;
    divider4?: boolean;
    leadingElement5?: boolean;
    trailingElement5?: boolean;
    divider5?: boolean;
    leadingElement6?: boolean;
    trailingElement6?: boolean;
    divider6?: boolean;
    leadingElement7?: boolean;
    trailingElement7?: boolean;
    divider7?: boolean;
    leadingElement8?: boolean;
    trailingElement8?: boolean;
    divider8?: boolean;
    leadingElement9?: boolean;
    trailingElement9?: boolean;
    divider9?: boolean;
    leadingElement10?: boolean;
    trailingElement10?: boolean;
    divider10?: boolean;
    leadingElement11?: boolean;
    trailingElement11?: boolean;
    divider11?: boolean;
    leadingElement12?: boolean;
    trailingElement12?: boolean;
    divider12?: boolean;
    menuListItem5?: boolean;
    menuListItem6?: boolean;
    menuListItem7?: boolean;
    menuListItem8?: boolean;
    menuListItem9?: boolean;
    menuListItem10?: boolean;
    menuListItem11?: boolean;
    menuListItem12?: boolean;
  };
  text?: {
    labelText?: ReactNode;
    labelText2?: ReactNode;
    labelText3?: ReactNode;
    labelText4?: ReactNode;
  };
}
/* @figmaId 150:3099 */
export const Menu_Density: FC<Props> = memo(function Menu_Density(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.menuList}>
        <BuildingBlocksMenuListItem_Sta
          className={`${props.classes?.menuListItem1 || ''} ${classes.menuListItem1}`}
          classes={{ content: classes.content, stateLayer: props.classes?.stateLayer || '' }}
          swap={{
            leadingElement: props.swap?.leadingElement,
          }}
          hide={{
            leadingElement: props.hide?.leadingElement || true,
            trailingElement: true,
            divider: true,
          }}
          text={{
            labelText: props.text?.labelText,
          }}
        />
        <BuildingBlocksMenuListItem_Sta
          className={`${props.classes?.menuListItem2 || ''} ${classes.menuListItem2}`}
          classes={{ content: classes.content2, stateLayer: props.classes?.stateLayer2 || '' }}
          swap={{
            leadingElement: props.swap?.leadingElement2,
          }}
          hide={{
            leadingElement: props.hide?.leadingElement2 || true,
            trailingElement: true,
            divider: true,
          }}
          text={{
            labelText: props.text?.labelText2,
          }}
        />
        <BuildingBlocksMenuListItem_Sta
          className={`${props.classes?.menuListItem3 || ''} ${classes.menuListItem3}`}
          classes={{ content: classes.content3, stateLayer: props.classes?.stateLayer3 || '' }}
          swap={{
            leadingElement: props.swap?.leadingElement3,
          }}
          hide={{
            leadingElement: props.hide?.leadingElement3 || true,
            trailingElement: true,
            divider: true,
          }}
          text={{
            labelText: props.text?.labelText3,
          }}
        />
        <BuildingBlocksMenuListItem_Sta
          className={`${props.classes?.menuListItem4 || ''} ${classes.menuListItem4}`}
          classes={{ content: classes.content4, stateLayer: props.classes?.stateLayer4 || '' }}
          swap={{
            leadingElement: props.swap?.leadingElement4,
          }}
          hide={{
            leadingElement: props.hide?.leadingElement4 || true,
            trailingElement: true,
            divider: true,
          }}
          text={{
            labelText: props.text?.labelText4,
          }}
        />
        {!props.hide?.menuListItem5 && (
          <BuildingBlocksMenuListItem_Sta
            className={classes.menuListItem5}
            classes={{ content: classes.content5 }}
            hide={{
              leadingElement: true,
              trailingElement: true,
              divider: true,
            }}
          />
        )}
        {!props.hide?.menuListItem6 && (
          <BuildingBlocksMenuListItem_Sta
            className={classes.menuListItem6}
            classes={{ content: classes.content6 }}
            hide={{
              leadingElement: true,
              trailingElement: true,
              divider: true,
            }}
          />
        )}
        {!props.hide?.menuListItem7 && (
          <BuildingBlocksMenuListItem_Sta
            className={classes.menuListItem7}
            classes={{ content: classes.content7 }}
            hide={{
              leadingElement: true,
              trailingElement: true,
              divider: true,
            }}
          />
        )}
        {!props.hide?.menuListItem8 && (
          <BuildingBlocksMenuListItem_Sta
            className={classes.menuListItem8}
            classes={{ content: classes.content8 }}
            hide={{
              leadingElement: true,
              trailingElement: true,
              divider: true,
            }}
          />
        )}
        {!props.hide?.menuListItem9 && (
          <BuildingBlocksMenuListItem_Sta
            className={classes.menuListItem9}
            classes={{ content: classes.content9 }}
            hide={{
              leadingElement: true,
              trailingElement: true,
              divider: true,
            }}
          />
        )}
        {!props.hide?.menuListItem10 && (
          <BuildingBlocksMenuListItem_Sta2
            className={classes.menuListItem10}
            classes={{ content: classes.content10 }}
            hide={{
              leadingElement: true,
              trailingElement: true,
              divider: true,
            }}
          />
        )}
        {!props.hide?.menuListItem11 && (
          <BuildingBlocksMenuListItem_Sta
            className={classes.menuListItem11}
            classes={{ content: classes.content11 }}
            hide={{
              leadingElement: true,
              trailingElement: true,
              divider: true,
            }}
          />
        )}
        {!props.hide?.menuListItem12 && (
          <BuildingBlocksMenuListItem_Sta
            className={classes.menuListItem12}
            classes={{ content: classes.content12 }}
            hide={{
              leadingElement: true,
              trailingElement: true,
              divider: true,
            }}
          />
        )}
      </div>
    </div>
  );
});
