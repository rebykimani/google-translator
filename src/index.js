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
