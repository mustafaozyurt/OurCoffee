function OurServiceItem(props) {
  return (
    <div className="service-item-container">
      <div className="service__item">
        <img
          className="service__item__image"
          src={props.image}
          alt={props.alt}
        ></img>
        <div className="service__item__title">{props.title}</div>
        <div className="service__item__desc">{props.desc}</div>
        <div className="service__item__title">Lorem Ipsum</div>
        <div className="service__item__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
  );
}

export default OurServiceItem;
