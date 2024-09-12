import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TextLinkListItem.module.css';

interface Props {
  className?: string;
  text?: {
    listItem?: ReactNode;
  };
}
/* @figmaId 25:468 */
export const TextLinkListItem: FC<Props> = memo(function TextLinkListItem(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.listItem != null ? props.text?.listItem : <div className={classes.listItem}>List item</div>}
    </div>
  );
});
