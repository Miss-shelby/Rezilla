const Blog = ()=>{
    const blogs =[
        {
            id:1,
            img1:'/blog1.png',
            img2:'/tue.png',
            title:'Top 10 Home Buying ',
            span1:'Mistakes to Avoid',
            desc:'Etiam eget elementum elit. Aenean ',
            span2:' dignissim dapibus vestibulum',
            img3:'/arrowicon.png'
        },
        {
            id:2,
            img1:'/blog2.png',
            img2:'/mon.png',
            title:'How to Stage Your  ',
            span1:'Home for a Quick Sale',
            desc:'Nullam odio lacus, dictum quis pretium  ',
            span2:' congue, vehicula venenatis nunc.',
            img3:'/arrowicon.png'
        },
        {
            id:3,
            img1:'/blog3.png',
            img2:'/wed.png',
            title:'5 Tips for First-  ',
            span1:'Time Home Sellers',
            desc:'In hac habitasse platea dictumst.  ',
            span2:' Phasellus vel velit vel augue maximus.',
            img3:'/arrowicon.png'
        }
    ]
    return (
        <>
        <div className="bg-[#03AEFD] pb-[170px]">
            <p className="text-[#FFFFFF] text-[19.4px] font-medium text-center tracking-wider pt-[110px]">WHAT’S TRENDING</p>
            <h2 className="text-[#FFFFFF] pt-[30px] text-[39.8px] font-semibold text-center tracking-wider">Latest Blogs & Posts</h2>
            <div className="flex flex-row justify-center">
                {blogs.map((blog) =>{
                    return (
                        <div key={blog.id} className="flex flex-col justify-center ">
                            <div className="relative ">
                                <img src={blog.img1} />
                                <img className="absolute top-[10px] left-[40px]"  src={blog.img2} alt="" srcset="" />
                            </div>
                            <p className="text-[#FFFFFF]  text-[23.6px] leading-none pt-[10px] ml-[20px]">{blog.title}<span className="block ">{blog.span1}</span></p>
                            <p className="text-[#D4D4D4]  text-[13.6px] font-poppins pt-[20px] ml-[20px]">{blog.desc} <span className="block">{blog.span2}</span></p>
                            <div className="mt-[20px]">
                            <img className="ml-[220px] h-[50px] w-[50px]" src={blog.img3} alt="" srcset="" />
                            </div>
                    </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}
export default Blog 
export const Testimonials = ()=>{
    return (
        <>
        <div className=" pt-[217px] pb-[200px] flex flex-row justify-center items-center bg-white ">
            <div className="">
                <p className="text-[#4361EE] text-[19.4px] tracking-wider font-medium font[-poppins]">TESTIMONIALS</p>
                <p className="text-[#2B2B2B] pt-[20px] text-[36.4px] tracking-wider font-semibold leading-tight font[-poppins]">Look What Our,<span className="block m-0 p-0">Customers Say!</span> </p>
                <p className="text-[#2B2B2B] pt-[20px] text-[15.4px] font-normal font[-poppins]">Fusce venenatis tellus a felis scelerisque, non <span className="block p-0"> pulvinar est pellentesque.</span> </p>
                <div className="flex flex-row pt-[50px]">
                    <img className="h-[40px] w-[40px] mr-[50px]" src="/arrowicon1.png" alt="" srcset="" />
                    <img className="h-[40px] w-[40px]" src="/arrowicon2 (1).png" alt="" srcset="" />
                </div>
            </div>
            <div className=" ml-[170px] flex flex-row ">
                <div className="relative flex flex-col px-[50px] pt-[34px] mr-[30px] z-10  bg-white shadow-2xl rounded-2xl shadow-lg ">
                    <img className="absolute z-0 left-[-10px] top-[-20px] h-[50px] w-[50px]" src="/rounded (1).png" />
                    <img className="w-[60px]  h-[26px]" src="/comment.png" alt="" srcset="" />
                    <p className="text-[#2B2B2B] w-[380px] font-[poppins] text-[17.4px] pt-[18px] pb-[30px] ">I highly recommend Jodi J. Appleby. She was attentive to our
                        needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!</p>
                    <hr className="bg-[#D4D4D4]"/>
                    <div className="flex flex-row justify-between items-center py-[20px]">
                        <div className="flex flex-row items-center">
                            <img className="w-[40px]  h-[40px] mr-[18px]" src="/profile.png" alt="" srcset="" />
                            <p className="text-[#2B2B2B] font-[poppins] text-[17.4px] ">Barbara D. Smith</p>
                        </div>
                        <div> <img src="/stars.png" alt="" srcset="" /></div>
                    </div>
                   
                </div>
                <img className="h-[100px] mt-[100px]" src="/line.png" alt="" srcset="" />
            </div>
        </div>
        </>
    )
}

export const Agents = ()=>{
    return (
        <>
        <div className="bg-white relative pb-[180px] ">
            <div className="bg-[#03AEFD] h-[250px] w-full   max-w-[1200px] mx-auto flex flex-row  items-center justify-center  rounded-[40px]">
               <div className="flex flex-col items-center justify-center mr-[85px]">
                    <h3 className="text-[39.8px] text-white font-semibold font-[poppins] text-center">Become a Agent.</h3>
                    <p className="text-[16px] text-white font-normal font-[poppins] text-center">Fusce venenatis tellus a felis scelerisque. <br/>venenatis tellus a felis scelerisque. </p>
               </div>
               <div>
                    <button className="bg-white  h-[49px] w-[165px] text-[#03AEFD] text-center outline-none border-none  rounded-[30px]">Register Now</button>
               </div>
            </div>
            <img className="absolute top-[-53px] ml-[60px]" src="/agents.png" alt="" srcset="" />
            <img className="absolute top-[7rem] h-[70px]  w-[70px] left-[20rem]  " src="/ball.png" alt=""  />
            <img className="absolute top-[-2rem] right-[6rem] h-[70px]  w-[70px]" src="/ball.png" alt=""  />
        </div>
        
        </>
    )
}