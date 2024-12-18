var btn = document.querySelector("button");
var input = document.querySelector("input");
var container = document.querySelector(".container")
var mealList = [];
getRecipe("pizza");
async function getRecipe(meal) {
    try {
        var res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
        var data = await res.json();
        mealList = data.recipes;
        display();
    } catch (error) {
        document.querySelector(".row").innerHTML=`<div class="d-flex justify-content-center align-items-center vh-100"><h1 class="alert alert-danger">${error}</h1></div>`
    }
}
function display() {
    var cartona = "";
    for (var i = 0; i < mealList.length; i++) {
        cartona += `
        <div class="col-md-2">
            <div class="meal text-center">
                <img src="${mealList[i].image_url}" class="w-100">
                <h2 class="h4">${mealList[i].title.split(" ").slice(0, 3).join(" ")}</h2>
            </div>
        </div>`;
    }
    document.querySelector(".row").innerHTML = cartona;
}
btn.addEventListener("click", function () {
    var meal = input.value.trim(); 
    if (meal) {
        getRecipe(meal); 
    } else if(meal==="") {
Swal.fire("please enter recipe name!");

    }
});
