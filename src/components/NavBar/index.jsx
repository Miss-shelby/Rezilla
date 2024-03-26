const Nav = ()=>{
    return(
    <>
      <div className="navbar bg-[#FFFFFF] px-[100px] h-[80px] mt-[30px] fixed w-full top-0 z-50">
        <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Rezilla</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="  text-[#2B2B2B] text-[16px] bg-[#d5d7e0] rounded-full w-80px px-[15px] py-[6px] ">Home</a>
    <a className="btn btn-ghost text-[#2B2B2B] text-[16px]">About</a>
    <a className="btn btn-ghost text-[#2B2B2B] text-[16px]">Listings</a>
    <a className="btn btn-ghost text-[#2B2B2B] text-[16px]">Services</a>
    <a className="btn btn-ghost text-[#2B2B2B] text-[16px]">Blogs</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="flex flex-row ">
        <div className='rounded-full bg-[#03AEFD] flex flex-col items-center justify-center  h-[40px] w-[40px]'>
            <img className=" w-full" src="/homeicon.png" alt="" srcset="" /></div><a className="text-[#1E1E1E] text-[20px]">Rezilla</a></li>
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li> */}
    </ul>
  </div>
  <div className="navbar-end">
    <p><img src="" alt="" srcset="" /><span className="text-[#2B2B2B] text-[16px] text-base-500 mr-[20px]">Login/Register</span></p>
    <a className=" bg-[#03AEFD] text-white flex flex-row items-center text-[16px] py-[10.5px] px-[26px] rounded-3xl"> <img src="/homeicon.png" alt="" srcset="" /><span className="ml-[8px]">Add Listing</span></a>
  </div>
</div>
    </>
    )
}
export default Nav;