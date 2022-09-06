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
}
