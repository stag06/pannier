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
document.getElementById('btn-clean').addEventListener("click", btnClean);


function clickButton() {
	alert('Coucou '+ art1);
	basket.push(art1);
	basket.push(this.id);
		console.log("This came from "+this.id);
	//var which = ""
	if(this.id == "btn-1") {which=art1;}
		console.log("This item "+this.id);
	if(this.id == "btn-2") {which=art2;}
	if(this.id == "btn-3") {which=art3;}
		console.log("which is "+ which);
	addToBasket(which);
	addSku(which);
	basket.push(which);
	calculateTotalSpend();
	//myFunction()
}
/* document.getElementById("basket-items").removeChild[1] */
/* document.getElementById("basket-dets").removeChild[1] */
function btnClean(){
	
console.log(this.id);
	alert("Clear basket");
	//basket = "";
	basket.length=0;
	//basket = []; 
	//delete basket[];

	//var tditems = document.getElementById("basket-items");
	//document.getElementById("basket-items").removeChild[2];
	//console.log(tditems.childNodes);

	// this WORKS if id specified in function addSku
	//var tditems = document.getElementById("basket-dets");
	//tditems.parentNode.removeChild(tditems);


				// NB the plural in getElements
	var linesToDelete = document.getElementsByClassName("to-remove");
	tableau = document.getElementById("basket-items");
	//linesToDelete.parentNode.removeChild(tditems);
		/*for (i = 0; i < linesToDelete.length; i--) {
			tableau.removeChild(linesToDelete[i]);
		}

		// NB count DOWN, not up*/
		for (i = linesToDelete.length-1; i >= 0; i--) {
			tableau.removeChild(linesToDelete[i]);
		}
	//delete basket[];
	console.log("length of basket = "+basket.length);

	//href="index.html";
	calculateTotalSpend();
	}





 
/*
var list = document.getElementById("myList");   // Get the <ul> element with id="myList"
list.removeChild(list.childNodes[0]);           // Remove <ul>'s first child node (index 0)
*/


function myFunction() {
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



function haveOneAlready(article) {
    document.getElementByTag("td").innerHTML = basket.some(article);
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
	
	console.log(" the addSku item is "+ which);
	var tr = document.createElement("tr");
	//tr.id = article.forid;
	//tr.id = "basket-dets";
	tr.className = "to-remove";

		var tdImg = document.createElement("td");
		tdImg.className = "img-article";


		//tdImg.style.background.size : ("50px 50px");
		//tdImg.style.background.repeat: ("no-repeat");
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
	 	

	 	//document.getElementById('basket-text').textContent = "You have "+basket.length+" item(s) for a total of € "+ spend;
	 	if(basket.length > 0) {
			document.getElementById('basket-text').textContent = "You have "+basket.length+" item(s) for a total of € "+ spend;
		}
		else //return spend
		{
			document.getElementById('basket-text').textContent = "Your basket is empty";	
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