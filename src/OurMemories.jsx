import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OurMemories.css";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const swipeableCards = [
  {
    img: "https://res.cloudinary.com/dfvkppfch/image/upload/v1747847599/stars_lkgfgk.jpg",
    text: "Even when we are miles apart, we are under the same stars.",
  },
  {
    img: "https://res.cloudinary.com/dfvkppfch/image/upload/v1747847612/sun_dpsi7j.jpg",
    text: "You are the sunshine that brightens my darkest days.",
  },
  {
    img: "https://res.cloudinary.com/dfvkppfch/image/upload/v1747847596/moon_vurbuo.jpg",
    text: "The moon reminds me that even in darkness, there's light.",
  },
  {
    img: "https://res.cloudinary.com/dfvkppfch/image/upload/v1747847596/rabbit_rnx7kp.jpg",
    text: "Like a rabbit in the meadow, my heart hops with joy for you.",
  },
  {
    img: "https://res.cloudinary.com/dfvkppfch/image/upload/v1747847604/nature_qin6qb.jpg",
    text: "In nature's embrace, I find peace thinking of you.",
  },
  {
    img: "https://res.cloudinary.com/dfvkppfch/image/upload/v1747847604/cherry_blossom_ar9hs5.jpg",
    text: "Cherry blossoms bloom, reminding me of our fleeting moments.",
  },
  {
    img: "https://res.cloudinary.com/dfvkppfch/image/upload/v1747847598/snow_bscgbn.jpg",
    text: "In the quiet of snowfall, all I hear is my heart calling your name",
  },
  {
    img: "https://res.cloudinary.com/dfvkppfch/image/upload/v1747847597/penguin_atq0t7.jpg",
    text: "Like penguins, I choose you forever.",
  },
  {
    img: "https://res.cloudinary.com/dfvkppfch/image/upload/v1747847600/butterfly_r00tis.jpg",
    text: "Whenever I see butterflies, I remember how you make my heart flutter."
  },
  {
    img: "https://res.cloudinary.com/dfvkppfch/image/upload/v1747847593/cat_kkx5j6.jpg",
    text: "You're paws-itively the cutest thing in my life"
  },
  {
    img: "https://res.cloudinary.com/dfvkppfch/image/upload/v1747847596/ocean_lzfxud.jpg",
    text: "My love for you is deeper than the ocean."
  },
  {
    img: "https://res.cloudinary.com/dfvkppfch/image/upload/v1747847599/sunflower_yal1xy.jpg",
    text: "You are my sunshine, even on cloudy days."
  },
  {
    img: "https://res.cloudinary.com/dfvkppfch/image/upload/v1747847596/rainy_lrcq3q.jpg",
    text: "Rain reminds me of our calm, cozy conversations."
  },
  {
    img: "https://res.cloudinary.com/dfvkppfch/image/upload/v1747847600/teddybear_quntc7.jpg",
    text: "You're my favorite cuddle, just like my teddy bear."
  }
];

const OurMemories = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showName, setShowName] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === "right") {
      setCurrentCard((prev) => (prev + 1) % swipeableCards.length);
    } else if (direction === "left") {
      setCurrentCard((prev) =>
        prev === 0 ? swipeableCards.length - 1 : prev - 1
      );
    }
  };

  if (showIntro) {
    return (
      <div className="intro-screen">
        <div className="floating-hearts">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              ❤️
            </span>
          ))}
        </div>

        {!showName ? (
          <motion.h1
            className="text-danger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            onClick={() => setShowName(true)}
            style={{ cursor: "pointer", fontSize: "2.5rem" }}
          >
            Only for My Muyal Kutty 🐇💌
          </motion.h1>
        ) : (
          <motion.h1
            className="text-dark fw-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setShowIntro(false)}
            style={{ cursor: "pointer", fontSize: "3rem" }}
          >
            Dharaaaa.... 💖 <br />
            <span style={{ fontSize: "1.2rem" }}>( The person who gives me everything )</span>
          </motion.h1>
        )}
      </div>
    );
  }

  return (
    <div className="memories-page">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/videos/love-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content-overlay d-flex flex-column align-items-center justify-content-center text-center text-white">
        <motion.div
          className="heart-container mb-5 px-3 position-relative"
          animate={{ scale: [10, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="corner-heart">
            <FaHeart className="small-heart text-danger" />
          </div>
        </motion.div>

        <div className="container">
          <h1 className="display-4 fw-bold">To the One Who Makes My Heart Smile</h1>
          <p className="lead text-light">
            Every moment with you is a beautiful memory...
          </p>

          <section className="my-5">
            <h2 className="text-danger mb-3">Special Moments</h2>
            <motion.div
              className="swipe-hint text-light mb-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            >
              👉 Tap the card, Every card tells the story of You 👈
            </motion.div>

            <div className="d-flex justify-content-center">

              {/* Swipeable Card */}
              <motion.div
                className="card shadow glassy overflow-hidden position-relative"
                onClick={() => setCurrentCard((prev) => (prev + 1) % swipeableCards.length)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ width: "18rem", cursor: "pointer" }}
              >
                <div className="corner-heart">
                  <FaHeart className="small-heart text-danger" />
                </div>
                <img
                  src={swipeableCards[currentCard].img}
                  className="card-img-top"
                  alt="special moment"
                />
                <div className="card-body bg-white text-dark">
                  <p className="card-text">{swipeableCards[currentCard].text}</p>
                </div>
              </motion.div>
            </div>
            <div className="mt-4">
              <Link to="/sweet-memories" className="btn btn-outline-light btn-lg">
                Read Sweet Memories 💌
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );


};

export default OurMemories;
