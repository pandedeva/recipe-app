import style from "./recipe.module.css";

export default function Recipe({ title, calories, image, ingredients }) {
  const generateId = () => {
    return Math.random() * 100;
  };

  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <ul key={generateId()}>{ingredient.text}</ul>
        ))}
      </ol>
      <p>{calories}</p>
      <img className={style.img} src={image} alt="img" />
    </div>
  );
}
