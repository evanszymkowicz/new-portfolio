import React from "react";
import { SITE_CONFIG } from "../../utils/constants";

const EmailMe = ({ className = "", text }) => (
  <a
    className={className}
    rel="noopener"
    href={`mailto:${SITE_CONFIG.social.email}`}>
    {text}
  </a>
);

export default EmailMe;
