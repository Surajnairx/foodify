import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "../UI/Button";
import CartContext from "../context/CartContext";
import UserProgressContext from "../context/UserProgressContext";

function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  function handleShowCart() {
    userProgressCtx.showCart();
  }
  const totalCartItems = cartCtx.items.reduce((total, item) => {
    return (total += item.quantity);
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="app logo" />
        <h1>Foodify</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}

export default Header;
