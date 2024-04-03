const Carousel =()=>{ 
    return (
        <>
          <div className="carousel w-[330px] h-[210px] sm:w-[540px] sm:h-[340px] md:w-[540px] sm:h-[340px] lg:w-[540px] lg:h-[340px] rounded-2xl mt-[40px] ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-1 top-1/2">
      <a href="#slide4" className="btn  btn-circle bg-white ">❮</a> 
      <a href="#slide2" className="btn  btn-circle bg-white ">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className=" btn  btn-circle bg-white hover:bg-transparent">❮</a> 
      <a href="#slide3" className="btn   btn-circle bg-white hover:bg-transparent">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn  btn-circle  bg-white hover:bg-transparent">❮</a> 
      <a href="#slide4" className="btn  btn-circle bg-white hover:bg-transparent">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="h-[340px] w-[540px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle bg-white hover:bg-transparent">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-white  hover:bg-transparent">❯</a>
    </div>
  </div>
</div>
        </>
    )
}
export default Carousel