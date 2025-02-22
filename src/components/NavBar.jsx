import { NavLink } from "react-router-dom";
import shopLogo from '../images/shopLogo.png';
import user from '../images/user.png';


function NavBar(){
    return(
        <div className="my-3 mx-48 flex items-center justify-between px-5 py-2" >
            <div className="flex items-center">
                <div className="flex gap-2">
                   <img className="w-10 h-10" src={shopLogo} alt="shoplogo" />
                   <h3 className="text-orange-400 font-semibold text-2xl">Minimal <span className="text-rose-600">shop</span>ping</h3>
                </div>
                <div className="flex gap-5 px-4 text-xl">
                   <NavLink>Categories</NavLink>
                   <NavLink>Deals</NavLink>
                   <NavLink>What's New</NavLink>
                   <NavLink>Delivery</NavLink>
                </div>
            </div>
            <div className="flex gap-5">
                <div className="flex gap-1">
                   <NavLink><img src={user} alt="accountlogo" /></NavLink>
                   <NavLink>Account</NavLink>
                </div>
                <NavLink>Cart</NavLink>
            </div>
        </div>
    )
}

export default NavBar;