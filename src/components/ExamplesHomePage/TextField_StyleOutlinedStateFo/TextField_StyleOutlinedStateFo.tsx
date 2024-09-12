import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Cancel } from '../Cancel/Cancel.js';
import { IconButton_StyleStandardStateE } from '../IconButton_StyleStandardStateE/IconButton_StyleStandardStateE.js';
import { Search } from '../Search/Search.js';
import { CaretIcon } from './CaretIcon.js';
import { Icon2 } from './Icon2.js';
import { Icon } from './Icon.js';
import classes from './TextField_StyleOutlinedStateFo.module.css';

interface Props {
  className?: string;
  classes?: {
    inputText?: string;
    textField?: string;
    root?: string;
  };
  hide?: {
    supportingText?: boolean;
  };
  text?: {
    labelText?: ReactNode;
  };
}
/* @figmaId 150:1648 */
export const TextField_StyleOutlinedStateFo: FC<Props> = memo(function TextField_StyleOutlinedStateFo(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.textField || ''} ${classes.textField}`}>
        <div className={classes.stateLayer}>
          <IconButton_StyleStandardStateE
            swap={{
              icon: (
                <Search
                  swap={{
                    icon: <Icon className={classes.icon} />,
                  }}
                />
              ),
            }}
          />
          <div className={classes.content}>
            <div className={`${props.classes?.inputText || ''} ${classes.inputText}`}>
              <div className={classes.inputText2}>Input</div>
              <div className={classes.caret}>
                <CaretIcon className={classes.icon3} />
              </div>
            </div>
            <div className={classes.labelText}>
              {props.text?.labelText != null ? props.text?.labelText : <div className={classes.labelText2}>Label</div>}
            </div>
          </div>
          <IconButton_StyleStandardStateE
            swap={{
              icon: (
                <Cancel
                  swap={{
                    icon: <Icon2 className={classes.icon2} />,
                  }}
                />
              ),
            }}
          />
        </div>
      </div>
      {!props.hide?.supportingText && (
        <div className={classes.supportingText}>
          <div className={classes.supportingText2}>Supporting text</div>
        </div>
      )}
    </div>
  );
});
