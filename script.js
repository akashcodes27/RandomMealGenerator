const getMealBtn = document.querySelector('#get-meal');
const mealContainer = document.querySelector('#meal');


getMealBtn.addEventListener('click', () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(data => {
            createMeal(data.meals[0]);
        })
})


function createMeal(mealObj) {
    console.log(mealObj.strMealThumb);
    // mealObj is basically an object containing details of some random meal everytime the button is pressed 
    mealContainer.innerHTML = `

    <div class="meal-class">
    <article class="dynamic-container">

    <figure>
        <img src="${mealObj.strMealThumb}" alt="" id="food-image">
    </figure>
    <aside>
        <p class="meal-area-cat"><span class="m-a-c-keys">Meal: </span>${mealObj.strMeal}</p>
        <p class="meal-area-cat"><span class="m-a-c-keys">Category: </span>${mealObj.strCategory}</p>
        <p class="meal-area-cat"><span class="m-a-c-keys">Area: </span>${mealObj.strArea}</p>
        <p class="meal-area-cat"><span class="m-a-c-keys">Tags: </span>${mealObj.strTags}</p>
        <h2>Ingredients:</h2>
        <ul class="ul-class">
            <li>${mealObj.strIngredient1}</li>
            <li>${mealObj.strIngredient2}</li>
            <li>${mealObj.strIngredient3}</li>
            <li>${mealObj.strIngredient4}</li>
            <li>${mealObj.strIngredient5}</li>
            <li>${mealObj.strIngredient6}</li>
            <li>${mealObj.strIngredient7}</li>
            <li>${mealObj.strIngredient8}</li>
            <li>${mealObj.strIngredient9}</li>
            <li>${mealObj.strIngredient10}</li>
            <li>${mealObj.strIngredient11}</li>
            <li>${mealObj.strIngredient12}</li>
            <li>${mealObj.strIngredient13}</li>
            <li>${mealObj.strIngredient14}</li>
            <li>${mealObj.strIngredient15}</li>
            <li>${mealObj.strIngredient16}</li>
            <li>${mealObj.strIngredient17}</li>
            <li>${mealObj.strIngredient18}</li>
            <li>${mealObj.strIngredient19}</li>
            <li>${mealObj.strIngredient20}</li>
        </ul>
    </aside>
 </article>
 <article class="dish-description">
    ${mealObj.strInstructions}
   
 </article>
 </div>
 
    `
}