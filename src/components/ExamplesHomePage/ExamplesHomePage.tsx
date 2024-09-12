import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _3DAvatars18 } from './_3DAvatars18/_3DAvatars18.js';
import { Add_circle } from './Add_circle/Add_circle.js';
import { Arrow1Icon } from './Arrow1Icon.js';
import { Arrow2Icon } from './Arrow2Icon.js';
import { Arrow3Icon } from './Arrow3Icon.js';
import { BuildingBlocksLeadingElement_T2 } from './BuildingBlocksLeadingElement_T2/BuildingBlocksLeadingElement_T2.js';
import { Edit } from './Edit/Edit.js';
import { Ellipse1Icon2 } from './Ellipse1Icon2.js';
import { Ellipse1Icon3 } from './Ellipse1Icon3.js';
import { Ellipse1Icon4 } from './Ellipse1Icon4.js';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import classes from './ExamplesHomePage.module.css';
import { Footer } from './Footer/Footer.js';
import { HeaderAuth_StateLoggedOut } from './HeaderAuth_StateLoggedOut/HeaderAuth_StateLoggedOut.js';
import { IconButton_VariantNeutralState } from './IconButton_VariantNeutralState/IconButton_VariantNeutralState.js';
import { ListItemListItemDensity_Condit } from './ListItemListItemDensity_Condit/ListItemListItemDensity_Condit.js';
import { Menu_Density } from './Menu_Density/Menu_Density.js';
import { NavigationPill_StateActive } from './NavigationPill_StateActive/NavigationPill_StateActive.js';
import { NavigationPill_StateDefault } from './NavigationPill_StateDefault/NavigationPill_StateDefault.js';
import { Rectangle1Icon2 } from './Rectangle1Icon2.js';
import { Rectangle1Icon3 } from './Rectangle1Icon3.js';
import { Rectangle1Icon4 } from './Rectangle1Icon4.js';
import { Rectangle1Icon } from './Rectangle1Icon.js';
import { TextField_StyleOutlinedStateFo } from './TextField_StyleOutlinedStateFo/TextField_StyleOutlinedStateFo.js';

