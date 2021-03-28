
const textInput = document.querySelector("input[type='text']");
const select = document.querySelector("select");
const title = document.querySelector("#title");
const releaseDate = document.querySelector("#releaseDate");
const description = document.querySelector("#description");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

const getTitles = () => {

  fetch("https://ghibliapi.herokuapp.com/films")
    .then((res) => {
      if (!res.ok) throw Error("Error");
      return res.json();
    })
    .then((films) => {
      movies = films;
      films.forEach((film) => appendFilmTitles(film.title, film.url));
    })
    .catch((err) => {
      alert(err);
    });
};

const appendFilmTitles = (title, url) => {
  const option = document.createElement("option");
  option.textContent = title;
  option.value = url;
  select.appendChild(option);
};

select.addEventListener("change", (e) => {
  fetch(e.target.value)
    .then((res) => {
      if (!res.ok) throw Error("Error");
      return res.json();
    })
    .then((film) => {
      title.textContent = film.title;
      releaseDate.textContent = film.release_date;
      description.textContent = film.description;
    })
    .catch((err) => {
      alert(err);
    });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = `<strong>${title.textContent}:</strong> ${textInput.value}`;
  ul.appendChild(li);
  textInput.value = "";
});

// e.target.options[e.target.options.selectedIndex].textContent

getTitles();
