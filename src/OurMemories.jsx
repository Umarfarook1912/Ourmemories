import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OurMemories.css";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import snow from "./assets/snow.jpg"
import moon from "./assets/moon.jpg"
import stars from "./assets/stars.jpg"
import sun from "./assets/sun.jpeg"
import rabbit from "./assets/rabbit.jpg"
import nature from "./assets/nature.jpg"
import cherryBlossom from "./assets/cherry blossom.jpg"
import penguin from "./assets/penguin.jpeg"
import butterfly from "./assets/butterfly.jpg"
import cat from "./assets/cat.jpg"
import ocean from "./assets/ocean.jpg"
import sunflower from "./assets/sunflower.jpeg"
import rainy from "./assets/rainy.jpg"
import teddybear from "./assets/teddybear.jpg"

const swipeableCards = [
  {
    img: stars,
    text: "Even when we are miles apart, we are under the same stars.",
  },
  {
    img: sun,
    text: "You are the sunshine that brightens my darkest days.",
  },
  {
    img: moon,
    text: "The moon reminds me that even in darkness, there's light.",
  },
  {
    img: rabbit,
    text: "Like a rabbit in the meadow, my heart hops with joy for you.",
  },
  {
    img: nature,
    text: "In nature's embrace, I find peace thinking of you.",
  },
  {
    img: cherryBlossom,
    text: "Cherry blossoms bloom, reminding me of our fleeting moments.",
  },
  {
    img: snow,
    text: "In the quiet of snowfall, all I hear is my heart calling your name",
  },
  {
    img: penguin,
    text: "Like penguins, I choose you forever.",
  },
  {
    img: butterfly,
    text: "Whenever I see butterflies, I remember how you make my heart flutter."
  },
  {
    img: cat,
    text: "You're paws-itively the cutest thing in my life"
  },
  {
    img: ocean,
    text: "My love for you is deeper than the ocean."
  },
  {
    img: sunflower,
    text: "You are my sunshine, even on cloudy days."
  },
  {
    img: rainy,
    text: "Rain reminds me of our calm, cozy conversations."
  },
  {
    img: teddybear,
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
            Dharaaaa....💖 <br />
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
              👉 Swipe to see more memories, Every card tells the story of You 👈
            </motion.div>
            <div className="d-flex justify-content-center">

              {/* Swipeable Card */}
              <motion.div
                className="card shadow glassy overflow-hidden position-relative"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(event, info) => {
                  if (info.offset.x > 100) handleSwipe("left");
                  else if (info.offset.x < -100) handleSwipe("right");
                }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                style={{ width: "18rem", cursor: "grab" }}
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
