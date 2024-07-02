async function getfood(){
    const response=await fetch ('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data= await response.json();
    const count=data.count;
    const food=data.recipes;

    const result=food.map(function(ele){
        return `
    <div class="foood">


        <h2> ${ele.title}</h2>
        <img src='${ele.image_url}'> 


</div>
       
        `;



}).join('');
document.querySelector(".foood .count").textContent = count;
document.querySelector(".foood").innerHTML +=result;

}
getfood();