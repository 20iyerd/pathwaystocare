import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BuildingBlocksLeadingElement_T2.module.css';

interface Props {
  className?: string;
}
/* @figmaId 150:2983 */
export const BuildingBlocksLeadingElement_T2: FC<Props> = memo(function BuildingBlocksLeadingElement_T2(props = {}) {
  return <div className={`${resets.clapyResets} ${classes.root}`}></div>;
});
