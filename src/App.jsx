import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import introImg from "./images/illustration-working.svg";
import brandImg from "./images/icon-brand-recognition.svg";
import detailImg from "./images/icon-detailed-records.svg";
import customImg from "./images/icon-fully-customizable.svg";

function App() {
  const refHandler = useRef();
  const [copy, setCopy] = useState(false);
  const [storageData, setStorageData] = useState([]);
  const [shortened, setShortened] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [colorAlter, setColorAlter] = useState(Array(20).fill(false));
  console.log(colorAlter);
  console.log(shortened);

  const shorteningFunc = async (e) => {
    e.preventDefault();
    let inputValue = refHandler.current.value;
    const baseUrl = "https://api.shrtco.de/v2/";
    // let resultHolder = storageData[0] === null ? [] : [...storageData];

    // console.log(resultHolder);

    if (inputValue.length <= 0) {
      setErrorMessage("provide a valid url");
      setInterval(() => {
        setErrorMessage(false);
      }, 3000);
    } else {
      try {
        const { data } = await axios.get(
          `${baseUrl}/shorten?url=${inputValue}`
        );
        if (data && storageData !== null) {
          const hold = storageData.concat(data.result);
          window.localStorage.setItem("shotenUrl", JSON.stringify(hold));
        } else {
          window.localStorage.setItem(
            "shotenUrl",
            JSON.stringify([data.result])
          );
        }
      } catch (error) {
        console.error(error);
      }

      refHandler.current.value = "";
    }
  };

  // console.log(shortened);

  const handleCopy = (id) => {
    let newArr = [];

    colorAlter.map((unit, index) => {
      if (index == id) {
        newArr.push(!unit);
      } else {
        newArr.push(unit);
      }
    });
    setColorAlter(newArr);
    console.log(newArr);
  };

  useEffect(() => {
    const res = localStorage.getItem("shotenUrl");
    const parsedData = JSON.parse(res);
    setStorageData(parsedData);
  }, []);

  console.log(storageData);

  return (
    <div>
      <Navbar />
      <div className="intro-page">
        <div className="intro-left">
          <h1 className="intro-title">More than just shorter links</h1>
          <p className="intro-text">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="learn">Get Started</button>
        </div>
        <div className="intro-right">
          <img src={introImg} alt="intr" className="illustration" />
        </div>
      </div>
    
      <div className="second-div">
        <div className="displaced">
          <div className="inputHolder">
            <div className="plab">
              <input
                type="text"
                className={errorMessage ? "input error" : "input"}
                ref={refHandler}
                placeholder="Shorten a link here..."
                // onChange={({ target }) => setInputVal(target.value)}
              />
              <button type="submit" className="submit" onClick={shorteningFunc}>
                Shorten It!
              </button>
            </div>
            <span style={{ color: "red" }}>{errorMessage}</span>
          </div>
          <div className="results">
            {storageData.map((unit, index) => (
              <div key={index} className="whitespace">
                <span className="original">{unit.original_link}</span>
                <div className="spaceright">
                  <span className="short-link">{unit.full_short_link}</span>
                  <button
                    className={
                      colorAlter[index] ? "copyButton active" : "copyButton"
                    }
                    onClick={() => handleCopy(index)}
                  >
                    {colorAlter[index] ? "copied!" : "copy"}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="dala">
            <h2 style={{ textAlign: "center" }}>Advanced Statistics</h2>
            <p className="inf">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="brandInfo">
            <div className="gridItem" id="bra">
              <div className="circleImg">
                <img src={brandImg} alt="brand recognition" />
              </div>
              <h3 className="br">Brand Recognition</h3>
              <p className="pr">
                {" "}
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div id="branR">
              <div className="gridItem" id="detail">
                <div className="circleImg">
                  <img src={detailImg} alt="detailed records" />
                </div>
                <h3 className="br"> Detailed Records</h3>
                <p className="pr">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
            <div className="gridItem">
              <div className="circleImg">
                <img src={customImg} alt="fully customizable" />
              </div>
              <h3 className="br"> Fully Customizable</h3>
              <p className="pr">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
