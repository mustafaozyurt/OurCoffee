function MenuItem(props) {
  return (
    <tbody>
      <tr className="menu__item">
        <td className="menu__item__coffee">{props.coffee}</td>
        <td className="menu__item__price">{props.price}</td>
      </tr>
    </tbody>
  );
}

export default MenuItem;

