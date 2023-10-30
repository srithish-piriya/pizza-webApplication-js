console.log("welcome to pixxa hut.......");
console.log("---------------------------------");
//category choices
function home() {
  alert("Welcome to Pixxa hut!!\nThis is Home Page of Pixxa hut...");
  let catgeoryChoice = Number(prompt(">>>...............Menu................<<<\n select any option from below\n1.veg-Pizza\n2.Non-veg Pizza\n3.Desserts\n4.Garlic Breads & More"));
  if (catgeoryChoice === 1) {
    vegPizza();
  }
  else if (catgeoryChoice === 2) {
    nonVegPizza();
  }

  else if (catgeoryChoice == 3) {
    Desserts();
  }
  else if (catgeoryChoice == 4) {
    GarlicBread();
  }
  else {
    console.log("invalid input")
    alert("Entered input is invalid!!!")
    home();
  }

}
//Vegpizza choices
function vegPizza() {
  let vegChoice = Number(prompt("select any option from below..\n1.Blazzing Onion & Paprika\n2.margherita\n3.Peppy Panner\n4.Veg Extravaganza\n5.Main Menu\n6.Exit"));
  if (vegChoice === 1) {
    blazzingOnion();
  }
  else if (vegChoice === 2) {
    margherita();
  }

  else if (vegChoice == 3) {
    peppyPanner();
  }
  else if (vegChoice == 4) {
    vegExtravaganza();
  }
  else if (vegChoice == 5) {
    home();
  }
  else if (vegChoice == 6) {
    Exit2();
  }
  else {
    console.log("invalid input");
    alert("Entered input is invalid!!!");
    vegPizza();
  }


}


// vegpizza types
function blazzingOnion() {
  let blazz_choice = Number(prompt(">> Enter your choice...\n1.Regular - ₹179/-\n2.Medium -  ₹329/-\n3.large - ₹549/-\n4.Main Menu\n5.Exit"));
  if (blazz_choice === 1) {
    item.push('Blazzing Onion & Paprika-Regular');
    Quantity(179);

  }
  else if (blazz_choice === 2) {
    item.push('Blazzing Onion & Paprika-Medium');
    Quantity(329);

  }
  else if (blazz_choice == 3) {
    item.push('Blazzing Onion & Paprika-large');
    Quantity(549);
  }
  else if (blazz_choice == 4) {
    home();

  }
  else if (blazz_choice == 5) {
    Exit2();

  }
  else {
    alert("Entered input is Invalid");
    blazzingOnion();
  }



}

function margherita() {
  let margherita_choice = Number(prompt(">> Enter your choice...\n1.Regular - ₹109/-\n2.Medium -  ₹239/-\n3.large - ₹449/-\n4.Main Menu\n5.Exit"));
  if (margherita_choice === 1) {
    item.push('margherita Pizza - Regular');
    Quantity(109);

  }
  else if (margherita_choice === 2) {
    item.push('margherita Pizza - Medium')
    Quantity(239);

  }
  else if (margherita_choice == 3) {
    item.push('margherita Pizza - large');
    Quantity(449);
  }
  else if (margherita_choice == 4) {
    home();
  }
  else if (margherita_choice == 5) {
    Exit2();
  }
  else {
    alert("Entered input is Invalid");
    margherita();
  }

}

function peppyPanner() {
  let peppyPanner_choice = Number(prompt(">> Enter your choice...\n1.Regular - ₹259/-\n2.Medium -  ₹459/-\n3.large - ₹689/-\n4.Main Menu\n5.Exit"));
  if (peppyPanner_choice === 1) {
    item.push('Peppy Panner Pizza-Regular');
    Quantity(259);
  }
  else if (peppyPanner_choice === 2) {
    item.push('Peppy Panner Pizza-Medium');
    Quantity(459);

  }
  else if (peppyPanner_choice == 3) {
    item.push('Peppy Panner Pizza-large');
    Quantity(689);
  }
  else if (peppyPanner_choice == 4) {
    home();
  }
  else if (peppyPanner_choice == 5) {
    Exit2();
  }
  else {
    alert("Entered input is Invalid");
    peppyPanner();
  }


}

