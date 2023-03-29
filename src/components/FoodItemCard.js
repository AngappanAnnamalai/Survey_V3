import styles from "./FoodItemCard.module.css";
import SVGInject from '@iconfu/svg-inject/src/svg-inject.min'

export default function FoodItemCard({foodKind, foodTagText, foodTagColor, foodTitle, foodRatingText, foodPrice, foodDescription, foodImage,addButtonId, addButtonCounterText}) {
  return  <div className={styles.foodItemCard} id="food-item-card">
      <div className={styles.foodInfo} id="food-info">
        <div className={styles.foodAttributes} id="food-attributes">
            <svg className={styles.foodKindIcon} id="food-kind" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 2H5.5C3.84315 2 2.5 3.34315 2.5 5V13C2.5 14.6569 3.84315 16 5.5 16H13.5C15.1569 16 16.5 14.6569 16.5 13V5C16.5 3.34315 15.1569 2 13.5 2ZM5.5 0C2.73858 0 0.5 2.23858 0.5 5V13C0.5 15.7614 2.73858 18 5.5 18H13.5C16.2614 18 18.5 15.7614 18.5 13V5C18.5 2.23858 16.2614 0 13.5 0H5.5Z" fill={foodKind}/>
            {foodKind == 'sienna' ? <path d="M8.62584 5.57348L5.32536 11.5144C4.95506 12.1809 5.43703 13 6.19951 13H12.8005C13.563 13 14.0449 12.1809 13.6746 11.5144L10.3742 5.57348C9.99315 4.88767 9.00685 4.88767 8.62584 5.57348Z" fill={foodKind}/> :
            <path d="M13.5 9C13.5 11.2091 11.7091 13 9.5 13C7.29086 13 5.5 11.2091 5.5 9C5.5 6.79086 7.29086 5 9.5 5C11.7091 5 13.5 6.79086 13.5 9Z" fill={foodKind}/> }
            </svg>
          <div className={styles.foodTag} style={{backgroundColor: foodTagColor}} id="food-tag">
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
}
