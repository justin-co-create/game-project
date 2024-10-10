
const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-dWdfk3fQPgB5hj4Lc5TujsZC'}
};

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cstellar%2Cnotcoin&vs_currencies=usd', options)
  .then(response => response.json())
  .then(function(response){ 
    btc.innerHTML = response.bitcoin.usd
    eth.innerHTML = response.stellar.usd
    doge.innerHTML = response.notcoin.usd
    
  } )
  .catch(err => console.error(err))
  


  const btc = document.getElementById("bitcoin");
  const eth = document.getElementById("ethereum");
  const doge = document.getElementById("dogecoin");




// crypto coin

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});




const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

//typewriter

let words =['Play, Earn, Win, Repeat','Play, Earn, Win, Repeat']

function typeWriterEffect(){
  
  
    let wordCount = 0;
    let letterCount = 0;
  
    let currentText ='';
    let currentWord = '';
  
    let timeOut = 50;
    let isDeleting = false;
  
    function type(){
        if(wordCount === words.length){
            wordCount = 0
        }
        currentWord = words[wordCount]
  
        if(isDeleting){
            currentText = currentWord.slice(0, --letterCount)
        } else{
            currentText = currentWord.slice(0, ++letterCount)
        }
  
        document.querySelector('.typewriter').textContent = currentText;
  
        timeOut = isDeleting ? 100 : 200;
  
        if(!isDeleting && currentText.length === currentWord.length){
            timeOut = 1000
            isDeleting = true
        } else if(isDeleting && currentText.length === 0){
            timeOut = 500;
            isDeleting = false;
            wordCount++
        }
        setTimeout(type,timeOut);
    }
    type()
  } 

  typeWriterEffect()



//countdown

const countDownDate = new Date("Feb 1, 2025 00:00:00").getTime();
const x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);


// crypto coin

