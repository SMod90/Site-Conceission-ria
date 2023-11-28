if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready()
}

function ready() {
  const removeProductsButtons = document.getElementsByClassName("remove-product-button")
  for (var i = 0; i < removeProductsButtons.length; i++) {
    removeProductsButtons[i].addEventListener("click", removeProduct)
  }

  const cartButtons = document.getElementsByClassName("button-cart")
  for (var i = 0; i < cartButtons.length; i++) {
    cartButtons[i].addEventListener("click",)
  }
}


function addProductToCart() {
  localStorage.setItem("car", "Chevrolet Onix")
}

/*converter imagem*/


        function getBase64Image(img) {
          var canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;

          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);

          var dataURL = canvas.toDataURL("image/png");

          return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        }

/*Guardar Imagem*/

        function storageImageA() {
          bannerImage1 = document.getElementById('car01');
          imgData1 = getBase64Image(bannerImage1);
          localStorage.setItem("imgData1", imgData1);
          localStorage.setItem("CarN01", "Chevrolet Onix")
          localStorage.setItem("Price01", product-price01)
        }

        function storageImageB() {
          bannerImage2 = document.getElementById('car02');
          imgData2 = getBase64Image(bannerImage2);
          localStorage.setItem("imgData2", imgData2);
          localStorage.setItem("CarN02", "Hyundai HB20")
          localStorage.setItem("Price02", "R$: 85.990,00")
        }

        function storageImageC() {
          bannerImage3 = document.getElementById('car03');
          imgData3 = getBase64Image(bannerImage3);
          localStorage.setItem("imgData3", imgData3);
          localStorage.setItem("CarN03", "Peugeot 208")
          localStorage.setItem("Price03", "R$: 78.990,00")
        }

        function storageImageD() {
          bannerImage4 = document.getElementById('car04');
          imgData4 = getBase64Image(bannerImage4);
          localStorage.setItem("imgData4", imgData4);
          localStorage.setItem("CarN04", "Fiat Pulse")
          localStorage.setItem("Price04", "R$: 102.990,00")
        }

        function storageImageE() {
          bannerImage5 = document.getElementById('car05');
          imgData5 = getBase64Image(bannerImage5);
          localStorage.setItem("imgData5", imgData5);
          localStorage.setItem("CarN05", "Fiat Argo")
          localStorage.setItem("Price05", "R$: 84.990,00")
        }

        function storageImageF() {
          bannerImage6 = document.getElementById('car06');
          imgData6 = getBase64Image(bannerImage6);
          localStorage.setItem("imgData6", imgData6);
          localStorage.setItem("CarN06", "Volkswagen T-Cross")
          localStorage.setItem("Price06", "R$: 125.990,00")
        }

        function storageImageG() {
          bannerImage7 = document.getElementById('car07');
          imgData7 = getBase64Image(bannerImage7);
          localStorage.setItem("imgData7", imgData7);
          localStorage.setItem("CarN07", "Chevrolet Onix")
          localStorage.setItem("Price07", "Chevrolet Onix")
        }

        function storageImageH() {
          bannerImage8 = document.getElementById('car08');
          imgData8 = getBase64Image(bannerImage8);
          localStorage.setItem("imgData8", imgData8);
          localStorage.setItem("CarN08", "Chevrolet Onix")
          localStorage.setItem("Price08", "Chevrolet Onix")
        }

        function storageImageI() {
          bannerImage9 = document.getElementById('car09');
          imgData9 = getBase64Image(bannerImage9);
          localStorage.setItem("imgData9", imgData9);
          localStorage.setItem("CarN09", "Chevrolet Onix")
          localStorage.setItem("Price09", "Chevrolet Onix")
        }