function vegExtravaganza() {
  let vegExtravaganza_choice = Number(prompt(">> Enter your choice...\n1.Regular - ₹299/-\n2.Medium -  ₹549/-\n3.large - ₹799/-\n4.Main Menu\n5.Exit"));
  if (vegExtravaganza_choice === 1) {
    item.push('Peppy Panner Pizza-Regular');
    Quantity(299);

  }
  else if (vegExtravaganza_choice === 2) {
    item.push('Peppy Panner Pizza-Medium');
    Quantity(549);

  }
  else if (vegExtravaganza_choice == 3) {
    item.push('Peppy Panner Pizza-large');
    Quantity(799);
  }
  else if (vegExtravaganza_choice == 4) {
    home();
  }
  else if (vegExtravaganza_choice == 5) {
    Exit2();
  }
  else {
    alert("Entered input is Invalid");
    vegExtravaganza();
  }
}
//non-veg Choice
function nonVegPizza() {
  let nonVegChoice = Number(prompt("select any option from below..\n1.Smoked Chicken Gourment Pizza\n2.Pepper Barbecue Chicken\n3.Chicken Sausage\n4.Chicken Dominator\n5.Main Menu\n6.Exit"));
  if (nonVegChoice === 1) {
    smokedChicken();
  }
  else if (nonVegChoice === 2) {
    pepperBarbecueChicken();
  }

  else if (nonVegChoice == 3) {
    chickenSausage();
  }
  else if (nonVegChoice == 4) {
    chickenDominator();
  }
  else if (nonVegChoice == 5) {
    home();
  }
  else if (nonVegChoice == 6) {
    Exit2();
  }
  else {
    console.log("invalid input");
    alert("Entered input is invalid!!!");
    nonVegPizza();
  }

}
//non veg pizza types


