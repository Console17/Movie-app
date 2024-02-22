const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.querySelector(".main");
const search = document.querySelector(".search");
const form = document.querySelector(".form");
const searchIcon = document.querySelector(".search-icon");
const showMovies = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    data.results.forEach((element) => {
      const elem = document.createElement("div");
      const image = document.createElement("img");
      const title = document.createElement("h3");
      title.innerHTML = element.title;
      image.src = IMGPATH + element.poster_path;
      elem.appendChild(image);
      elem.appendChild(title);
      main.appendChild(elem);
    });
  } catch (error) {
    console.error(error);
  }
};

showMovies(apiUrl);

function handleSearch(e) {
  e.preventDefault();
  main.innerHTML = "";
  const searchTerm = search.value;

  if (searchTerm) {
    showMovies(SEARCHAPI + searchTerm);
    search.value = "";
  }
}
