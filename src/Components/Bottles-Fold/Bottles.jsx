import { useEffect, useState } from 'react';
import Bottle from '../Bottle-Fold/Bottle';
import { addToLs, getStoreData, removeToLs } from '../../utilities/localStore';
import Products from '../Bottle-Fold/Product-Fold/Products';


const Bottles = () => {
   const [bottles, setBottles] = useState([]);

   useEffect(() => {
      fetch('Data.json')
      .then(res => res.json())
      .then(data => setBottles(data));
   }, []);
  
  useEffect(() => {
    if (bottles.length) {
      const storedData = getStoreData();
      const storedProduct = []
      for (const id of storedData) {
        const bottle = bottles.find(bottle => bottle.id == id)
        if (bottle) {
          storedProduct.push(bottle)
        }
      }
      setBuyProduct(storedProduct)
    }
  }, [bottles])

   const [buyProduct, setBuyProduct] = useState([]);

  const handleProductClick = bottle => {
    const newCount = [...buyProduct, bottle];
    setBuyProduct(newCount);
    addToLs(bottle.id)
  };

  const handleRemove = (id) => {
    // visual remove
    const remaining = buyProduct.filter(i => i.id !== id)
    setBuyProduct(remaining)
    // ls remove
    removeToLs(id)
  }

   return (
     <div>
       <div className="my-10">
         <h3 className="font-bold my-4 text-2xl">Bottles length: {bottles.length}</h3>
         <Products prodArg={buyProduct} handleRemove={handleRemove}></Products>
       </div>

       <div className="grid grid-cols-3 gap-4">
         {bottles.map(i => (
           <Bottle
             key={i.id}
             bottleArg={i}
             handleProductClick={handleProductClick}
           ></Bottle>
         ))}
       </div>
     </div>
   );
};

export default Bottles