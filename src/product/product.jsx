const Product = ({ product, handleProductTable }) => {
  console.log(product);
  const { short_description, recipe_name, recipe_image } = product;
  return (
    <div className="border-2 p-5 rounded-xl ">
      <div className="card bg-base-100">
        <figure>
          <img className="w-full h-64 rounded-xl" src={recipe_image} alt={recipe_name} />
        </figure>
        <div className="card-body px-0 pt-5 pb-0">
          <h2 className="card-title">{recipe_name}</h2>
          <p>{short_description}</p>
          <div className="card-actions ">
            <button
              onClick={() => handleProductTable(product)}
              className="btn rounded-full bg-green-400"
            >
              Want To Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
