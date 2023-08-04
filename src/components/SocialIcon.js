import { Link } from 'react-router-dom';

const SocialIcon = ({ platform, link, iconClass, label }) => {
  return (
    <Link
      className={`social-icon-link ${platform}`}
      to={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <i className={iconClass} />
    </Link>
  );
};

export default SocialIcon;
