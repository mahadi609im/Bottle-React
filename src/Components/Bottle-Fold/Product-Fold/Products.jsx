const Products = ({prodArg, handleRemove}) => {
   return (
     <div>
       <h3 className="font-bold my-4 text-2xl">
         Buy Product: {prodArg.length}
         </h3>
         
         <div className="flex border-2 border-slate-300 gap-4 my-10 justify-center">
            {
               prodArg.map(product => <img className="max-w-24 cursor-pointer" key={product.id} src={product.img} onClick={()=> handleRemove(product.id)} />)
            }
         </div>
     </div>
   );
};

export default Products;