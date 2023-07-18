import { SIDE_BAR_WIDTH } from "@/constants";

export const drawerPaper = {
  width: SIDE_BAR_WIDTH,
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: { width: SIDE_BAR_WIDTH, boxSizing: "border-box" },
};
