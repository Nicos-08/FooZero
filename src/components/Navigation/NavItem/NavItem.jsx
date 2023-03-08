import { useState } from "react";
import "../../../styles/components/Navigation/NavItem/NavItem.css";

const NavItem = ({ navItemName, navItemSubitems }) => {
    const [menuOpened, updateMenuOpened] = useState(false);
    function changeMenu() {
        if (menuOpened) {
            updateMenuOpened(false)
        } else {
            updateMenuOpened(true)
        }
    }
    return (
        <div className="navigationItem">
            <li className="navItem" onClick={changeMenu}>{navItemName}</li>
            {menuOpened && 
                <div className="subItems">
                    {navItemSubitems.map((item, index)=>(
                        <p className="navSubitem" key={`${item}-${index}`} >{item}</p>
                    ))}
                </div>
            }
        </div>
    )
}

NavItem.defaultProps = {
    navItemName: "HOME",
    navItemSubitems: ["1 Column", "2 Column", "Single Post"]
}

export default NavItem;