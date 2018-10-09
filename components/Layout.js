import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PropTypes from "prop-types";

export default class Layout extends React.Component {
  static propTypes = {
    isOpenMenu: PropTypes.bool,
    handleMenuOpen: PropTypes.func,
    handleMenuClose: PropTypes.func
  };
  render() {
    const {
      title,
      children,
      isOpenMenu,
      handleMenuOpen,
      handleMenuClose
    } = this.props;
    console.log(isOpenMenu)
    return (
      <div>
        <AppBar position="absolute">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={isOpenMenu}>
          <div>
            <IconButton onClick={handleMenuClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <div>
              <ListItem button>
                <ListItemIcon>
                  <MenuIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </div>
          </List>
        </Drawer>
        <main>{children}</main>
      </div>
    );
  }
}