interface Props {
  className?: string;
  hide?: {
    supportingText?: boolean;
    trailingElement?: boolean;
    divider?: boolean;
    trailingElement2?: boolean;
    divider2?: boolean;
    trailingElement3?: boolean;
    divider3?: boolean;
    trailingElement4?: boolean;
    divider4?: boolean;
    menuListItem5?: boolean;
    menuListItem6?: boolean;
    menuListItem7?: boolean;
    menuListItem8?: boolean;
    menuListItem9?: boolean;
    menuListItem10?: boolean;
    menuListItem11?: boolean;
    menuListItem12?: boolean;
    divider5?: boolean;
    divider6?: boolean;
    divider7?: boolean;
    textLinkListItem?: boolean;
    textLinkListItem2?: boolean;
    textLinkListItem3?: boolean;
    textLinkListItem4?: boolean;
  };
}
/* @figmaId 125:480 */
export const ExamplesHomePage: FC<Props> = memo(function ExamplesHomePage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.header}>
        <div className={classes.block}></div>
        <div className={classes.figma}>
          <div className={classes.pTC_Logo_Cropped1}></div>
        </div>
        <div className={classes.navigationPillList}>
          <NavigationPill_StateActive
            text={{
              title: <div className={classes.title}>About</div>,
            }}
          />
          <NavigationPill_StateDefault
            text={{
              title: <div className={classes.title2}>Contribute</div>,
            }}
          />
          <NavigationPill_StateDefault
            text={{
              title: <div className={classes.title3}>Community</div>,
            }}
          />
          <NavigationPill_StateDefault
            text={{
              title: <div className={classes.title4}>Resources</div>,
            }}
          />
          <NavigationPill_StateDefault
            text={{
              title: <div className={classes.title5}>Contact</div>,
            }}
          />
          <NavigationPill_StateDefault
            text={{
              title: <div className={classes.title6}>My Profile</div>,
            }}
          />
          <_3DAvatars18
            className={classes._3DAvatars18}
            classes={{ avatars3d_avatar_18: classes.avatars3d_avatar_18 }}
          />
        </div>
      </div>
      <div className={classes.frame1}>
        <div className={classes.frame3}>
          <div className={classes.rectangle1}>
            <Rectangle1Icon className={classes.icon} />
          </div>
          <div className={classes.frame5}>
            <div className={classes.ellipse1}>
              <Ellipse1Icon className={classes.icon2} />
            </div>
            <Edit className={classes.edit} />
          </div>
          <div className={classes.fall2016Spring2020}>Fall 2016 - Spring 2020</div>
          <div className={classes.highSchool}>High School</div>
        </div>
        <div className={classes.frame6}>
          <div className={classes.rectangle12}>
            <Rectangle1Icon2 className={classes.icon3} />
          </div>
          <div className={classes.frame52}>
            <div className={classes.ellipse12}>
              <Ellipse1Icon2 className={classes.icon4} />
            </div>
            <Edit className={classes.edit2} />
          </div>
          <div className={classes.fall2028Fall2033}>Fall 2028 - Fall 2033</div>
          <div className={classes.residency}>Residency</div>
        </div>
        <div className={classes.frame53}>
          <div className={classes.rectangle13}>
            <Rectangle1Icon3 className={classes.icon5} />
          </div>
          <div className={classes.frame54}>
            <div className={classes.ellipse13}>
              <Ellipse1Icon3 className={classes.icon6} />
            </div>
            <Edit className={classes.edit3} />
          </div>
          <div className={classes.fall2024Spring2028}>Fall 2024 - Spring 2028</div>
          <div className={classes.medSchool}>Med School</div>
        </div>
        <div className={classes.frame4}>
          <div className={classes.rectangle14}>
            <Rectangle1Icon4 className={classes.icon7} />
          </div>
          <div className={classes.frame55}>
            <div className={classes.ellipse14}>
              <Ellipse1Icon4 className={classes.icon8} />
            </div>
            <Edit className={classes.edit4} />
          </div>
          <div className={classes.fall2020Spring2024}>Fall 2020 - Spring 2024</div>
          <div className={classes.undergrad}>Undergrad</div>
        </div>
        <div className={classes.arrow1}>
          <Arrow1Icon className={classes.icon9} />
        </div>
        <div className={classes.arrow2}>
          <Arrow2Icon className={classes.icon10} />
        </div>
        <div className={classes.arrow3}>
          <Arrow3Icon className={classes.icon11} />
        </div>
        <Add_circle className={classes.add_circle} />
        <Add_circle className={classes.add_circle2} />
        <Add_circle className={classes.add_circle3} />
        <div className={classes.frame7}>
          <div className={classes.menuWithTextFieldExample2}>
            <TextField_StyleOutlinedStateFo
              className={classes.textField2}
              classes={{ inputText: classes.inputText, textField: classes.textField }}
              hide={{
                supportingText: true,
              }}
              text={{
                labelText: <div className={classes.labelText}>Insert</div>,
              }}
            />
            <Menu_Density
              className={classes.menu}
              classes={{
                stateLayer: classes.stateLayer,
                menuListItem1: classes.menuListItem1,
                stateLayer2: classes.stateLayer2,
                menuListItem2: classes.menuListItem2,
                stateLayer3: classes.stateLayer3,
                menuListItem3: classes.menuListItem3,
                stateLayer4: classes.stateLayer4,
                menuListItem4: classes.menuListItem4,
              }}
              swap={{
                leadingElement: <BuildingBlocksLeadingElement_T2 />,
                leadingElement2: <BuildingBlocksLeadingElement_T2 />,
                leadingElement3: <BuildingBlocksLeadingElement_T2 />,
                leadingElement4: <BuildingBlocksLeadingElement_T2 />,
              }}
              hide={{
                leadingElement: false,
                leadingElement2: false,
                leadingElement3: false,
                leadingElement4: false,
                menuListItem5: true,
                menuListItem6: true,
                menuListItem7: true,
                menuListItem8: true,
                menuListItem9: true,
                menuListItem10: true,
                menuListItem11: true,
                menuListItem12: true,
              }}
              text={{
                labelText: <div className={classes.labelText2}>MCAT Attempt</div>,
                labelText2: <div className={classes.labelText3}>Gap Semester</div>,
                labelText3: <div className={classes.labelText4}>Clerkship</div>,
                labelText4: <div className={classes.labelText5}>Grant Application</div>,
              }}
            />
          </div>
        </div>
        <div className={classes.myDashboard}>My Dashboard:</div>
        <ListItemListItemDensity_Condit
          className={classes.listItemListItemDensity}
          classes={{ content: classes.content, divider: classes.divider, divider2: classes.divider2 }}
          hide={{
            divider: false,
          }}
          text={{
            headline: <div className={classes.headline}>September 23rd, 2024</div>,
            supportingText: (
              <div className={classes.supportingText}>Deadline for Partnership for Better Health grant!</div>
            ),
          }}
        />
        <ListItemListItemDensity_Condit
          className={classes.listItemListItemDensity2}
          classes={{ content: classes.content2, divider: classes.divider3, divider2: classes.divider4 }}
          hide={{
            divider: false,
          }}
          text={{
            headline: <div className={classes.headline2}>October 29th, 2024</div>,
            supportingText: <div className={classes.supportingText2}>Volunteering opportunity with NYC Blood Bank</div>,
          }}
        />
        <ListItemListItemDensity_Condit
          className={classes.listItemListItemDensity3}
          classes={{ content: classes.content3, divider: classes.divider5, divider2: classes.divider6 }}
          hide={{
            divider: false,
          }}
          text={{
            headline: <div className={classes.headline3}>February 20th, 2025</div>,
            supportingText: <div className={classes.supportingText3}>Applications open for NIH positions</div>,
          }}
        />
      </div>
      <Footer classes={{ pTC_Logo1: classes.pTC_Logo1 }} />
    </div>
  );
});
