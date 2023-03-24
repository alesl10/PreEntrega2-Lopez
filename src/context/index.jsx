import { createContext, useState } from "react";

export const Context = createContext();

export function GlobalProvider({children}) {
    const [itemsAddedQuantity, setitemsAddedQuantity] = useState([]);

    const onAdd = () => {
        setitemsAddedQuantity((prev) => prev.concat({}));
    };

    const onRemove = () => {
        let tempCart = itemsAddedQuantity.slice(1);
        setitemsAddedQuantity(tempCart);
    };

    const value = {
        itemsAddedQuantity,
        onAdd,
        onRemove,
        name: "hola mundo",
    }

    return <Context.Provider value={value}>{children}</Context.Provider>

};