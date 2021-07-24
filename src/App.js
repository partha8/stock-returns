import React, { useState } from "react";
import building from "./img/dalalstreet.jpg";
import happy from "./img/happy.gif";
import sad3 from "./img/sad3.gif";

function App() {
  const [costPrice, setCostPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);

  const [theme, setTheme] = useState("");

  const [happyTheme, setHappyTheme] = useState(false);
  const [sadTheme, setSadTheme] = useState(false);
  const [image, setImage] = useState(true);

  const [text, setText] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
    if (Number(costPrice) > Number(currentPrice)) {
      const loss = (Number(costPrice) - Number(currentPrice)) * quantity;
      const lossPercent = (
        ((Number(costPrice) - Number(currentPrice)) * 100) /
        Number(costPrice)
      ).toFixed(2);
      if (lossPercent > 50) {
        setTheme("sad-theme");
        setSadTheme(true);
        setHappyTheme(false);
        setImage(false);
      }
      setText(`You lost ${lossPercent}%. Your total loss is ₹${loss}.`);
    } else {
      const profit = (Number(currentPrice) - Number(costPrice)) * quantity;
      const profitPercent = (
        ((Number(currentPrice) - Number(costPrice)) * 100) /
        Number(costPrice)
      ).toFixed(2);
      if (profitPercent > 50) {
        setTheme("happy-theme");
        setHappyTheme(true);
        setSadTheme(false);
        setImage(false);
      }
      setText(`You gained ${profitPercent}%. Your total profit is ₹${profit}`);
    }
  };
  return (
    <div className="App">
      <section className={`container ${theme}`}>
        <form className="form-container">
          <article>
            <input
              type="number"
              min="0"
              value={costPrice}
              onChange={(e) => setCostPrice(e.target.value)}
            />
            <span>Purchase Price</span>
          </article>
          <article>
            <input
              type="number"
              min="0"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <span>Stock Quantity</span>
          </article>
          <article>
            <input
              type="number"
              min="0"
              value={currentPrice}
              onChange={(e) => setCurrentPrice(e.target.value)}
            />
            <span>Current Price</span>
          </article>
          <article className="btn-container">
            <button onClick={clickHandler} className="btn">
              Submit
            </button>
          </article>
          <article className="output">{text}</article>
        </form>
        <section className="image-container">
          {/* <img src={happy} alt="" /> */}
          {happyTheme && <img src={happy} alt="sad-gif" />}
          {sadTheme && <img src={sad3} alt="happy-gif" />}
          {image && <img src={building} alt="building" />}
        </section>
      </section>
    </div>
  );
}

export default App;
