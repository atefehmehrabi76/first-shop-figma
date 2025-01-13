function Header(){
    return(

        <div className="bg-orange-400 h-[60px] w-[1920px] text-white grid grid-cols-3 gap-2 items-center px-3">
            <div className="col-start-1 col-end-2 flex gap-1 ">
                <img className="w-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzSvmdU1QWW6IxA-V8LyDs23-uKW69YI-GQ&s" alt="phoneicon" />
                <span>+98(901)2079385</span>
            </div>
            <div className="col-start-2 col-end-4">Get 50% Off Selected Items | <span>Shop Now</span></div>
        </div>
    )
}

export default Header;