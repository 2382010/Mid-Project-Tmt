import { useEffect, useState } from "react";


const Home = () => {
  const [today, setTime] = useState(new Date());
  const currDate = String(today.getDate()).padStart(2, '0');
  const currMonth = String(today.getMonth() + 1).padStart(2, '0');
  const currHour = String(today.getHours()).padStart(2,'0');
  const currMnt = String(today.getMinutes()).padStart(2,'0');
  const currSec = String(today.getSeconds()).padStart(2,"0");
  const currYear = today.getFullYear();

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col space-y-13">
      <div className="mx-auto flex flex-col items-center w-fit mt-3">
        <div className=" w-fit rounded-2xl rounded-br-none bg-gradient-to-r from-[#403D94] via-[#2BC9D9] to-[#4949FF] p-1">
          <img className="rounded-2xl" src="https://images.unsplash.com/photo-1739732119808-0aeef88d14d9?q=80&w=1011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3" alt="hero-bg" />
        </div>
        <div className="flex justify-between w-full">
          <p className="md:text-sm text-xs text-gray-700 font-semibold">{currDate}/{currMonth}/{currYear}</p>
          <p className="md:text-sm text-xs text-white font-semibold rounded-b-2xl bg-[#4949FF] p-2">-- {currHour}:{currMnt}:{currSec} --</p>
        </div>
      </div>
      <div className="flex flex-col space-y-10 rounded-2xl p-3 bg-[#403D94]">
        <p className="text-white font-semibold md:text-4xl text-xl text-center">Introduce</p>
        <div className=" flex flex-col lg:flex-row gap-4 items-center">
          <img className="rounded-2xl w-lg" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className="flex flex-col justify-center space-y-5 bg-sky-500 p-3 rounded-2xl lg:h-[370px]">
            <p className="bg-white w-fit py-2 px-4 rounded-2xl font-bold text-[#161653]">Our Product</p>
            <p className="font-semibold text-gray-100 indent-5">Enhance your beauty with our high-quality makeup, accessories, and delicious food options. From vibrant lip colors to flawless foundations, and tasty treats to satisfy your cravings, we offer products that suit every style and occasion. Safe for all skin types, our collection lets you shine effortlessly.</p>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-4 items-center">
          <div className="lg:h-[370px] overflow-clip rounded-2xl w-full">
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className="lg:order-first flex flex-col justify-center space-y-5 bg-sky-500 p-3 rounded-2xl lg:h-[370px]">
            <p className="bg-white w-fit py-2 px-4 rounded-2xl font-bold text-[#161653]">Our Recipes</p>
            <p className="font-semibold text-gray-100 indent-5">Indulge in our mouth-watering recipes, crafted with fresh ingredients and a passion for flavor. From savory dishes to sweet delights, each recipe is designed to satisfy your taste buds and bring joy to your table. Perfect for any occasion, our recipes are easy to follow and sure to impress.</p>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-4 items-center">
          <img className="rounded-2xl w-lg" src="https://images.unsplash.com/photo-1616509091334-2be806ea7a3b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className="flex flex-col justify-center space-y-5 bg-sky-500 p-3 rounded-2xl lg:h-[380px]">
            <p className="bg-white w-fit py-2 px-4 rounded-2xl font-bold text-[#161653]">Our Post</p>
            <p className="font-semibold text-gray-100 indent-5">Explore the feedback and reactions from our valued customers. From glowing reviews about our makeup and accessories to delightful stories about trying our recipes, our community shares their experiences and love for our products. Join the conversation and be inspired by real stories and honest opinions.</p>
          </div>
        </div>
      </div>

        

    </div>
  )
}

export default Home