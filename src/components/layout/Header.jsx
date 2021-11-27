import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header({title, Icon}) {
  return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
             <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{flexGrow: 1, display: "flex", alignItems: "center"}}>
            {Icon ? <Icon fontSize="inherit" sx={{mr: 1}} /> : null}
            {title}            
          </Typography>
        </Toolbar>
      </AppBar>
  );
}