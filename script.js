

document.querySelector('.demo-btn').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default link behavior
  
  const targetSection = document.querySelector('.demo1');
  
  window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth' // Enable smooth scrolling
  });
});







/*handling accordion clicks*/
const accordionQuestions = document.querySelectorAll(".question");

accordionQuestions.forEach((question) => {
  question.addEventListener("click", () => {
   question.nextElementSibling.classList.toggle("hidden");
  });
});













/*demo functionality*/

const demoButton = document.querySelector(".demo-btn");
const blur = document.querySelector(".backdrop-blur");
const demoModal = document.querySelector(".demo");
const verseContainer = document.querySelector(".verse");




/* see if user highlights a verse*/
/*
//if module is open
document.addEventListener('mouseup', function() {
  var selectedText = window.getSelection().toString();
  
  if (selectedText !== '') {
    // Do something with the selected text
    // contact chat gpt api
    console.log('Selected Text: ' + selectedText);
  }
});

const apiText = "https://bible-api.com/";

let bibleVerse = "";

async function fetchAPI() {
  let response = await fetch(`${apiText}jn3:16`);
  response = await response.json();
  bibleVerse = response.text

  insertBibleVerse();
}

const insertBibleVerse = () =>{
  verseContainer.insertAdjacentHTML("afterend",`<p class="text-white">${bibleVerse}<p>`)
  trigger = false;
}



let trigger = true;



demoButton.addEventListener("click",()=>{
  demoModal.classList.remove("hidden");
  blur.classList.remove("hidden");

  if (trigger) fetchAPI();


})

blur.addEventListener("click",()=>{
  demoModal.classList.add("hidden");
  blur.classList.add("hidden");

})*/