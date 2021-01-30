function productCountAndPrice(isIncrease, product) {
  const productCount = parseInt(
    document.getElementById(product + "-count").value
  );
  let productNewCount = productCount;
  let productNewPrice = 0;

  if (isIncrease == true) {
    productNewCount = productCount + 1;
  }
  if (isIncrease == false && productCount > 0) {
    productNewCount = productCount - 1;
  }

  if (product == "phone") {
    productNewPrice = productNewCount * 1219;
  }
  if (product == "case") {
    productNewPrice = productNewCount * 59;
  }

  document.getElementById(product + "-count").value = productNewCount;
  document.getElementById(product + "-price").innerText = productNewPrice;

  totalPrice();
}

function totalPrice() {
  const phonePrice = productCount("phone");
  const casePrice = productCount("case");

  const subTotalPrice = phonePrice * 1219 + casePrice * 59;
  const tax = Math.round(subTotalPrice * 0.05);
  const grandTotal = tax + subTotalPrice;

  document.getElementById("subTotal").innerText = subTotalPrice;
  document.getElementById("tax").innerText = tax;
  document.getElementById("grandTotal").innerText = grandTotal;
}

function productCount(product) {
  const productCount = parseInt(document.getElementById(product + "-count").value);
  return productCount;
}


// manual 


//  //nai koira dilam
//  document.getElementById("cross1").addEventListener("click", () => {
//   document.getElementById("iphones").style.display = "none";
//   document.getElementById("total").innerText = parseFloat(document.getElementById("iphoneCoverPrice")
//      .innerText);
//   document.getElementById("subTotal").innerText = parseFloat(document.getElementById("iphoneCoverPrice")
//      .innerText);
// });
// document.getElementById("cross2").addEventListener("click", () => {
//   document.getElementById("iphoneCover").style.display = "none";
//   document.getElementById("total").innerText = parseFloat(document.getElementById("iphonePrice")
//      .innerText);
//   document.getElementById("subTotal").innerText = parseFloat(document.getElementById("iphonePrice")
//      .innerText);
// })

// // adding phone
// const plusSign = document.getElementById("addIphone").addEventListener("click", () => {
//   const quantity = parseFloat(document.getElementById("inputs").value);
//   const newQuantity = quantity + 1;
//   document.getElementById("inputs").value = newQuantity;

//   const basePrice = parseFloat(document.getElementById("iphonePrice").innerText); //phn price
//   const newPrice = basePrice + 1219;
//   document.getElementById("iphonePrice").innerText = newPrice;

//   // total value
//   const subTotal = parseFloat(document.getElementById("subTotal").innerText);
//   var newSubTotalPrice = subTotal + 1219;
//   document.getElementById("subTotal").innerText = newSubTotalPrice;
//   const total = parseFloat(document.getElementById("total").innerText);
//   var newTotalPrice = total + 1219;
//   document.getElementById("total").innerText = newTotalPrice;
// })

// //remove phn
// const minusSign = document.getElementById("removeIphone").addEventListener("click", () => {
//   const quantity = parseFloat(document.getElementById("inputs").value);
//   const negQuantity = quantity - 1;
//   document.getElementById("inputs").value = negQuantity;

//   const basePrice = parseFloat(document.getElementById("iphonePrice").innerText); //phn price
//   const minusPrice = basePrice - 1219;
//   document.getElementById("iphonePrice").innerText = minusPrice;

//   //total
//   const subTotal = parseFloat(document.getElementById("subTotal").innerText);
//   var newSubTotalPrice = subTotal - 1219;
//   document.getElementById("subTotal").innerText = newSubTotalPrice;
//   const total = parseFloat(document.getElementById("total").innerText);
//   var newTotalPrice = total - 1219;
//   document.getElementById("total").innerText = newTotalPrice;

//   if (negQuantity <= 0) {
//      document.getElementById("iphones").style.display = "none";
//   }
// });

// //add cover
// const plusSignCover = document.getElementById("addCover").addEventListener("click", () => {
//   const quantity = parseFloat(document.getElementById("inputCover").value);
//   const newQuantity = quantity + 1;
//   document.getElementById("inputCover").value = newQuantity;

//   const basePrice = parseFloat(document.getElementById("iphoneCoverPrice").innerText); //cover price
//   const newPrice = basePrice + 59;
//   document.getElementById("iphoneCoverPrice").innerText = newPrice;

//   // total value
//   const subTotal = parseFloat(document.getElementById("subTotal").innerText);
//   var newSubTotalPrice = subTotal + 59;
//   document.getElementById("subTotal").innerText = newSubTotalPrice;
//   const total = parseFloat(document.getElementById("total").innerText);
//   var newTotalPrice = total + 59;
//   document.getElementById("total").innerText = newTotalPrice;
// });

// //remove phn
// const minusSignCover = document.getElementById("removeIphoneCover").addEventListener("click", () => {
//   const quantity = parseFloat(document.getElementById("inputCover").value);
//   const negQuantity = quantity - 1;
//   document.getElementById("inputCover").value = negQuantity;

//   const basePrice = parseFloat(document.getElementById("iphoneCoverPrice").innerText); //phn price
//   const minusPrice = basePrice - 59;
//   document.getElementById("iphoneCoverPrice").innerText = minusPrice;

//   //total
//   const subTotal = parseFloat(document.getElementById("subTotal").innerText);
//   var newSubTotalPrice = subTotal - 59;
//   document.getElementById("subTotal").innerText = newSubTotalPrice;
//   const total = parseFloat(document.getElementById("total").innerText);
//   var newTotalPrice = total - 59;
//   document.getElementById("total").innerText = newTotalPrice;

//   if (negQuantity <= 0) {
//      document.getElementById("iphoneCover").style.display = "none";
//   }
// });