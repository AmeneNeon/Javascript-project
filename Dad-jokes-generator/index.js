const btnEl = document.getElementById("btn");
const apiKey = "K25qjLyP7jKI9t4ZNKYGhA==OR40wOtoUydlZ5Ya";

const options = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function myFunction() {
  try {
    document.getElementById("joke").innerHTML = "update ...";

    btnEl.disabled = true;
    btnEl.innerHTML = "LOADING ...";

    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerHTML = " TELL ME A JOKE";

    document.getElementById("joke").innerHTML = data[0].joke;
  } catch (error) {
    document.getElementById("joke").innerHTML =
      "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerHTML = " TELL ME A JOKE";
  }
}
btnEl.addEventListener("click", myFunction);
