import CustomCheckoutCard from "../components/CustomCheckoutCard";
import { useProductContext } from "../context/ProductContext";

const Checkout = () => {
  const { myCart } = useProductContext();

  const totalPriceOfSelectedItems = () => {
    return myCart.map((item) => item.price).reduce((acc, cur) => acc + cur, 0);
  };

  return (
    <main className="checkout-container px-2">
      <div className="checkout-container__head">
        <p className="checkout-container__title">Selected Items</p>
        <p className="checkout-container__total">
          Total: ₹{totalPriceOfSelectedItems()}
        </p>
      </div>
      <section className="checkout-container__cards">
        {myCart.length > 0 ? (
          myCart.map((item) => (
            <CustomCheckoutCard
              key={item.id}
              productImage={item.image}
              title={item.title}
              price={item.price}
            />
          ))
        ) : (
          <h1>No Items Added Yet</h1>
        )}
      </section>
    </main>
  );
};

export default Checkout;
