import { useContext, useState } from "react";
import {
  FaCartPlus,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Context } from "../../utils/context";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import "./SingleProduct.scss";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handleAddToCart } = useContext(Context);

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  if (!data) return;
  const product = data.data[0].attributes;

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL + product.img.data.attributes.url
              }
              alt="product"
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#36;{product.price}</span>
            <span className="desc">{product.desc}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1)
                }}
              >
                <FaCartPlus size={20} />
                &nbsp; Add To Cart
              </button>
            </div>
            <div className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span> {product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaInstagram size={16} />
                  <FaTwitter size={16} />
                  <FaLinkedin size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
