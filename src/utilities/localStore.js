function getStoreData() {
   const getStrData = localStorage.getItem('buyProduct');
   if (getStrData) {
      return JSON.parse(getStrData)
   }
   return []
}

function saveToLs(buyProduct) {
   const productStringified = JSON.stringify(buyProduct)
   localStorage.setItem('buyProduct', productStringified)
}

function addToLs(id) {
   const buyProduct = getStoreData()
   buyProduct.push(id)
   saveToLs(buyProduct)
}

function removeToLs(id) {
   const buyProduct = getStoreData()
   const remaining = buyProduct.filter(i => i !== id) 
   saveToLs(remaining)
}

export { addToLs, getStoreData, removeToLs };