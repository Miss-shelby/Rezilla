import Nav from "../../components/NavBar";
import Carousel from "../../components/carosel";
import CardOne from "../../components/Card";
import { CardTwo,CardBackground } from "../../components/Card";
import Blog from "../../components/Blogs/blog";
import { Testimonials } from "../../components/Blogs/blog";
import { Agents } from "../../components/Blogs/blog";
// import { Expert } from "../../components/Card";
import { mappedExpert } from "../../components/Card";
import Footer from "../../components/Footer";

const Home = ()=>{
    console.log(mappedExpert)
    return (
    <>
       <div className="homeWrapper">
            <div className="parent-div bg-[#03AEFD] hidden sm:block lg:block md:block h-[40px] fixed top-0 z-50 w-full">
                <div className='bg-[#03AEFD] py-3 text-[13.3px] h-[40px] sm:flex justify-between items-center  text-white px-[100px] hidden sliding-div'>
                    <div className="flex flex-row items-center">
                        <img src="/locationicon (1).png" alt="" srcSet="" />
                        <p className="pl-3">Rezilla, 18 Grattan St, Brooklyn</p>
                    </div>
                    <div className="flex">
                        <p className="pr-3 flex flex-row items-center"> <img src="mailnav (2).png" alt="" srcSet="" /><span className="pl-3">+1 206-214-2298</span></p>
                        <p className="flex flex-row items-center"><img src="mailnav (1).png" alt="" srcSet="" /><span className="pl-3">support@rezilla.com</span></p>
                    </div>
                </div>
            </div>

            <Nav/>
            <div className="relative heroSection w-full bg-red-500 sm:px-[100px] flex flex-col items-center justify-center sm:flex-row md:flex-row lg:flex-row sm:justify-between lg:justify-between pt-[150px]  bg-gradient-to-b from-[4361EE00]  to-[4361EE70] pb-[127px]">
                <div className="flex flex-col items-center sm:items-start   border-green-500 ">
                   <p className="text-[#4361EE] text-[16px] sm:text-[19.4px] font-medium tracking-wider">REAL ESTATE</p>
                   <h4 className="text-[#0B090A]text-[42px] sm:text-[57.3px] font-bold leading-none">Find a perfect home <br /> you love..!</h4>
                   <p className='text-[#64748B]text-[13.3px] sm:text-[16px] pt-[30px]'>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.<br/> Integer a dolor eu sapien sodales vulputate ac in purus.</p>
                   <img className="h-[50px] w-[50px] absolute bottom-[0rem] sm:top-[24rem] sm:left-[37rem]" src="/rounded (1).png" alt="" srcset="" />
                   <Carousel/>
                </div>
                <div className=" bg-white rounded-[20px] sm:mt-[0px] mt-[30px] w-[333px] sm:w-[420px] pb-[60px]">
                    <div className="flex flex-row justify-between border-b border-[#AAA] w-full ">
                        <p className=" font-medium text-[#03AEFD] ml-[50px] text-[16px] border-b-2 px-[30px] border-solid border-[#03AEFD] pt-[40px] pb-[29px]">For Sale</p>
                        <p className=" pt-[40px] font-medium pb-[29px] pr-[82px]">For Rent</p>
                    </div>
                    <form className="flex flex-col items-center justify-center ">
                            <input type="text" placeholder="New York, San Francisco, etc" className=" mt-[30px] input input-ghost rounded-[20px] w-full max-w-xs" />
                            <select className="select select-ghost w-full max-w-xs  mt-[30px] rounded-[20px]">
                                <option disabled selected >Select Property Type</option>
                                <option>Svelte</option>
                                <option>Vue</option>
                                <option>React</option>
                            </select>
                            <select className="select select-ghost w-full max-w-xs  mt-[30px] rounded-[20px]">
                                <option disabled selected >Select Rooms</option>
                                <option>Svelte</option>
                                <option>Vue</option>
                                <option>React</option>
                            </select>
                            <p className="flex flex-row mr-[180px] items-center justify-items-start text-[#03AEFD] text-[13.3px] pt-[22px] "><img className="pr-[10px]" src="/Group (2).png" alt="" srcset="" /><span>Advance Search</span></p>
                            <div className="relative w-full max-w-xs mt-[60px]">
                                <input type="text" placeholder="search" className="relative bg-[#03AEFD] focus:outline-none  placeholder:text-white text-center input input-ghost rounded-[20px] w-full" />
                                <img className="absolute top-[16px] right-[10px] left-[100px] w-auto mx-2 pointer-events-none " src="./Vector (28).png" alt="" srcset="" />
                            </div>
                        </form>
                </div>
            </div>
            <div className="services bg-white 100vh ">
                <div className="hidden sm:flex  bg-pink-400 sm:flex-row item-center justify-center absolute  sm:top-[50rem] sm:left-[15rem] ">
                    <img className="" src="/absolute (2).png" alt="" srcset="" />
                    <img className="" src="/absolute (1).png" alt="" srcset="" />
                </div>
                <div className="flex sm:flex-row flex-col col-reverse   items-center pt-[110px]">
                    <img className='ml-[169px] mr-[230px] hidden sm:block md:block' src="public\rounded (1).png" alt="" srcset="" />
                    <p className='text-center'>Trusted by 100+ Companies across the globe!  </p>
                </div>
                <div className="flex flex-row flex-wrap px-[30px]  sm:items-center justify-between sm:px-[140px] pt-[24px] pb-[228px]">
                    <img className='mix-blend-luminosity' src="/rounded (2).png" alt="" srcset="" />
                    <img className='mix-blend-luminosity'  src="/rounded (3).png" alt="" srcset="" />
                    <img  className='mix-blend-luminosity'src="/rounded (4).png" alt="" srcset="" />
                    <img className='mix-blend-luminosity' src="/rounded (5).png" alt="" srcset="" />
                    <img className='mix-blend-luminosity' src="/rounded (6).png" alt="" srcset="" />
                    <img className='mix-blend-luminosity' src="/netflix.png" alt="" srcset="" />
                </div>
            </div>
            <div className='flex-col sm:flex bg-white justify-center items-center px-[50px] sm:px-[160px] relative'>
                <div>
                    <p className='text-[#4361EE] text-[16px] sm:text-[19px] font-medium tracking-wider pb-[30px]'> WHO ARE WE</p>
                    <h4 className=' w-full sm:w-[500px] font-bold text-[20px] sm:text-[39px] text-[#2B2B2B] leading-none'>Assisting individuals in locating the appropriate real estate.</h4>
                    <p className='text-[#64748B] w-full text-[16px] sm:w-[500px] pt-[30px] pb-[30px]'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.</p>
                    <div className='flex flex-row items-center w-[400px] h-[131px] rounded-[30px] p-[30px] shadow-2xl shadow-white-900/40'>
                        <img src='/iconone.png' />
                        <div className='ml-[15px]'>
                            <p className='text-[#4361EE] text-[19px] font-medium'>Donec porttitor euismod</p>
                            <p className='text-[#64748B] text[16px]'>Nullam a lacinia ipsum, nec <span className='block'>dignissim purus. Nulla</span></p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center w-[400px] h-[131px] rounded-[30px] p-[30px] mt-[30px] shadow-2xl bg-white shadow-white-900/40'>
                        <img src='/icontwo.png' />
                        <div className='ml-[15px]'>
                            <p className='text-[#4361EE] text-[19px] font-medium'>Donec porttitor euismod</p>
                            <p className='text-[#64748B] text[16px]'>Nullam a lacinia ipsum, nec <span className='block'>dignissim purus. Nulla</span></p>
                        </div>
                    </div>
                </div>
                <div className='image1 flex flex-row  '>
                    <div className='image1  '>
                       <div className=' h-[500px] w-[280px] mt-[70px]'><img className="object-cover h-full w-full"  src='/bgimageone.png' /> </div>
                        <img className='absolute bottom-[75%] right-[25%] h-[205px] w-[206px]' src='/round-text.png'/>
                    </div>
                    <div className='flex flex-col mt-[30px]'>
                        <div className="w-[277px] h-[280px]"><img className="object-cover h-full w-full" src='/Rectangle 15 (1).png' /> </div>
                        <div className="h-[180px] w-[277px] flex items-center justify-center">
                            <img  className="object-cover h-full w-full"   src='/Rectangle 16 (1).png' /></div>
                    </div>
                </div>
            </div>
            <div className="bg-white pt-[100px] px-[160px]">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-[19px] text-[#4361EE] font-medium leading-5">CHECK OUT OUR NEW</p>
                        <p className="text-[#2B2B2B] text-[39px] font-semibold pt-[30px]">Latest Listed properties </p>
                        <p className="text-[#64748B] text-[16px] pt-[30px]">Donec porttitor euismod dignissim. Nullam a lacinia ipsum, <br/> nec dignissim purus.</p>
                    </div>
                    <div className="flex items-center">
                    <button className="btn btn-outline hover:bg-transparent border-[#03AEFD] text-[#03AEFD] rounded-[20px] px-[25px]">All</button>
                    <button className="btn btn-outline hover:bg-transparent border-[#03AEFD] text-white bg-[#03AEFD] rounded-[20px] px-[25px] mx-[20px]">Sell</button>
                    <button className="btn btn-outline hover:bg-transparent border-[#03AEFD] text-[#03AEFD] rounded-[20px] px-[25px]">Rent</button>
                    </div>
                </div>
                <div className="flex flex-row pb-[199px] items-center justify-center">
                    <CardOne bgImg="/house1.png" price='$ 5,970' 
                    location='Tranquil Haven in the Woods' locationTwo='103 Wright CourtBurien, WA 98168'
                    img1='bed.png' bed='4 beds' img2='bath.png' bath='3 baths'
                     > <img className="mt-[260px] ml-[30px]" src='/Popular.png' /></CardOne>
                    <div className="mx-[50px]">
                        <CardOne bgImg="/house2.png" price='$ 1,970' 
                        location='Serene Retreat by the Lake' locationTwo='1964 Jehovah Drive, VA 22408'
                        img1='bed.png' bed='3 beds' img2='bath.png' bath='2 baths'
                        > <img className="mt-[268px] ml-[30px]" src='/Popular (1).png' /></CardOne>
                    </div>
                     <CardOne bgImg="/house3.png" price='$ 3,450' 
                    location='Charming Cottage in the Meadow' locationTwo='1508 Centennial Farm RoadHarlan, 51537'
                    img1='bed.png' bed='4 beds' img2='bath.png' bath='4 baths'
                     ><img className="mt-[268px] ml-[30px]" src='/Popular (2).png' /></CardOne>
                </div>
            </div>
            <div className="bg-[#D4D4D4] flex flex-col items-center justify-center">
                <p className="text-[#2B2B2B] text-[19px] font-medium font-[poppins] pt-[100px]">OUR SERVICES</p>
                <p className="text-[#0B090A] text-[39.8px] pt-[40px] font-[poppins]">Donec porttitor euismod dignissim</p>
                <div className="flex flex-row pt-[70px] pb-[137px]">
                    <CardTwo img='/searchIcon.png' 
                    title='Buy a New Home' desc='Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.'/>
                    <div className="mx-[50px]">
                        <CardTwo img='/bedIcon.png' 
                        title='Sell a House' desc='Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.'/>
                    </div>
                    <CardTwo img='\bigHome.png' 
                    title='Rent a House' desc='Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.'/>
                </div>
            </div>
            <div className="bg-white ">
                <img className="height-[50px] w-[50px] mx-auto pt-[61px]" src='/rounded (1).png' />
                <p className="text-[#4361EE] pl-[160px] font-medium text-[19.4px] tracking-wider font-[poppins] pt-[80px]"> AREAS ACROSS THE TOWN</p>
                <p className="text-[#585656] pl-[160px] font-semi-bold text-[39.9px]  font-[poppins] pt-[20px] pb-[80px]">Neighborhood Properties</p>
                <div className="flex flex-row justify-center flex-wrap px-[100px]">
                        <CardBackground bgImg="/ny.png" width='300px'>
                            <p className="font-[poppins] text-[57.3px] text-[#FFFFFF55] pl-[50px] pt-[156px]">216
                            <span className='text-[19.4px] block text-white'>New York City, NY</span></p>
                        </CardBackground>
                        <CardBackground bgImg="/ny-3.png" width='300px'>
                            <p className="font-[poppins] text-[57.3px] text-[#FFFFFF55] pl-[50px] pt-[156px]">141
                            <span className='block text-[19.4px] text-white '>HOUSTON, TX</span></p>
                        </CardBackground>
                        <CardBackground bgImg="/ny4.png" width='420px'>
                            <p className="font-[poppins] text-[57.3px] text-[#FFFFFF55] pl-[50px] pt-[156px]">212
                            <span className='block text-[19.4px] text-white '>San Diego , CA</span></p>
                        </CardBackground>  
                        <CardBackground bgImg="/ny2.png" width='412px'>
                            <p className="font-[poppins] text-[57.3px] text-[#FFFFFF55] pl-[50px] pt-[156px]">183
                            <span className='block text-[19.4px] text-white '>Phildadelphia, PA</span></p>
                        </CardBackground>   
                        <CardBackground bgImg="/san.png" width='658px'>
                            <p className="font-[poppins] text-[57.3px] text-[#FFFFFF55] pl-[50px] pt-[156px]">112
                            <span className='block text-[19.4px] text-white'>San Francisco, CA</span></p>
                        </CardBackground>
                </div>
            </div>
            <div className="flex flex-col  bg-white  pt-[210px] px-[200px]">
                <div className="ml-[50rem]"><img className="h-[100px] w-[100px]" src="/rounded (1).png" alt="" srcset="" /></div>
                <p className="text-[#4361EE] text-[19.4px] text-center font-poppins font-medium uppercase tracking-wider">Introduce yourself to  </p>
                <p className="text-[#2B2B2B] text-[39.4px] pb-[100px] text-center  font-poppins font-semibold" >Our Team of Experts</p>
                <div className="flex flex-row items-center justify-between pt-100px pb-[180px]">
                   {/* <Expert img='/brendon.png' name='Susan T. Smith' position="Buyer's Agent" />
                    */}
                    {/* we call our mapped variable here */}
                    {mappedExpert}
                </div>
            </div>
            <div><Blog /></div>
            <div><Testimonials /></div>
            <div> <Agents/></div>
            <Footer />
       </div>
    </>
    )
}
export default Home;