<<<<<<< Updated upstream
import React from "react";

=======
>>>>>>> Stashed changes
function MenuItem(props) {
  return (
    <tr className="menu__item">
      <td className="menu__item__coffee">{props.coffee}</td>
      <td className="menu__item__price">{props.price}</td>
    </tr>
  );
}

export default MenuItem;
