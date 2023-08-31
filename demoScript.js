
/*
import { Configuration, OpenAIApi } from "openai";
import {config} from 'dotenv'
config();

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

const getResponse = async (text)=>{

const chatCompletion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: text,
  max_tokens: 30,
  temperature: 0,
});
console.log(chatCompletion.data.choices[0].text);

}
*/



const response = document.querySelector(".response");
const typedReply = document.querySelector(".Typewriter_wrapper")

const typewriter = new Typewriter(response, {
  delay: 0, // Delay between each character typing (in milliseconds)
});

const demoGrid = document.querySelector(".fourGrid")

demoGrid.addEventListener('mouseup', function() {
    var selectedText = window.getSelection().toString();
    
    if (selectedText !== '') {
      //getResponse(selectedText)
      // Do something with the selected text
      // contact chat gpt api
      //console.log('Selected Text: ' + selectedText);
    typewriter.deleteAll({ delay: 0 }).typeString(`Hi I am EarningsVisionGPT. The text you highlighted is "${selectedText}". To
    get started please sign for free :)`).start();
    }
  });

  







//just some styles for rotating circle text
  const text = document.querySelector(".text p");
  text.innerHTML = text.innerText
      .split("")
      .map(
          (char, i) => `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
      )
      .join("");
      







