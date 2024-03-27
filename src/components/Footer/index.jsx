const Footer = ()=>{
    return (
        <>
        <div>  
        <footer className="footer  bg-gray-300 text-[#808080] px-[140px] pb-[105px]">
            <nav className=" text-[#2B2B2B] mt-[82px]">
                <div className="flex flex-row items-center">
                    <div className="flex flex-col bg-[#03AEFD] justify-center mr-[10px] items-center h-[50px] w-[50px] rounded-full"><img src="/homeicon.png" alt="" srcset="" /></div>
                    <h6 className="footer-title text-[19.4px]">  Rezilla</h6> 
                </div>
                <a className="link link-hover font-medium pt-[32px] ">2728 Hickory StreetSalt <br/>Lake City, UT 84104</a>
                <a className="link link-hover font-medium flex flex-row items-center pt-[50px]"> <img src="/phone.png" className="mr-[8px]" alt="" srcset="" /> <span>+1 206-214-2298</span></a>
                <a className="link link-hover font-medium flex flex-row items-center pt-[28px]"> <img src="/mail.png" className="mr-[8px]" alt="" srcset="" /> <span>support@rezilla.com</span></a>
            </nav> 
            <nav className="mt-[100px]">
                <h6 className="footer-title text-[19.4px] text-[#0B090A] font-medium">Quick Links </h6> 
                <a className="link link-hover text-[#2B2B2B]  pt-[40px]">Home</a>
                <a className="link link-hover text-[#2B2B2B]">About </a>
                <a className="link link-hover text-[#2B2B2B]">Listings</a>
                <a className="link link-hover text-[#2B2B2B]">Services</a>
                <a className="link link-hover text-[#2B2B2B]">Blogs </a>
                <a className="link link-hover text-[#2B2B2B]">Become a agent</a>
            </nav> 
            <nav className="mt-[100px]">
                <h6 className="footer-title text-[19.4px] text-[#0B090A] font-medium">Discovery</h6> 
                <a className="link link-hover text-[#2B2B2B]  pt-[32px]">Canada</a>
                <a className="link link-hover text-[#2B2B2B]">United States</a>
                <a className="link link-hover text-[#2B2B2B]">Germany</a>
                <a className="link link-hover text-[#2B2B2B]">Africa</a>
                <a className="link link-hover text-[#2B2B2B]">India</a>
            </nav> 
            <form className="mt-[100px]">
                <h6 className="footer-title text-[19.4px] text-[#0B090A] font-medium">Subscribe to our<br/> Newsletter!</h6> 
                <fieldset className="form-control w-80 pt-[21px]">
                <label className="input bg-white rounded-[30px] flex items-center gap-2">
                    <input type="text" className="grow text-[14px] text-[#AAAAAA]" placeholder="Email Address" />
                    <kbd className="bg-[#03AEFD] rounded-full w-[40px] h-[40px] flex flex-col items-center justify-center kbd-sm"><img src="/Arrow 2.png" alt="" srcset="" /></kbd>
                </label>
                </fieldset>
                <p className="text-[19.4px] text-[#0B090A] font-medium pt-[32px]">Follow Us on</p>
                <div className=" flex flex-row pt-[30px]">
                    <img className="" src='/linkedin.png' />
                    <img className=" mx-[20px]" src='/fb.png' />
                    <img className="" src='/ig.png' />
                </div>
            </form>
        </footer>

       <FooterTwo />
        </div>
        </>
    )
}
export default Footer
export const FooterTwo=()=>{
    return (
        <>
        <div className="bg-[#0B090A] h-[50px] flex flex-row items-center justify-between px-[160px] text-[#AAAAAA] text-[15px] ">
            <p>© Rezilla – All rights reserved</p>
            <div className="flex flex-row ">
                <p>Terms and Conditions</p>
                <p className="px-[40px]">Privacy Policy</p>
                <p>Disclaimer</p>
            </div>
        </div>
        </>
    )
}