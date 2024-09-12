import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { TextLinkListItem } from '../TextLinkListItem/TextLinkListItem.js';
import { TextStrong } from '../TextStrong/TextStrong.js';
import classes from './TextLinkList_DensityDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    textLinkListItem?: boolean;
    textLinkListItem2?: boolean;
    textLinkListItem3?: boolean;
  };
  text?: {
    textStrong?: ReactNode;
    listItem?: ReactNode;
    listItem2?: ReactNode;
    listItem3?: ReactNode;
    listItem4?: ReactNode;
    listItem5?: ReactNode;
    listItem6?: ReactNode;
  };
}
/* @figmaId 25:472 */
export const TextLinkList_DensityDefault: FC<Props> = memo(function TextLinkList_DensityDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.title}>
        <TextStrong
          className={classes.textStrong}
          text={{
            textStrong: props.text?.textStrong,
          }}
        />
      </div>
      <TextLinkListItem
        text={{
          listItem: props.text?.listItem,
        }}
      />
      <TextLinkListItem
        text={{
          listItem: props.text?.listItem2,
        }}
      />
      {!props.hide?.textLinkListItem3 && (
        <TextLinkListItem
          text={{
            listItem: props.text?.listItem3,
          }}
        />
      )}
      {!props.hide?.textLinkListItem && <TextLinkListItem />}
      <TextLinkListItem
        text={{
          listItem: props.text?.listItem4,
        }}
      />
      {!props.hide?.textLinkListItem2 && (
        <TextLinkListItem
          text={{
            listItem: props.text?.listItem6,
          }}
        />
      )}
      <TextLinkListItem
        text={{
          listItem: props.text?.listItem5,
        }}
      />
    </div>
  );
});
