import { connect } from "react-redux";
import Toast from "./toast";

const mapStateToProps = ({ toast: toastState }) => ({
  toast: toastState.toast,
});

export default connect(mapStateToProps)(Toast);
