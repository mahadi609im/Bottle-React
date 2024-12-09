import { useState } from "react";

const Bottle = ({ bottleArg, handleProductClick }) => {
  // console.log(bottleArg)
   const { name, price, img } = bottleArg;

   const [btnClick, setBtnClick] = useState(false)

   const handleBtnClick = ()=> {
      setBtnClick(true)
   }

   return (
     <div className="p-4 rounded-2xl bg-slate-800">
       <h3 className="text-white font-semibold text-xl my-3">
         {name} <span className="text-red-500">${price}</span>
       </h3>

       <img className="max-w-64 mx-auto" src={img} alt="" />

       <div className="card">
         <button
           className={` ${
             btnClick ? 'bg-red-500 text-slate-50' : 'bg-white text-black'
           } px-5 rounded-md py-2 mt-4 font-semibold `}
           onClick={() => {
             handleProductClick(bottleArg);
             handleBtnClick();
           }}
         >
           Buy
         </button>
       </div>
     </div>
   );
};

export default Bottle
