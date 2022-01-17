import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import QuizIcon from "@mui/icons-material/Quiz";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HomeIcon from "@mui/icons-material/Home";
import { Divider, useTheme } from "@mui/material";
import React, { useContext, useState } from "react";
import ColorModeContext from "../../contexts/ColorModeContext";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export default function Header({ title, Icon }) {
  const theme = useTheme();
  const toggleColorMode = useContext(ColorModeContext);
  const [openNav, setOpenNav] = useState(false);
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setOpenNav(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
        >
          {Icon ? <Icon fontSize="inherit" sx={{ mr: 1 }} /> : null}
          {title}
        </Typography>
        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Toolbar>
      <Drawer open={openNav} anchor="left" onClose={() => setOpenNav(false)}>
        <List sx={{ width: 250 }}>
          <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
          <Divider />
          <ListItemLink to="/quiz" primary="Quiz" icon={<QuizIcon />} />
          <ListItemLink
            to="/assessment"
            primary="Assessment"
            icon={<AssessmentIcon />}
          />
        </List>
      </Drawer>
    </AppBar>
  );
}
