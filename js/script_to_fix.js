/* javascript */

//call js/products.js; I DID THIS IN HTML !!

/* array to stock ID references clicked */
var basket=[];

//var stock=[];
/* create an array to stock basket item-codes selected */
var dropThis = [];

var spend=0;
var which="";


/* Subscribe btn-1 to the 'click' event AND call a function (or HANDLER),*/
document.getElementById('btn-1').addEventListener("click", clickButton);
document.getElementById('btn-2').addEventListener("click", clickButton);
document.getElementById('btn-3').addEventListener("click", clickButton);

 /* Definition of sku NB the commas between 'fields' and ; at end 
 	NOW MOVED TO FILE "Products.js"
var art1={
	img: "url(img/tomatoe.jpg)",
	label: "Food",
	cat: "Tomatoes",
	price:4.25,
	ord: 0,
	stock: 100,
	forid: "sku1"
};
var art2={
	img: "url(img/Lobster.jpg)",
	label: "Food",
	cat: "Lobster",
	price:30.00,
	ord: 0,
	stock: 30,
	forid: "sku2"
};
var art3={
	img: "url(img/MeatPaste.jpg)",
	label: "Food",
	cat: "Meat-Paste",
	price: 12.00,
	ord: 0,
	stock: 50,
	forid: "sku3"
};
*/
function clickButton() {
	//alert('Coucou '+ art1);
	//basket.push(art1);
	//basket.push(this.id);
		console.log("This came from "+this.id);
	//var which = ""
	if(this.id == "btn-1") {which=mySkus[0];}
		console.log("This item "+this.id);
	if(this.id == "btn-2") {which=mySkus[1];}
	if(this.id == "btn-3") {which=mySkus[2];}
		console.log("which is "+ which);
	addToBasket(which);
	//gotOne(which);
	addSku(which);
	basket.push(which);
	calculateTotalSpend();
	//myFunction()
}

function listCells() {
    var x = document.getElementsByTagName("td");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
        txt = txt + "The index of Cell " + (i + 1) + " is: " + x[i].cellIndex + "<br>";
    }
    document.getElementById("sku3").innerHTML = txt;
    console.log("cell index "+txt)
}

function addToBasket(article){
	article.ord=article.ord+1;
	article.stock=article.stock-1;
}	

/*
function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.some(checkAdult);
}
*/
/*
var spend = 0;

	    for(var i = 0; i < basket.length; i++) {
	   spend = spend + basket[i].price;
	 	}
	 	console.log("spend is "+ spend)
	document.getElementById('basket-text').textContent = "You have "+basket.length+" item(s) for a total of € "+ spend;
	//return spend
}

*/
function gotOne(article){
	x=basket;
	for (i = 0; i < basket.length; i++) {
		if (basket[i].foriud == article) {
			basket[i].ord++;
			basket[i].stock++;
		}
		console.log("Already in basket ? "+ basket[i].ord);
	//return basket[i].foriud = "sku2";
}

function haveOneAlready(article) {
    //document.getElementByTag("td").innerHTML = basket.some(gotone);
    console.log("Already in basket ? "+ basket.some(gotone));
    //basket.some(basket.some(mySkus[2]));
}

/*
function inBasket(){
var inBkt = 0;

	    for(var i = 0; i < basket.length; i++) {
	   spend = spend + basket[i].price;
	 	}
	 	console.log("spend is "+ spend)
	document.getElementById('basket-text').textContent = "You have "+basket.length+" item(s) for a total of € "+ spend;

}
*/



function addSku(article){
	//haveOneAlready(article);
	console.log(" the addSku item is "+ which);
	var tr = document.createElement("tr");
	tr.id = article.forid;

		var tdImg = document.createElement("td");
		tdImg.className = "img-article";
		//tdImg.style.background.size : ("50px 50px");
		//tdImg.style.background.repeat: ("no-repeat");
		// NB the style "backgroudImage" is the same as the CSS/HTML "background-image"
		// i.e. in camelCase for javascript
		tdImg.style.backgroundImage = article.img;
		
		tr.appendChild(tdImg);

		var tdLabel = document.createElement("td");
		tdLabel.textContent = article.label;
		tr.appendChild(tdLabel);

		var tdCat = document.createElement("td");
		tdCat.textContent = article.cat;
		tr.appendChild(tdCat);

		var tdPrice = document.createElement("td");
		tdPrice.textContent = article.price;
		tr.appendChild(tdPrice);

		var tdOrd = document.createElement("td");
		//tdord.id = article.forid;
		tdOrd.textContent = article.ord;
		tr.appendChild(tdOrd) ;
		//td.id = article.forid + "qty"

		var tdStock = document.createElement("td");
		tdStock.textContent = article.stock;
		tr.appendChild(tdStock);

	document.getElementById("basket-items").appendChild(tr);

	//calculateTotalSpend();
}

function calculateTotalSpend (){
	var spend = 0;

	    for(var i = 0; i < basket.length; i++) {
	   spend = spend + basket[i].price;
	 	}
	 	console.log("spend is "+ spend)
	document.getElementById('basket-text').textContent = "You have "+basket.length+" item(s) for a total of € "+ spend;
	//return spend
}
}

/*
function countItemsByType(){
	var cnt1 = 0; 	var cnt2 = 0; 	var cnt3 = 0;
	for(var i = 0; i < spent.length; i++) {
	   if(spent[i] == 100) {cnt3++;}
	   if(spent[i] == 10) {cnt2++;}
	   if(spent[i] == 1) {cnt1++;}
	}
*/

/*  filter array
	slice array
	map array
*/

























/*
function dropOne(article){
	dropThis.push(article);
	ToGo=(article);
	console.log(dropThis);
	console.log('Lose a '+ToGo);
}	

function countItemsByPrice(){
	var cnt1 = 0; 	var cnt2 = 0; 	var cnt3 = 0;
	for(var i = 0; i < spent.length; i++) {
	   if(spent[i] == 100) {cnt3++;}
	   if(spent[i] == 10) {cnt2++;}
	   if(spent[i] == 1) {cnt1++;}
	}
   
   console.log('cnt 1 = '+cnt1);
   console.log('cnt 2 = '+cnt2);
   console.log('cnt 3 = '+cnt3);

   if(cnt1>0){
   	document.getElementById('Numb-Items-Type-1').style.visibility = 'visible';
   	document.getElementById('Numb-Items-Type-1').innerHTML = 'You have '+ cnt1+' of the type 1 items';
   }
   if(cnt2>0){
   	document.getElementById('Numb-Items-Type-10').style.visibility = 'visible';
   	document.getElementById('Numb-Items-Type-10').innerHTML = 'You have '+ cnt2+' of the type 10 items';
   }
    if(cnt3>0){
   	document.getElementById('Numb-Items-Type-100').style.visibility = 'visible';
   	document.getElementById('Numb-Items-Type-100').innerHTML = 'You have '+ cnt3+' of the type 100 items';
   }
}		

function getTheTotal(){
	sumSpent = 0;
	    for(var i = 0; i < spent.length; i++) {
	   sumSpent = sumSpent + spent[i];
	 	}
	return sumSpent
}

function writeBasketText(){
	var items = spent.length;
	var totalSpent = getTheTotal();
	document.getElementById('basketrep').innerHTML = 'You have ' + items + ' items in the basket for a total of € '+ totalSpent;
	console.log('write text done');
} */