//add event listeners
document
  .querySelector(".search-container")
  .addEventListener("click", handleClick);

//event handlers
function handleClick(e) {
  e.preventDefault();
  let languageObj = {
    language: e.target.language.user - Input.value,
  };
}
renderTranslateLanguage(languageObj);

//DOM render Functions
function renderTranslateLanguage(language) {
  //build translated language list
  let card = document.createElement("li");
  card.className = "card";
  card.innerHTML = (
    <div class="content">
      <h4>${translate.language}</h4>
      <p></p>
    </div>
  );
  //add language card to list
  document.querySelector("#language-typed").appendChild(card);
  document.querySelector("#display-all").appendChild(card);
}

//fetch request
const { default: axios } = require("axios");
const axios = require(axios);

let result = document.getElementById("display-all");
let selectLanguage = document.getElementById("select-language");
let searchBtn = document.getElementById("search");

let url = "'https://google-translate1.p.rapidapi.com/language/translate/v2'";

const translateFunction = async () => {
  const data = {};
  await axios
    .post(`${url}`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => console.log("Error: ", e));
};

let languages = {
  Swahili: "sw",
  Afrikaans: "af",
  Albanian: "sq",
  Amharic: "am",
  Arabic: "ar",
  Armenian: "hy",
  Azerbaijani: "az",
  Basque: "eu",
  Belarusian: "be",
  Bengali: "bn",
  Bosnian: "bs",
  Bulgarian: "bg",
  Catalan: "ca",
  Cebuano: "ceb (ISO-639-2)",
  Chinese: "zh-CN (BCP-47)",
  Chinese: "zh-TW (BCP-47)",
  Corsican: "co",
  Croatian: "hr",
  Czech: "cs",
  Danish: "da",
  Dutch: "nl",
  English: "en",
  Esperanto: "eo",
  Estonian: "et",
  Finnish: "fi",
  French: "fr",
  Frisian: "fy",
  Galician: "gl",
  Georgian: "ka",
  German: "de",
  Greek: "el",
  Gujarati: "gu",
  Hausa: "ha",
  Hawaiian: "haw",
  Hebrew: "he",
  Hindi: "hi",
  Persian: "fa",
  Polish: "pl",
  Punjabi: "pa",
  Romanian: "ro",
  Russian: "ru",
  Samoan: "sm",
  Serbian: "sr",
  Sesotho: "st",
  Shona: "sn",
  Sindhi: "sd",
  Slovak: "sk",
  Slovenian: "sl",
  Somali: "so",
  Spanish: "es",
  Sundanese: "su",
  Yoruba: "yo",
  Zulu: "zu",
};
