import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div className="my-3 mx-48 flex items-center justify-between px-5 py-2" >
            <div className="flex items-center">
                <div className="flex gap-2">
                   <img className="w-10 h-10" src="https://s3-alpha-sig.figma.com/img/6b20/415f/edac8b4ec9a195f79e28cf4c95c69be1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JRyEqoPoT4M22gaRZ0JU~MTODekNK2nd4nAUdOQZxnUqE4IJ-kUDUdhEhAl1WuugdfR3xdkOeaCQsbG6tMyYUlCVGufJ1lJzpEn5lEnkRCeM5ocP3IlE7K~QE-3~ZW40jEZrA3b9yDNmJz5895oMtycdFEChHMcUHHaAtXDVbkP8IC7sfTOHI~mYynEwKuIYDB0o75D5j0NwHAcakGsA74pt1xqTQHxWzT5lEJpisRekfkPp9yOk7MPk1BXcI9B1x1tXr~QjusRulCVbNEo19~9qtesujCjP-3BoLjvv~GElEq4sY8SzipICSGYhsqckQ0vhNoOuXm38LJL06aVjKw__" alt="shoplogo" />
                   <h3 className="text-orange-400 font-semibold text-2xl">Minimal <span className="text-rose-600">shop</span>ping</h3>
                </div>
                <div className="flex gap-5 px-4">
                   <NavLink>Categories</NavLink>
                   <NavLink>Deals</NavLink>
                   <NavLink>What's New</NavLink>
                   <NavLink>Delivery</NavLink>
                </div>
            </div>
            <div className="flex gap-5">
                <div className="flex gap-1">
                   <NavLink><img  className="w-6 h-5"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIt9pSWLfyT326xneRNhKBU3CHn4zVktQI0w&s" alt="accountlogo" /></NavLink>
                   <NavLink>Account</NavLink>
                </div>
                <NavLink>Cart</NavLink>
            </div>
        </div>
    )
}

export default NavBar;