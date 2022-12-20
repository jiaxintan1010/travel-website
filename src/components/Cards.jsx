import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC destinations!</h1>
      <div className="cards-container">
        <div className="cards-items-container">
          <CardItem
            path="/services"
            img="/images/img-9.jpg"
            label="Adventure"
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
          />
          <CardItem
            path="/services"
            img="/images/img-2.jpg"
            label="Luxury"
            text="Travel through the Islands of Bali in a Private Cruise"
          />
        </div>
        <div className="cards-items-container">
          <CardItem
            path="/products"
            img="/images/img-3.jpg"
            label="Mystery"
            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
          />
          <CardItem
            path="/products"
            img="/images/img-4.jpg"
            label="Amazing"
            text="Experience Football on Top of the Himilayan Mountains"
          />
          <CardItem
            path="/products"
            img="/images/img-8.jpg"
            label="Adrenaline"
            text="Ride through the Sahara Desert on a guided camel tour"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
