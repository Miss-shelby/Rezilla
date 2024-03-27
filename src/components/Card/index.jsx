const CardOne = ({bgImg,btn,price,location,locationTwo,img1,img2,bed,bath})=>{
    return (
        <>
          <div className="flex flex-col ">
                <div
                className="w-[340px] h-[340px] rounded-3xl  bg-center bg-no-repeat bg-cover mt-[30px]"
                style={{
                backgroundImage: `url(${bgImg})`
                }}/>
                 <p className="text-[27px] font-normal font-[poppins] text-[#2B2B2B] pt-[20px]">{price}</p>
                 <p className="text-[19px] font-medium font-[poppins] text-[#2B2B2B] py-[7px]">{location}</p>
                 <p className="text-[16px] font-normal font-[poppins] text-[#64748B] "> {locationTwo}</p>
                 <div className="flex flex-row ">
                    <p className="flex flex-row items-center mr-[70px] pt-[5px]"> <img src={img1} alt="" srcset="" /> <span className="text-[#2B2B2B]  ml-[10px] font-normal font-[poppins]">{bed}</span></p>
                    <p className="flex flex-row items-center"> <img src={img2} alt="" srcset="" /> <span  className="text-[#2B2B2B] ml-[10px] font-normal font-[poppins]">{bath}</span></p>
                 </div>
            </div> 
      </>
    )
}
export default CardOne

export const CardTwo = ({img,title,desc})=>{
    return (
        <>
          <div className="flex flex-col justify-center items-center w-[340px] h-[353px] bg-white rounded-[30px]">
                        <div className="bg-[#4361EE] rounded-full w-[90px] h-[90px] flex flex-col items-center justify-center">
                            <img src={img} alt="" srcset="" />
                        </div>
                        <p className="text-[#2B2B2B] text[19.4px] font-[poppins] font-medium pt-[30px]">{title}</p>
                        <p className="text-[#64748B] text[16px] font-[poppins] text-center w-[200px] pt-[20px]">{desc}</p>
                    </div>
        </>
    )
}
export const CardBackground = ({ bgImg, children,width}) => {
    return (
        <div
            className="bg-center bg-no-repeat bg-cover  w-[300px] h-[320px]" // Set width to 100%
            style={{
                backgroundImage: `url(${bgImg})`,
                width:width
            }}
        >
         <p>{children}</p>
        </div>
    );
};
// experts array
const experts = [
    {
        id:1,
        imgSrc:'/brendon.png',
        name:'Brendon M',
        position:'CEO & Founder'
    },
    {
        id:2,
        imgSrc:'/jodi.png',
        name:'Jodi J. Appleby',
        position:'Real Estate Developer'
    },
    {
        id:3,
        imgSrc:'/justin.png',
        name:'Justin S. Meza',
        position:'Listing Agent'
    },
    {
        id:4,
        imgSrc:'/smith.png',
        name:'Susan T. Smith',
        position:"Buyer's Agent"
    }
]
// we create a compoents and pass props for our experts 
export const Expert = ({img,name,position})=>{
    return (
        <>
          <div>
                <img src={img} />
                <h3 className="text-[#0B090A] pt-[30px]font-normal font-[poppins] text-[27px]">{name}</h3>
                <p  className="text-[#4361EE] pt-[50px] font-medium font-[poppins] text-[16px]">{position}</p>
            </div>
        </>
    )
}
//we map and create a variable to store it then use our array as the value of our props 
export const mappedExpert = experts.map(({imgSrc,name,position,id})=>{
    return <Expert img={imgSrc} name={name} position={position} key={id} />
})