import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  Home,
  NewspaperOutlined,
  PieChartOutline,
  SwapVert,
} from "@mui/icons-material";
import { TabsList } from "@/types";
import {
  SIDE_BAR_HOME_TAB,
  SIDE_BAR_MARKETS_TAB,
  SIDE_BAR_NEWS_TAB,
  SIDE_BAR_PORTFOLIO_TAB,
  routes,
} from "@/constants";
import { useRouter } from "next/router";
import { drawerPaper } from "./styles";

const tabs: TabsList = [
  {
    name: SIDE_BAR_HOME_TAB,
    icon: <Home />,
    route: routes[SIDE_BAR_HOME_TAB],
  },
  {
    name: SIDE_BAR_PORTFOLIO_TAB,
    icon: <PieChartOutline />,
    route: routes[SIDE_BAR_PORTFOLIO_TAB],
  },
  {
    name: SIDE_BAR_MARKETS_TAB,
    icon: <SwapVert />,
    route: routes[SIDE_BAR_MARKETS_TAB],
  },
  {
    name: SIDE_BAR_NEWS_TAB,
    icon: <NewspaperOutlined />,
    route: routes[SIDE_BAR_NEWS_TAB],
  },
];

function Sidebar() {
  const router = useRouter();

  const navigate = (route: string) => {
    router.push(route);
  };
  return (
    <Drawer sx={drawerPaper} variant="persistent" open={true}>
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {tabs.map(({ name, icon, route }, index) => (
            <ListItem
              key={`tab-${index}-${name}`}
              disablePadding
              onClick={() => navigate(route)}
            >
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
