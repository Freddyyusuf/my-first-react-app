import React from "react";
import DUMMY_MEALS from "../../assets/dummy_meals";
import classes from "./AvailableMeal.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";

const AvailableMeal = (props) => {
  const mealList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        meal={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeal;
