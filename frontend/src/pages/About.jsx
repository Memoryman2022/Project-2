import React from "react";
import { Link } from "react-router-dom";
import faces from "../assets/cinema.png";
import clapper from "../assets/clapperboard.png";
import filmroll from "../assets/film-roll.png";
import spotlight from "../assets/spotlight.png";
function About() {
  return (
    <div className="about-container">
      <h1>FOCUS </h1>
      <br />
      <h2>THE ULTIMATE FILM RECOMMENDATION EXPERIENCE</h2>
      <p>
        In a world overwhelmed by endless scrolling and the paradox of choice on
        streaming platforms like Netflix and Amazon Prime, finding the perfect
        movie to watch can feel like searching for a needle in a haystack.
        <br />
        <br />
        That's where FOCUS comes in – your personal movie curator, designed to
        streamline your search and elevate your viewing experience. At FOCUS, we
        understand that every film enthusiast has unique tastes and preferences.
        Our innovative platform offers a sophisticated yet user-friendly
        interface, allowing you to explore our extensive database of films with
        unparalleled ease. <br /> Say goodbye to wasted time and hello to
        tailored movie nights.
        <img className="images-right" src={clapper} alt="clapper" />
        <h2>Discover Your Next Favorite Movie with Precision</h2>
        <br />
        <strong>Tailored Recommendations:</strong> Dive into a personalized film
        recommendation carousel, showcasing up to 10 movies that align with your
        specific genre preferences. Our dynamic selection ensures there's always
        something new and exciting to discover.
        <br />
        <br />
        <strong>Interactive Selection Process:</strong> Embrace the power of
        choice with our drag-and-drop feature. Simply move films you're
        interested in to the 'Like' folder and those you'd rather skip to the
        'Dislike' folder. Your actions directly influence the carousel, refining
        your recommendations in real time for a truly customized experience.
        <br />
        <br /> <strong>Effortless Navigation:</strong> FOCUS simplifies your
        search with intuitive filtering options. Whether you're in the mood for
        an action-packed adventure, a heartwarming romance, or a
        thought-provoking documentary, finding your next watch is a breeze.
        <img className="images-left" src={faces} alt="faces" />
        <h2>Why Choose FOCUS?</h2>
        <br />
        <br />
        <strong>Personalized Experience:</strong> Our platform is designed with
        you in mind. The more you interact with FOCUS, the better it becomes at
        predicting your movie preferences, offering suggestions that feel
        handpicked just for you. <br />
        <br />
        <strong>Time-Saving:</strong> Forget aimless browsing. With FOCUS,
        you're only a few clicks away from your ideal film. Our efficient
        recommendation system means more time enjoying great movies and less
        time searching for them. <br />
        <br />
        <strong>Explore with Confidence:</strong> Each film in our database is
        accompanied by detailed information and user reviews, helping you make
        informed decisions about what to watch next.
        <img className="images-left" src={spotlight} alt="spotlight" />
        <h2>Join the FOCUS Community</h2>
        <br />
        <br />
        <strong>Ready to transform how you discover movies?</strong> Sign up for
        FOCUS today and start enjoying a movie selection process that's as
        enjoyable as the films themselves. Whether you're a cinephile or someone
        looking for a great movie night option, FOCUS is your go-to platform for
        recommendations that resonate with your personal taste.
        <br /> <br />
        <h2>
          WELCOME TO FOCUS – WHERE EVERY RECOMMENDATION IS A STEP CLOSER TO YOUR
          NEXT FAVOURITE FILM
        </h2>
      </p>
    </div>
  );
}

export default About;
