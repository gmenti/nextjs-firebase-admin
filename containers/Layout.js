import Layout from "../components/Layout";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  isOpenMenu: state.isOpenMenu
});

const mapDispatchToProps = dispatch => ({
  handleMenuOpen: () => dispatch("MENU_OPEN"),
  handleMenuClose: () => dispatch("MENU_CLOSE")
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
