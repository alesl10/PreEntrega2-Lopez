import { createContext, useState } from "react";

export const Context = createContext();
export function GlobalProvider({ children }) {

    const [productsAdded, setProductsAdded] = useState([]);

    function onAdd(producto, quantity) {
        const isAlreadyAdded = isInCart(producto);

        if (isAlreadyAdded) {
            const productToModify = productsAdded.find(
                (productsAdded) => productsAdded.id === producto.id
            );

            const productModified = {
                ...productToModify,
                quantity: productToModify.quantity + quantity,
            };

            setProductsAdded((prevState) =>
                prevState.map((productsAdded) =>
                    productsAdded.id === producto.id ? productModified : productsAdded
                )
            );
        } else {
            setProductsAdded((prevState) =>
                prevState.concat({ ...producto, quantity })
            );
        }
    }

    function removeItem(itemId) { }
    function clear() { }

    function isInCart(producto) {
        return productsAdded.some((productAdded) => productAdded.id === producto.id);
    }

    
    return (
        <Context.Provider value={{ productsAdded, onAdd }}>
            {children}
        </Context.Provider>
    );
}