function smokedChicken() {
  let smokeChicken_choice = Number(prompt(">> Enter your choice...\n1.Regular - ₹599/-\n2.Medium -  ₹849/-\n3.large - ₹1149/-\n4.Main Menu\n5.Exit"));

  if (smokeChicken_choice === 1) {
    item.push('Smoked Chicken Gourment Pizza-Regular');
    Quantity(599);
  }
  else if (smokeChicken_choice === 2) {
    item.push('Smoked Chicken Gourment Pizza-Medium');
    Quantity(849);
  }
  else if (smokeChicken_choice == 3) {
    item.push('Smoked Chicken Gourment Pizza-large');
    Quantity(1149);
  }
  else if (smokeChicken_choice == 4) {
    home();
  }
  else if (smokeChicken_choice == 5) {
    Exit2();
  }
  else {
    alert("Entered input is Invalid");
    smokedChicken();
  }
}
function pepperBarbecueChicken() {
  let pepperBarbecue_choice = Number(prompt(">> Enter your choice...\n1.Regular - ₹249/-\n2.Medium -  ₹449/-\n3.large - ₹669/-\n4.Main Menu\n5.Exit"));

  if (pepperBarbecue_choice === 1) {
    item.push('Pepper Barbecue Chicken Pizza-Regular');
    Quantity(249);
  }
  else if (pepperBarbecue_choice === 2) {
    item.push('Pepper Barbecue Chicken Pizza-Medium');
    Quantity(449);

  }
  else if (pepperBarbecue_choice == 3) {
    item.push('Pepper Barbecue Chicken Pizza-large');
    Quantity(669);
  }
  else if (pepperBarbecue_choice == 4) {
    home();
  }
  else if (pepperBarbecue_choice == 5) {
    Exit2();
  }
  else {
    alert("Entered input is Invalid");
    pepperBarbecueChicken();
  }

}
function chickenSausage() {
  let chickenSausage_choice = Number(prompt(">> Enter your choice...\n1.Regular - ₹199/-\n2.Medium -  ₹369/-\n3.large - ₹599/-\n4.Main Menue\n5.Exit"));

  if (chickenSausage_choice === 1) {
    item.push('Chicken Sausage Pizza-Regular');
    Quantity(199);
  }
  else if (chickenSausage_choice === 2) {
    item.push('Chicken Sausage Pizza-Medium');
    Quantity(369);

  }
  else if (chickenSausage_choice == 3) {
    item.push('Chicken Sausage Pizza-large');
    Quantity(599);
  }
  else if (chickenSausage_choice == 4) {
    home();
  }
  else if (chickenSausage_choice == 5) {
    Exit2();
  }
  else {
    alert("Entered input is Invalid");
    chickenSausage();
  }

}
function chickenDominator() {
  let chickenDominator_choice = Number(prompt(">> Enter your choice...\n1.Regular - ₹359/-\n2.Medium -  ₹599/-\n3.large - ₹919/-\n4.Main Menu\n5.Exit"));

  if (chickenDominator_choice === 1) {
    item.push('Chicken Dominator Pizza-Regular');
    Quantity(359);
  }
  else if (chickenDominator_choice === 2) {
    item.push('Chicken Dominator Pizza-Medium');
    Quantity(599);

  }
  else if (chickenDominator_choice == 3) {
    item.push('Chicken Dominator Pizza-large');
    Quantity(919);
  }
  else if (chickenDominator_choice == 4) {
    home();
  }
  else if (chickenDominator_choice == 5) {
    Exit2();
  }
  else {
    alert("Entered input is Invalid");
    chickenDominator();
  }

}
//dessert choices
function Desserts() {
  let dessertChoice = Number(prompt("select any option from below..\n1.Red Velvat Lava Cake - ₹139/-\n2.Choco Lava Cake - ₹109/-\n3.Butterscotch Mousse Cake - ₹109/- \n4.Main Menu\n5.Exit"));
  if (dessertChoice === 1) {
    item.push('Red Velvat Lava Cake');
    Quantity(139);
  }
  else if (dessertChoice === 2) {
    item.push('Choco Lava Cake');
    Quantity(109);
  }

  else if (dessertChoice == 3) {
    item.push('Butterscotch Mousse Cake');
    Quantity(109);
  }
  else if (dessertChoice == 4) {
    home();
  }
  else if (dessertChoice == 5) {
    Exit2();
  }
  else {

    alert("Entered input is invalid!!!");
    Desserts();
  }

}

//garlicbread choices
function GarlicBread() {

  let Choice = Number(prompt("select any option from below..\n1.Garlic Breadsticks + Cheese Dip - ₹138/-\n2.Garlic Breadsticks - ₹109/-\n3.Classic Stuffed Garlic Breadsticks - ₹159/-\n4.Paneer Tikka Stuffed Garlic Breadsticks - ₹169/-\n5.Main Menu\n6.Exit"));
  if (Choice === 1) {
    item.push('Garlic Breadsticks + Cheese Dip');
    Quantity(138);
  }
  else if (Choice === 2) {
    item.push('Garlic Breadsticks');
    Quantity(109);
  }

  else if (Choice == 3) {
    item.push('Classic Stuffed Garlic Breadsticks');
    Quantity(159);
  }
  else if (Choice == 4) {
    item.push('Paneer Tikka Stuffed Garlic Breadsticks');
    Quantity(169);
  }
  else if (Choice == 5) {
    home();
  }
  else if (Choice == 6) {
    Exit2();
  }
  else {

    alert("Entered input is invalid!!!");
    GarlicBread();
  }

}

//quantity function

function Quantity(val) {
  let quant = Number(prompt(">> Enter Required Quatity of the item"));
  if (quant > 0) {
    quantity.push(quant);
    price.push(quant * val);
    Exit2();
  }
  else {
    alert("Entered input Invalid ");
    Quantity(val);
  }


}


