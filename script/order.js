function changeMethod() {
  var paymentSelector = document.getElementById("payment-selector").value;
  var paymentImage = document.getElementById("payment-image");
  var paymentText = document.getElementById("payment-text");
  var Qty = document.getElementById("penanganan-qty");
  var ttl = document.getElementById("total-qty");

  if (paymentSelector === "agropay") {
    paymentImage.src = "assets/image/payment-logo/AGROPAY.png";
    paymentText.innerHTML = "Tidak Ada Biaya Penanganan";
    Qty.innerHTML = "Rp. 0";
    ttl.innerHTML = "Rp. 237.000";
  } else if (paymentSelector === "dana") {
    paymentImage.src = "assets/image/payment-logo/DANA.png";
    paymentText.innerHTML = "Tidak Ada Biaya Penanganan";
    Qty.innerHTML = "Rp. 0";
    ttl.innerHTML = "Rp. 237.000";
  } else if (paymentSelector === "ovo") {
    paymentImage.src = "assets/image/payment-logo/OVO.png";
    paymentText.innerHTML = "Tidak Ada Biaya Penanganan";
    Qty.innerHTML = "Rp. 0";
    ttl.innerHTML = "Rp. 237.000";
  } else if (paymentSelector === "gopay") {
    paymentImage.src = "assets/image/payment-logo/GOPAY.png";
    paymentText.innerHTML = "Tidak Ada Biaya Penanganan";
    Qty.innerHTML = "Rp. 0";
    ttl.innerHTML = "Rp. 237.000";
  } else if (paymentSelector === "bri") {
    paymentImage.src = "assets/image/payment-logo/BRI.png";
    paymentText.innerHTML = "Biaya Penanganan Rp. 1.999";
    Qty.innerHTML = "Rp. 1.999";
    ttl.innerHTML = "Rp. 238.999";
  } else if (paymentSelector === "bca") {
    paymentImage.src = "assets/image/payment-logo/BCA.png";
    paymentText.innerHTML = "Biaya Penanganan Rp. 1.999";
    Qty.innerHTML = "Rp. 1.999";
    ttl.innerHTML = "Rp. 238.999";
  } else if (paymentSelector === "bni") {
    paymentImage.src = "assets/image/payment-logo/BNI.png";
    paymentText.innerHTML = "Biaya Penanganan Rp. 1.999";
    Qty.innerHTML = "Rp. 1.999";
    ttl.innerHTML = "Rp. 238.999";
  }
}
