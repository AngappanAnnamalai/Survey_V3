import styles from "./FoodItemCard.module.css";

const FoodItemCard = ({
  foodKind,
  foodTagText,
  foodTitle,
  foodRatingText,
  foodPrice,
  foodDescription,
  foodImage,
  addButtonId,
  addButtonCounterText = "1",
}) => {
  return (
    <div className={styles.foodItemCard} id="food-item-card">
      <div className={styles.foodInfo} id="food-info">
        <div className={styles.foodAttributes} id="food-attributes">
          <img
            className={styles.foodKindIcon}
            alt=""
            id="food-kind"
            src={foodKind}
          />
          <div className={styles.foodTag} id="food-tag">
            <p className={styles.foodTagText} id="food-tag-text">
              {foodTagText}
            </p>
          </div>
        </div>
        <h3 className={styles.foodTitle} id="food-title">
          {foodTitle}
        </h3>
        <div className={styles.foodRating} id="food-rating">
          <img
            className={styles.foodRatingStarIcon}
            alt=""
            id="food-rating-star"
            src="/foodratingstaricon.svg"
          />
          <p className={styles.foodTagText} id="food-rating">
            {foodRatingText}
          </p>
        </div>
        <h6 className={styles.foodPrice} id="food-price">
          {foodPrice}
        </h6>
        <p className={styles.foodDescription} id="food-description">
          {foodDescription}
        </p>
      </div>
      <div className={styles.foodImageButton} id="food-image-button">
        <img
          className={styles.foodImageIcon}
          alt=""
          id="food-image"
          src={foodImage}
        />
        <div className={styles.addButtonCounter} id="Add-Button-Counter">
          <img
            className={styles.vectorIcon}
            alt=""
            id="Subtract-Counter"
            src="/subtracticon.svg"
          />
          <h4 className={styles.addButtonCounterText} id="Food-Item-Count">
            {addButtonCounterText}
          </h4>
          <img
            className={styles.vectorIcon1}
            alt=""
            id="Add-Counter"
            src="/plusicon.svg"
          />
        </div>
        <button className={styles.addButton} disabled id={addButtonId}>
          <p className={styles.addButtonText} id="add-button-text">
            ADD +
          </p>
        </button>
      </div>
    </div>
  );
};

export default FoodItemCard;
