import FoodItemCard from "../components/FoodItemCard";
import styles from "./FoodMenuPage.module.css";
import React from "react";


const FoodMenuPage = () => {

    const [foodItemData, setFoodItemData ] = React.useState({})

    React.useEffect(()=> {
        const fetchData = async () => {
            const result = await fetch('/.netlify/functions/fetchNotion')
            result.json().then(json => {
                setFoodItemData(json.results)
                console.log(json.results);
            })
        }
        fetchData()
    }, [])
    

  return (
    <main className={styles.foodMenuPage} id="main-page">
      <div className={styles.foodMenuContainer} id="food-menu-container">
            {Object.values(foodItemData).map(item => {
                return <FoodItemCard
                    key={item.properties.FoodID.number}
                    foodKind={item.properties.FoodKind.select.name}
                    foodTagText={item.properties.FoodTag.select.name}
                    foodTagColor={item.properties.FoodTagColor.formula.string}
                    foodTitle={item.properties.FoodTitle.title[0].plain_text}
                    foodRatingText={`${item.properties.RatingValue.number} (${item.properties.RatingCount.number} ratings)`}
                    foodPrice={`₹${item.properties.FoodPrice.number}`}
                    foodDescription={item.properties.FoodDescription.rich_text[0].plain_text}
                    foodImage={item.properties.FoodImage.url}
                    addButtonId="add-item-init"
                    addButtonCounterText="1"
                />})
            }
      </div>
    </main>
  );
};

export default FoodMenuPage;
