
const Roman = document.querySelector("#mehsul");

//Arrow Function
const mahir = (name) => console.log("Hello, " + name);
mahir("Mahir");


//IIFE  Immediately Invoked Function Expression
(function QrupuSalamla(ad,soyad) {
    console.log("Welcome", + ad +" " + soyad)
 } ("Roman",  `Akhundlu`))


// asinxron
async function melumatlar() {
    const unvan = "https://fakestoreapi.com/products"

    try {
        const response = await fetch(unvan)
        console.log(response)

        const mehsullar = await response.json()
        console.table(mehsullar)


        for(let  i=0; i<mehsullar.length; i++) {
            Roman.innerHTML += `<div class="col-12 col-md-6 col-lg-3">
            <div class="card my-2" style="width: 18rem;">
              <img src="${mehsullar[i].image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${mehsullar[i].title}</h5>
                <p class="card-text">${mehsullar[i].description}.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            </div> `
        }


     }

    catch(err) {
        console.log("Serverde bas veren xeta:", err.message)
    }


    finally {
        console.log("404 Server couldnt be found!")
    }
}

window.addEventListener("DOMContentLoaded", melumatlar)


const truncateText = () => {
    const productDescriptions = document.getElementsByClassName('card-text');
    for (let i = 0; i < productDescriptions.length; i++) {
      const productDescription = productDescriptions[i];
      const fullText = productDescription.textContent;
      const truncatedText = fullText.slice(0, 100) + '...';
      productDescription.textContent = truncatedText;
    }
  };
  
  // Call the truncateText function
  truncateText();