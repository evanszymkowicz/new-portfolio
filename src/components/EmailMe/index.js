import { SITE_CONFIG } from "../../utils/constants";

const EmailMe = ({ className = "", text }) => (
  <a className={className} href={`mailto:${SITE_CONFIG.social.email}`}>
    {text}
  </a>
);

export default EmailMe;
