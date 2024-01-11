import {NavLink} from "react-router-dom";
import logo from "../../logo.svg"
import "./Navigation.css"
import {useContext} from "react";
import {CartContext} from "../store/CartContext";
import {UserProgressContext} from "../store/UserProgressContext";

export const Navigation = () => {
    const cartCtx = useContext(CartContext)
    const userCtx = useContext(UserProgressContext)

    const totalItems = cartCtx.items.reduce((total, item)=> total + item.count, 0)

    const handleModalOpen = () => {
        userCtx.showCart()
    }

    return <header className="header">
        <img className="App-logo" src={logo} alt="react logo" />
        <ul className="list">
            <li>
                <NavLink to="/" className={({isActive}) =>
                    isActive ? "active": undefined} end>
                </NavLink>
            </li>
        </ul>
        <h3 className="heading">Welcome to Shreyas's food order website</h3>
        <p className="cart" onClick={handleModalOpen}>Cart items ( {totalItems} )</p>
    </header>
}