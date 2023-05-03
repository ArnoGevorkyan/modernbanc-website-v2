import React from "react";
import { Tab as MantineTab } from "@mantine/core"

export type TabProps = {
  title: string;
  padded?: boolean;
} & any

export const Tab = ({
  title,
  ...rest
}:TabProps) => (
  <MantineTab {...rest} label={title} >
  </MantineTab>
);
export default Tab;
