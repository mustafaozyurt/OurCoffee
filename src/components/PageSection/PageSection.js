import "./PageSection.css";

function PageSection({imageUrl, title }) {
  
  return (
    <div className="page-section">
      <img src={imageUrl}></img>
      <h1>{title}</h1>
    </div>
  );
}

export default PageSection;
