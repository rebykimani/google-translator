//add event listeners
const languages = {
  sw: "Swahili",
  af: "Afrikaans",
  sq: " Albanian",
  am: "Amharic",
  ar: "Arabic",
  hy: "Armenian",
  az: "Azerbaijani",
  eu: "Basque",
  be: "Belarusian",
  bn: "Bengali",
  bs: "Bosnian",
  bg: "Bulgarian",
  ca: "Catalan",
  co: "Corsican",
  hr: "Croatian",
  cs: "Czech",
  da: "Danish",
  nl: "Dutch",
  en: "English",
  eo: "Esperanto",
  et: "Estonian",
  fi: "Finnish",
  fr: "French:",
  fy: "Frisian",
  g: "Galician",
  de: "German",
  el: "Greek",
  gu: "Gujarati",
  ha: "Hausa",
  haw: "Hawaiian",
  he: "Hebrew",
  hi: "Hindi",
  fa: "Persian",
  pl: "Polish",
  pa: "Punjabi",
  ro: "Romanian",
  ru: "Russian",
  sm: "Samoan",
  sr: "Serbian",
  st: "Sesotho",
  sn: "Shona",
  sd: "Sindhi",
  sk: "Slovak",
  sl: "Slovenian",
  so: "Somali",
  es: "Spanish",
  su: "Sundanese",
  yo: "Yoruba",
  zu: "Zulu",
};
const input = document.querySelector("input");
const log = document.getElementById("typed-text");
const initialLang = document.getElementById("initial-lang");
const translatedData = document.getElementById("translated-text");
let textToDetect = "";
let initialLanguage = "";

input.addEventListener("change", handleOnChange);
//event handlers
function handleOnChange(e) {
  //   e.preventDefault();
  log.textContent = e.target.value;
  console.log("TEXT INPUT: ", e.target.value);
  textToDetect = e.target.value;
  detectFunction(textToDetect);
}
// this adds a list of languages to a select component
const select = document.getElementById("select-language");
for (language in languages) {
  select.options[select.options.length] = new Option(
    languages[language],
    language
  );
}

//This checks the selected language and submits for translation

const selectedLang = document.getElementById("select-language");
selectedLang.addEventListener("change", handleLanguageTranslate);
function handleLanguageTranslate(e) {
  console.log("SELECTED LANG: ", e.target.value);
  translateFunction(e.target.value);
}

//fetch request - detect

// let result = document.getElementById("display-all");
const headers = {
  "content-type": "application/x-www-form-urlencoded",
  "Accept-Encoding": "application/gzip",
  "X-RapidAPI-Key": "a864d1ff18msh4ad633aeb1d688bp1d0d99jsnbce0d56743d1",
  "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
};

const detectFunction = async (text) => {
  const data = {};
  console.log("DATA TO DETECT: ", text);
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "a864d1ff18msh4ad633aeb1d688bp1d0d99jsnbce0d56743d1",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    data: {
      q: `${text}`,
    },
  };
  $.ajax(settings).done(function (response) {
    console.log("RESPONSE FROM API CALL: ", response.data.detections);
    const resp = response.data.detections[0][0].language;
    initialLang.textContent = `Language detected: ${languages[resp]}`;
    initialLanguage = resp;
  });
};
//fetch POST request
const translateFunction = async (text) => {
  const data = {};
  console.log("LANG TO TRANSLATE: ", text);
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "a864d1ff18msh4ad633aeb1d688bp1d0d99jsnbce0d56743d1",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    data: {
      q: `${textToDetect}`,
      source: initialLanguage,
      target: text,
    },
  };
  $.ajax(settings).done(function (response) {
    console.log("RESPONSE FROM API CALL: ", response.data);
    const resp = response.data.translations[0].translatedText;
    translatedData.textContent = `Translated Text: ${resp}`;
  });
};
