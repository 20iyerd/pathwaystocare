import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button_VariantNeutralStateDefa } from '../Button_VariantNeutralStateDefa/Button_VariantNeutralStateDefa.js';
import { Button_VariantPrimaryStateDefa } from '../Button_VariantPrimaryStateDefa/Button_VariantPrimaryStateDefa.js';
import classes from './HeaderAuth_StateLoggedOut.module.css';

interface Props {
  className?: string;
}
/* @figmaId 25:272 */
export const HeaderAuth_StateLoggedOut: FC<Props> = memo(function HeaderAuth_StateLoggedOut(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Button_VariantNeutralStateDefa
        className={classes.button2}
        text={{
          button: <div className={classes.button}>Sign in</div>,
        }}
      />
      <Button_VariantPrimaryStateDefa
        className={classes.button4}
        text={{
          button: <div className={classes.button3}>Register</div>,
        }}
      />
    </div>
  );
});
