import CustomCards from "../components/CustomCards";
import { useProductContext } from "../context/ProductContext";

const Home = () => {
  const { isLoading, products } = useProductContext();

  if (isLoading) {
    return <h1 className="mt-3 px-2">Loading...</h1>;
  }

  return (
    <main className="home-container px-2">
      <h1 className="home-container__title">Products List</h1>
      <section className="home-container__cards">
        {products.map((product) => (
          <CustomCards
            key={product.id}
            product={product}
            productImage={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
