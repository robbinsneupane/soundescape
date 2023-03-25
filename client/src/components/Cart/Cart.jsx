import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import { BsCartX } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { makePaymentRequest } from "../../utils/api";
import { Context } from "../../utils/context";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);
  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <div className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </div>
        </div>

        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No Product in the Cart!</span>
            <button className="return-cta">Return to Shop</button>
          </div>
        )}

        {!!cartItems?.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#36;{cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={handlePayment}>
                  Checkout{" "}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
