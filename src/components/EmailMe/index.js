import React from "react";
import PropTypes from "prop-types";

const EmailMe = ({ className = "", text }) => (
  <a className={className} rel="noopener" href="mailto:email@gmail.com">
    {text}
  </a>
);

EmailMe.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default EmailMe;
