import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BuildingBlocksStateLayer1Enabl.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 116:299 */
export const BuildingBlocksStateLayer1Enabl: FC<Props> = memo(function BuildingBlocksStateLayer1Enabl(props = {}) {
  return (
    <div
      className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    ></div>
  );
});
