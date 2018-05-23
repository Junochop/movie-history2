const tmdb = require('./tmdb');

const myLinks = () => {
  $(document).click((e) => {
    if (e.target.id === '#search') {
      $('#search').removeClass('hide');
      $('#myMovies').addClass('hide');
      $('#authScreen').addClass('hide');
    } else if (e.target.id === '#myMovies') {
      $('#search').addClass('hide');
      $('#myMovies').removeClass('hide');
      $('#authScreen').addClass('hide');
      // getMahMovies();
    } else if (e.target.id === '#authScreen') {
      $('#search').addClass('hide');
      $('#myMovies').addClass('hide');
      $('#authScreen').removeClass('hide');
    }
  });
};

const pressEnter = () => {
  tmdb.showResults();
};

const initializer = () => {
  myLinks();
  pressEnter();
};

module.exports = {
  initializer,
};
