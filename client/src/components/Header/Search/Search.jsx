import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import "./Search.scss";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="search the products... "
          value={query}
          onChange={onChange}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data?.data?.map((item) => (
            <div
              key={item.id}
              className="search-results-item"
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <div className="img-container">
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    item.attributes.img.data.attributes.url
                  }
                  alt="earbuds"
                />
              </div>
              <div className="prod-details">
                <div className="name">{item.attributes.title}</div>
                <div className="desc">{item.attributes.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
