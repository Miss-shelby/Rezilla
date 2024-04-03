const Nav = ()=>{
    return(
    <>
      <div className="navbar bg-[#FFFFFF] px-[30px] sm:px-[100px] lg:px-[100px] h-[80px] sm:mt-[30px] fixed w-full top-0 z-50">
      <div className="navbar-start item-center">
    <a className=" hidden sm:block md:flex text-[#2B2B2B] text-[16px] bg-[#d5d7e0] rounded-full w-80px px-[15px] py-[6px] ">Home</a>
    <a className=" hidden sm:block md:flex btn btn-ghost text-[#2B2B2B] text-[16px]">About</a>
    <a className=" hidden sm:block md:flex btn btn-ghost text-[#2B2B2B] text-[16px]">Listings</a>
    <a className=" hidden sm:block md:flex btn btn-ghost text-[#2B2B2B] text-[16px]">Services</a>
    <a className=" hidden sm:block md:flex btn btn-ghost text-[#2B2B2B] text-[16px]">Blogs</a>
  </div>
  <div className="navbar-center">
    <ul className="menu menu-horizontal px-1">
      <li className="flex flex-row items-center ">
      <div className="flex flex-row items-center">
                    <div className="flex flex-col bg-[#03AEFD] justify-center mr-[10px] items-center h-[40px] w-[40px] rounded-full"><img src="/homeicon.png" alt="" srcset="" /></div>
                    <h6 className="footer-title text-[19.4px] text-[#1E1E1E]">  Rezilla</h6> 
                </div>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <p className="flex flex-row items-center hidden sm:flex md:flex "><img src="/profile (2).png" alt="" srcset="" /><span className="text-[#2B2B2B] text-[16px] text-base-500 mr-[20px] ml-[10px]">Login/Register</span></p>
    <a className="hidden sm:flex md:flex  bg-[#03AEFD] text-white flex flex-row items-center text-[16px] py-[10.5px] px-[26px] rounded-3xl"> <img src="/homeicon.png" alt="" srcset="" /><span className="ml-[8px]">Add Listing</span></a>
  </div>
</div>
    </>
    )
}
export default Nav;