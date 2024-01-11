import {createContext, useReducer} from "react";

export const CartContext = createContext({
    items: [],
    addItem: (meal) => {},
    removeItem: (id) => {}
})

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = [...state.items]
        const existingItemIndex = state.items.findIndex(item => item.id === action.meal.id)
        if (existingItemIndex > -1) {
            const existingItem = state.items[existingItemIndex]
            const updatedItem = {...existingItem,
            count: existingItem.count + 1}
            updatedItems[existingItemIndex] = updatedItem
        } else {
            const updatedItem = {...action.meal,
            count: 1}
            updatedItems.push(updatedItem)
        }
        return {...state, items: updatedItems}

    }
    if (action.type === 'REMOVE') {
        const updatedItems = [...state.items]
        const existingCartItemIndex = state.items.findIndex(item =>
        item.id === action.id)

        let updatedItem = state.items[existingCartItemIndex]
        if (updatedItem.count === 1) {
            updatedItems.splice(updatedItem, 1)
        } else {
            updatedItem = {...updatedItem,
                count: updatedItem.count - 1
            }
            updatedItems[existingCartItemIndex] = updatedItem
        }
        return {...state, items: updatedItems}
    }
}

export const CartContextProvider = ({children}) => {

    const [cart, dispatchAction] = useReducer(cartReducer, {items: []})

    const addItem = (meal) => {
        dispatchAction({type: 'ADD', meal})
        console.log("add items")
    }

    const removeItem = (id) => {
        dispatchAction({type: 'REMOVE', id})
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    }
    return <CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>
}