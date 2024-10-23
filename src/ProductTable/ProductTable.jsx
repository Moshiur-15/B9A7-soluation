const ProductTable = ({
     productTable, 
     removeToPreparingBtn, 
     products, 
     calculateTimeAndCalory,
     totalCalory,
     totalTime }) => {
  // console.log(productTable);
  //   console.log(products)
  return (
    <div className="w-1/3  border rounded-xl">
      {/* fast table */}
      <div className="border-b-2 pb-8">
        <h2 className="text-center py-3 font-bold text-xl">
          Want To Cook :{productTable.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {productTable.map((product, index) => (
                <tr className="hover" key={index}>
                  <th>{index + 1}</th>
                  <td>{product.recipe_name}</td>
                  <td>{product.preparing_time}</td>
                  <td>{product.calories}</td>
                  <td>
                    <button
                      onClick={() => {
                        removeToPreparingBtn(product)
                        calculateTimeAndCalory(product.preparing_time,product.calories)
                      }}
                      className="bg-green-400 px-3 py-1 rounded-full"
                    >
                      preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* second table */}
      <div className="border-b-2 pb-8">
        <h2 className="text-center py-3 font-bold text-xl">
          Want To Cook :{products.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr className="hover" key={index}>
                  <th>{index + 1}</th>
                  <td>{product.recipe_name}</td>
                  <td>{product.preparing_time}</td>
                  <td>{product.calories}</td>
                </tr>
              ))}
              <tr className="border-none">
                <td></td>
                <td></td>
                <td>Total Time = {totalTime}</td>
                <td>Total Calory = {totalCalory}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
