const CustomCheckoutCard = ({ productImage, title, price }) => {
  return (
    <section className="custom-checkout-card-container">
      <img src={productImage} alt="bag" loading="lazy" />
      <section className="custom-checkout-card-container__details">
        <h1>{title}</h1>
        <p>₹{price}</p>
      </section>
    </section>
  );
};

export default CustomCheckoutCard;
