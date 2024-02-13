import { useProductContext } from "../context/ProductContext";

const CustomCards = ({ productImage, title, price, product }) => {
  const { setMyCart } = useProductContext();

  const handleAddCart = () => {
    setMyCart((prev) => [...prev, product]);
  };

  return (
    <div className="custom-card-container">
      <section className="custom-card-container__image-container">
        <img src={productImage} alt="black shirt" loading="lazy" />
      </section>
      <section className="custom-card-container__details">
        <h3 title={title}>{title}</h3>
        <p>Price: ₹{price}</p>
      </section>
      <button type="button" onClick={handleAddCart}>
        Add to Card
      </button>
    </div>
  );
};

export default CustomCards;
