import {Modal} from "./Modal";
import {useContext} from "react";
import {CartContext} from "../store/CartContext";
import {UserProgressContext} from "../store/UserProgressContext";

export const Cart = () => {

    const cartCtx = useContext(CartContext)
    const userCtx = useContext(UserProgressContext)

    const totalPrice = cartCtx.items.reduce((total, item) => total + item.count * item.price, 0)

    const total = `$${totalPrice.toFixed(2)}`;

    const handleCheckout = () => {
        userCtx.showCheckout();
    }


    return <Modal open={userCtx.progress === 'cart'}>
        {cartCtx.items.length === 0 ?
            <>
                <p>Your cart items is empty.</p>
                <p className="cart-close-submit">
                <button className="close" onClick={() => userCtx.hideCart()}>Close</button>
                <button className="submit" onClick={handleCheckout}>Support</button>
            </p></> :
            <><h2>Total cart items</h2>
                {cartCtx.items.map(item => (
                    <p key={item.id}>
                        {item.name} * {item.count}
                        <span className="cart-items-actions">
                <button onClick={() => cartCtx.removeItem(item.id)} className="cart-actions">-</button>
                            {item.count * item.price}
                            <button onClick={() => cartCtx.addItem(item)} className="cart-actions">+</button>
                </span>
                    </p>
                ))}
                <h3>Total price - {total}</h3>
                <p className="cart-close-submit">
                    <button className="close" onClick={() => userCtx.hideCart()}>Close</button>
                    <button className="submit" onClick={handleCheckout}>Proceed to checkout</button>
                </p>
            </>
        }

    </Modal>
}