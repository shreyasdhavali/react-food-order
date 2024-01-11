import {Modal} from "./Modal";
import {useContext} from "react";
import {UserProgressContext} from "../store/UserProgressContext";
import "./Modal.css"
export const Payment = () => {
    const userCtx = useContext(UserProgressContext);

    return <Modal open={userCtx.progress === 'checkout'}>
        <h1>Support</h1>
        <img className="gpay" src={require(`../../assets/images/gpay.jpg`)} alt="Gpay to contribute"/>
        <p className="checkout">
            <button onClick={() => userCtx.hideCheckout()}>Close</button>
        </p>
    </Modal>
}