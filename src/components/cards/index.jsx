import React from "react";

const Section10 = () => {
  const cards = data.map(({ bgImg, img, title, desc }, idx) => (
    <Card bgImg={bgImg} Img={img} title={title} desc={desc} key={idx} />
  ));
  return (
    <>
      <div className="bg-[#03AEFD] w-full flex flex-col items-center justify-center">
        <p className="font-[Poppins] font-[19.4px] text-center text-white pt-[80px]">
          
          WHAT’S TRENDING
        </p>
        <h2 className="font-[Poppins] font-[39.8px] text-white pt-[10px]">
         
          Latest Blogs & Posts
        </h2>
        <div className="flex flex-row items-center justify-center gap-[0px] mx-[160px] mt-[25px]">
          {cards}
        </div>
      </div>
    </>
  );
};

export default Section10;

let data = [
  {
    bgImg: "/img1.png",
    img: "/1.png",
    title: "Top 10 Home Buying Mistakes to Avoid",
    desc: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
  },
  {
    bgImg: "/img1.png",
    img: "/1.png",
    title: "Top 10 Home Buying Mistakes to Avoid",
    desc: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
  },
  {
    bgImg: "/img1.png",
    img: "/1.png",
    title: "Top 10 Home Buying Mistakes to Avoid",
    desc: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
  },
];

const Card = ({ bgImg, Img, title, desc }) => {
  return (
    <div className="flex flex-col items-start justify-center max-w-[65%]">
      <div
        className="w-[340px] h-[240px] rounded-3xl bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />
      <img src={Img} alt="date" className="absolute mb-[252px] ml-[50px]" />
      <h3 className="font-[30.6px] font-[Poppins] leading-10 text-white pl-[23px]">
        {title}
      </h3>
      <p className="font-[Poppins] font-[16px] leading-6 text-[#D4D4D4] pl-[23px]">
        {desc}
      </p>
    </div>
  );
};

