function Navbar(){
    return(
        <nav className=" flex justify-around items-center  h-10 bg-blue-600">
            <div className="bg-black h-2 w-10"></div>
            <div className="bg-orange-600 h-2 w-20">
               
            </div>
            <ul className="flex">
                    <li className="bg-red-600 h-2 w-10"></li>
                    <li className="bg-pink-600 h-2 w-10"></li>
                    <li className="bg-green-600 h-2 w-10"></li>  
                </ul>
        </nav>
    )
}

export default Navbar