//exit code
function Exit2() {
  heading.style.visibility = "visible"

  tbody.style.visibility = "visible"
  //
  let text1 = "Thank you for choosing pixxa Hut\n>>>..................................Bill..................................<<<\n"
  let sum1 = 0; // Initialize the sum

  for (let i = 0; i < item.length; i++) {
    text1 += "Item-name : " + item[i] + "\nQuantity : " + quantity[i] + "\nCost : ₹" + price[i] + "\n----------------------------------------------------\n";
    sum1 += quantity[i] * price[i]; // Update the sum
  }

  text1 = text1 + "\nTotal cost of items :                                  ₹" + sum1 + "\nGST on items :                                         +₹" + (sum1 * (2 / 100)) + "\nCost of items with GST :                           ₹" + (sum1 + sum1 * (2 / 100)) + "\nTotal Amount paid:                                  ₹" + (sum1 + sum1 * (2 / 100));


  let finalChoice = Number(prompt("Do you want to add any other items ??\n1.Yes\n2.No"));
  if (finalChoice === 1) {
    home();
  }
  else if (finalChoice === 2) {
    console.log(`\n\n----------------------------------------------------------------`);
    console.log(`  Item                 quantity                       price    `);
    console.log(`--------------------------------------------------------------------`);
    for (let i = 0; i < item.length; i++) {
      console.log(`${item[i]}       ${quantity[i]}      ${price[i]}`);
      sum = sum + price[i]
    }
    console.log(`GST                     2%                       ${(sum) * (2 / 100)}`);
    console.log(`Total Price                                      ${sum + (sum) * (2 / 100)}`);

    alert(text1)
    alert("Thank you for Ordering!!!\nIf you like the food visit @gain (^ ^)                  \n__________________Enjoy the Food___________________\n")


    for (let i = 0; i < item.length; i++) {


      let table = document.getElementById("tbody");
      let row = document.createElement("tr");

      // Create new cell elements for the row 
      let cell1 = document.createElement("td");
      cell1.textContent = `${item[i]}`;

      let cell2 = document.createElement("td");
      cell2.textContent = `${quantity[i]}`;

      let cell3 = document.createElement("td");
      cell3.textContent = `${price[i]}`;

      // Append the cell elements to the row element 
      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);

      // Append the row element to the table element 
      table.appendChild(row);

      document.write("<br>");
    }

    //GST

    let table_1 = document.getElementById("tbody");
    let row_1 = document.createElement("tr");

    // Create new cell elements for the row 
    let cell_1 = document.createElement("th");
    cell_1.textContent = `GST`;

    let cell_2 = document.createElement("th");
    cell_2.textContent = `2%`;

    let cell_3 = document.createElement("th");
    cell_3.textContent = `${(sum) * (2 / 100)}`;

    // Append the cell elements to the row element 
    row_1.appendChild(cell_1);
    row_1.appendChild(cell_2);
    row_1.appendChild(cell_3);

    // Append the row element to the table element 
    table_1.appendChild(row_1);

    document.write("<br>");

    //Total amount

    let table_2 = document.getElementById("tbody");
    let row_2 = document.createElement("tr");

    // Create new cell elements for the row 
    let cell_11 = document.createElement("th");
    cell_11.textContent = `Total Bill (with GST)`;

    let cell_22 = document.createElement("th");
    cell_22.textContent = `  `;

    let cell_33 = document.createElement("th");
    cell_33.textContent = `${sum + (sum) * (2 / 100)}`;

    // Append the cell elements to the row element 
    row_2.appendChild(cell_11);
    row_2.appendChild(cell_22);
    row_2.appendChild(cell_33);

    // Append the row element to the table element 
    table_2.appendChild(row_2);

    document.write("<br>");

    tb = document.getElementById("tbody").style.border = "2px solid black";
  }
  else {
    alert("Entered Option is Invalid!!");
    Exit2();
  }

}
var item = []
var quantity = []
var price = []
var sum = 0






//Starting point of Execution 

home()