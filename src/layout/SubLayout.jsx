import { PropTypes } from "prop-types";

const SubLayout = ({ children }) => {
  return <div className="max-w-7xl p-5 mx-auto">{children}</div>;
};

SubLayout.propTypes = {
  children: PropTypes.node,
};

export default SubLayout;