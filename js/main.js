$(document).ready(() => {
  $("#searchForm").on("submit", e => {
    let searchText = $("#searchText").val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText) {
  API_KEY = "736cb0f2a5061149d7b43012b1dada7e";
  axios
    .get(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`
    )
    .then(res => {
      console.log(res);
      let movies = res.data.results;
      let output = "";
      $.each(movies, (index, movie) => {
        const url = `http://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        output += `
          <div class="col-md-3">
            <div class="well">
              <img src="${url}"/>
              <h5>${movie.original_title}</h5>
              <a onclick="movieSelected('${
                movie.id
              }')" class="btn btn-primary" href="">Movie Details</a>
            </div>
          </div>
        `;

        $("#movies").html(output);
      });
    })
    .catch(err => console.log(err));
}

function movieSelected(id) {
  sessionStorage.setItem("movieId", id);
  window.location = "movie.html";
  return false;
}

function getMovie() {
  let movieId = sessionStorage.getItem("movieId");

  API_KEY = "736cb0f2a5061149d7b43012b1dada7e";
  axios
    .get(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`
    )
    .then(res => {
      console.log(res);
      let movies = res.data.results;
      let output = "";
      $.each(movies, (index, movie) => {
        const url = `http://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        output += `
          <div class="col-md-3">
            <div class="well">
              <img src="${url}"/>
              <h5>${movie.original_title}</h5>
              <a onclick="movieSelected('${
                movie.id
              }')" class="btn btn-primary" href="">Movie Details</a>
            </div>
          </div>
        `;

        $("#movies").html(output);
      });
    })
    .catch(err => console.log(err));
}