/*Mostrar Imagem*/
        
        var dataImage1 = localStorage.getItem('imgData1');
        bannerImg1 = document.getElementById('CarP01');
        bannerImg1.src = "data:image/png;base64," + dataImage1;

        var dataImage2 = localStorage.getItem('imgData2');
        bannerImg2 = document.getElementById('CarP02');
        bannerImg2.src = "data:image/png;base64," + dataImage2;

        var dataImage3 = localStorage.getItem('imgData3');
        bannerImg3 = document.getElementById('CarP03');
        bannerImg3.src = "data:image/png;base64," + dataImage3;

        var dataImage4 = localStorage.getItem('imgData4');
        bannerImg4 = document.getElementById('CarP04');
        bannerImg4.src = "data:image/png;base64," + dataImage4;


        var dataImage5 = localStorage.getItem('imgData5');
        bannerImg5 = document.getElementById('CarP05');
        bannerImg5.src = "data:image/png;base64," + dataImage5;

        var dataImage6 = localStorage.getItem('imgData6');
        bannerImg6 = document.getElementById('CarP06');
        bannerImg6.src = "data:image/png;base64," + dataImage6;

        var dataImage7 = localStorage.getItem('imgData7');
        bannerImg7 = document.getElementById('CarP07');
        bannerImg7.src = "data:image/png;base64," + dataImage7;

        var dataImage8 = localStorage.getItem('imgData8');
        bannerImg8 = document.getElementById('CarP08');
        bannerImg8.src = "data:image/png;base64," + dataImage8;

        var dataImage9 = localStorage.getItem('imgData9');
        bannerImg9 = document.getElementById('CarP09');
        bannerImg9.src = "data:image/png;base64," + dataImage9;
  
    /*Imagem Invisivel*/  

function setImageVisible(gray, visible) {
  var img = document.getElementById("");
  img.style.visibility = (visible ? 'visible' : 'hidden');
}

function removeProduct(event) {
  event.target.parentElement.parentElement.remove()
  totalCart()
}


function setImageInvisible() {
  setImageVisible('', false)
}

/*Preço Total*/

function totalCart() {
  let totalAmount = 0
  const cartProducts = document.getElementsByClassName("cart-product")
  for (var i = 0; i < cartProducts.length; i++) {
    //console.log(cartProducts[i])
    const productPrice = cartProducts[i].getElementsByClassName("product-price")[0].innerText.replace("R$", "").replace(",", ".")


    totalAmount += productPrice * 1
  }
  totalAmount = totalAmount.toFixed(2)
  totalAmount = totalAmount.replace(".", ",")
  document.querySelector(".cart-total span").innerText = "R$" + totalAmount
}

/*Nome do Carro*/

document.getElementById("N1").innerHTML = localStorage.getItem("CarN01");

document.getElementById("N2").innerHTML = localStorage.getItem("CarN02");

document.getElementById("N3").innerHTML = localStorage.getItem("CarN03");

document.getElementById("N4").innerHTML = localStorage.getItem("CarN04");

document.getElementById("N5").innerHTML = localStorage.getItem("CarN05");

document.getElementById("N6").innerHTML = localStorage.getItem("CarN06");

document.getElementById("N7").innerHTML = localStorage.getItem("CarN06");

document.getElementById("N8").innerHTML = localStorage.getItem("CarN06");

document.getElementById("N9").innerHTML = localStorage.getItem("CarN06");

/*Preço do Carro*/

document.getElementById("P1").innerHTML = localStorage.getItem("Price01");

document.getElementById("P2").innerHTML = localStorage.getItem("Price02");

document.getElementById("P3").innerHTML = localStorage.getItem("Price03");

document.getElementById("P4").innerHTML = localStorage.getItem("Price04");

document.getElementById("P5").innerHTML = localStorage.getItem("Price05");

document.getElementById("P6").innerHTML = localStorage.getItem("Price06");

document.getElementById("P7").innerHTML = localStorage.getItem("Price07");

document.getElementById("P8").innerHTML = localStorage.getItem("Price08");

document.getElementById("P9").innerHTML = localStorage.getItem("Price09");

/*Limpar LocalStorage */

function myRemo() {
  localStorage.clear();
}