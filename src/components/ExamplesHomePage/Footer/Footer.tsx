import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { TextLinkList_DensityDefault } from '../TextLinkList_DensityDefault/TextLinkList_DensityDefault.js';
import classes from './Footer.module.css';

interface Props {
  className?: string;
  classes?: {
    pTC_Logo1?: string;
  };
  hide?: {
    textLinkListItem?: boolean;
    textLinkListItem2?: boolean;
    textLinkListItem3?: boolean;
    textLinkListItem4?: boolean;
  };
}
/* @figmaId 142:1119 */
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.title}>
        <div className={classes.figma}>
          <div className={`${props.classes?.pTC_Logo1 || ''} ${classes.pTC_Logo1}`}></div>
          <div className={classes.pathwaysToCare}>Pathways to Care</div>
        </div>
      </div>
      <TextLinkList_DensityDefault
        className={classes.textLinkList}
        hide={{
          textLinkListItem: true,
          textLinkListItem2: true,
        }}
        text={{
          textStrong: <div className={classes.textStrong}>Explore</div>,
          listItem: <div className={classes.listItem}>Pathways Forum</div>,
          listItem2: <div className={classes.listItem2}>Grant Library</div>,
          listItem3: <div className={classes.listItem3}>Testimonials</div>,
          listItem4: <div className={classes.listItem4}>Collaboration features</div>,
          listItem5: <div className={classes.listItem5}>Mentorship</div>,
        }}
      />
      <TextLinkList_DensityDefault
        className={classes.textLinkList2}
        hide={{
          textLinkListItem3: true,
          textLinkListItem: true,
        }}
        text={{
          textStrong: <div className={classes.textStrong2}>Resources</div>,
          listItem: <div className={classes.listItem6}>FAQ</div>,
          listItem2: <div className={classes.listItem7}>Privacy Policy</div>,
          listItem4: <div className={classes.listItem8}>Support</div>,
          listItem6: <div className={classes.listItem9}>Developers</div>,
          listItem5: <div className={classes.listItem10}>Resource library</div>,
        }}
      />
    </div>
  );
});
