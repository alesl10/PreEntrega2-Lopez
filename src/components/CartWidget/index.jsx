import { useContext } from "react";
import { Context } from "../../context";
import "./CartWidget.css"

function CartWidget() {
    const { productsAdded } = useContext(Context);

    return (
    <div className="cart-widget">
        <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="carrito" />
    <span>{productsAdded.length}</span>
    </div>
)}


export default CartWidget;