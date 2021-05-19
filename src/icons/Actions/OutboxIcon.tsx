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
      d: "M19 3c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 2H5v9h3.02c.63 0 1.22.3 1.6.8.54.73 1.4 1.2 2.38 1.2s1.84-.47 2.38-1.2c.38-.5.97-.8 1.6-.8H19zm-7.36 2.36c.2-.2.51-.2.71 0l2.79 2.79c.32.31.1.85-.35.85H13v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9.21c-.45 0-.67-.54-.36-.85z",
    },
  ],
  circles: [],
};

export const OutboxIcon = (props: IconProps) => renderIcon(props, iconType);
