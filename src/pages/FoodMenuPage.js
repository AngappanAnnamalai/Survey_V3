import FoodItemCard from "../components/FoodItemCard";
import styles from "./FoodMenuPage.module.css";

const FoodMenuPage = () => {
  return (
    <main className={styles.foodMenuPage} id="main-page">
      <div className={styles.foodMenuContainer} id="food-menu-container">
        <FoodItemCard
          foodKind="/foodkind.svg"
          foodTagText="New"
          foodTitle="Chicken Seekh Kebab 6pc"
          foodRatingText="4.5 (145 ratings)"
          foodPrice="₹295"
          foodDescription="Served with mint chutney and salad. 6 Pieces, per box"
          foodImage="/foodimage@2x.jpg"
          addButtonId="add-item-init"
          addButtonCounterText="1"
        />
      </div>
    </main>
  );
};

export default FoodMenuPage;
