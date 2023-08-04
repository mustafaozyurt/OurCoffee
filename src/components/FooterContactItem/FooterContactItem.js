import './FooterContactItem.css';
import { Link } from "react-router-dom";

const FooterContactItem = ({icon, contactType, info1, info2}) => {
  return (
    <div className="footer-contact-item">
    <i className={icon} />
    <h2>{contactType}</h2>
    <Link>{info1}</Link>
    <Link>{info2}</Link>
  </div>
  )
}

export default FooterContactItem