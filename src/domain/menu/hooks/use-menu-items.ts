import {useState} from "react";
import {menuItems} from "../lib/item-registry";

export default function useMenuItems() {
    const [myMenuItems, setMyMenuItems] = useState(menuItems);

    const toggleOpen = (itemIndex: number) => {
        const newItems = [...myMenuItems];

        newItems[itemIndex].isOpen = !newItems[itemIndex].isOpen;
        setMyMenuItems(newItems);
    };

    return {
        myMenuItems,
        setMyMenuItems,
        toggleOpen,
    }
}