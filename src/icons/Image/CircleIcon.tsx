/******************************************************
 * This file was created by scripts/generate.js as part
 * of the build process. Do not edit this file directly.
 ******************************************************/

import { IconProps } from "../../IconProps";
import { renderIcon } from "../../SvgIcon";
const iconType = {
  viewBox: "0 0 24 24",
  paths: [
    {
      d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z",
    },
  ],
  circles: [],
};

export const CircleIcon = (props: IconProps) => renderIcon(props, iconType);
