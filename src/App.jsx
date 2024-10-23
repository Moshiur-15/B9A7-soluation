import { useState } from "react";
import Products from "./products/products";
import ProductTable from "./ProductTable/ProductTable";

function App() {
  // productTable
  const [productTable, setProductTable] = useState([]);
  // remove and resave useState
  const [products, setProducts] = useState([]);
  // total time, calory useState
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalory, setTotalCalory] = useState(0);
  // const handleProductTable = data =>{
  //   const isExist = productTable.find(product=>product.recipe_id === data.recipe_id);
  //   if(!isExist){
  //     setProductTable([...productTable, data])
  //   }
  //   else{
  //     alert("Product already exist")
  //   }
    
  // }
  const handleProductTable = data =>{
    const isExist = productTable.some(product=>product.recipe_id === data.recipe_id);
    if(!isExist){
      setProductTable([...productTable, data])
    }
    else{
      alert("Product already exist")
    }
    
  }
  // remove and resave
  const removeToPreparingBtn = id =>{
    const delatePreparing = productTable.find(product=>product.recipe_id === id.recipe_id) ;

    const remaining = productTable.filter(product=>product.recipe_id !== id.recipe_id);
    setProductTable(remaining);
    setProducts([...products, delatePreparing])
  }
  // total time, calory
  const calculateTimeAndCalory = (time, calory) =>{
    setTotalTime(totalTime + time);
    setTotalCalory(totalCalory + calory);
  }
  
  
  return (
    <>
      <div className="p-3 md:p-0 container mx-auto flex flex-col md:flex-row my-10 gap-5">
        <Products handleProductTable={handleProductTable}></Products>
        <ProductTable 
        productTable={productTable} 
        removeToPreparingBtn={removeToPreparingBtn} 
        products={products}
        calculateTimeAndCalory={calculateTimeAndCalory}
        totalCalory={totalCalory}
        totalTime={totalTime}/>
      </div>
    </>
  );
}

export default App;
