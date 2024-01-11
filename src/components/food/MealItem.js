import { useContext } from 'react';
import "./FoodItem.css"
import {CartContext} from "../store/CartContext";
export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  //
  const handleAddMealToCart= () => {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={require(`../../assets/${meal.image}`)} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {/*{currencyFormatter.format(meal.price)}*/}
            {meal.price}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p>
          <button className="meal-item-actions" onClick={handleAddMealToCart}>Add to Cart</button>
        </p>
      </article>
    </li>
  );
}
