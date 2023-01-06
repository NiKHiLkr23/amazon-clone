import Product from "./Product";
import Image from "next/legacy/image";
import advertisment from "../public/images/advertisment.jpg";
function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-32 lg:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={Math.floor(rating.rate)}
          />
        ))}
      <div className="md:col-span-full">
        <Image src={advertisment} alt="" />
      </div>
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image, rating }) => (
            <Product
              key={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={Math.floor(rating.rate)}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={Math.floor(rating.rate)}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
