import React from "react";
import PropTypes from "prop-types";
import { SITE_CONFIG } from "../../utils/constants";

const EmailMe = ({ className = "", text }) => (
  <a
    className={className}
    rel="noopener"
    href={`mailto:${SITE_CONFIG.social.email}`}
  >
    {text}
  </a>
);

EmailMe.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default EmailMe;
