let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "See you soon!";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});

const menuBtn = document.querySelector(".header__menu");
const menu = document.querySelector(".nav__right");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// -------------------------------------------------------------------------------------------------------------

const category = document.querySelector(".blogs__cards");
const apiKey = "7cef9bdcc71f4e1aa5fa0eec115b94f1";
const apiUrl = `https://newsapi.org/v2/everything?q=movie&lang=en&sort_by=relevancy&page=1&apiKey=${apiKey}`;

// Function to truncate title to a specified number of words
function truncateTitle(title, wordLimit) {
  const words = title.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return title;
}

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.articles.slice(0, 3).forEach((article) => {
      const truncatedTitle = truncateTitle(article.title, 5);
      const articleHtml = `
        <div class="card">
          <div class="card__img">
            <img src="${article.urlToImage}" class="card-img-top card-img" alt="Image for ${article.title}" />
          </div>
          <div class="card-body">
            <span class="card-date">${article.author}</span>
            <h2 class="card-heading">${truncatedTitle}</h2>
            <p class="card-body-text">${article.content}</p>
          </div>
        </div>`;
      category.innerHTML += articleHtml;
    });
  })
  .catch((err) => {
    console.error(err);
    category.innerHTML =
      "<p>Failed to load articles. Please try again later.</p>";
  });

// --------------------------------------------------------------------------------------------------- //

const category2 = document.querySelector(".categories__hero__section");
const options2 = {
  method: "GET",
  params: { q: "Bitcoin", lang: "en", sort_by: "relevancy", page: "1" },
  headers: {
    "x-api-key": "cee18a90008a4b60b399d572d9d06a49",
  },
};

fetch("https://newsapi.org/v2/everything?q=nasa", options2)
  .then((response) => response.json())
  .then((data) => {
    data.articles.slice(0, 5).map((startup) => {
      const blogs = (category2.innerHTML += `
      <div class="categories__hero__section">
      <div class="categories__hero__box">
        <div>
          <img
            class="categories__hero__box__img"
            src="${startup.urlToImage}"
            alt="" />
        </div>
        <div class="categories__hero__box__right">
          <span class="box__topic_name">Space</span>
          <a href="http://#" target="_blank" rel="noopener noreferrer"><h3 class="box__heading">${startup.title}</h3></a>
          <p class="box__text">${startup.content}<a href="https://www.wired.com/story/economy-dream/"
          " target="_blank" rel="noopener noreferrer">...[Read More]</a>
          </p>
        </div>
      </div>
    </div>`);
      console.log(data);
      //   startupBlogs.appendChild(blogs)
      //   startupContainer.appendChild(startupBlogs)
      //   startupSection.appendChild(startupContainer)
      return blogs;
    });
  })
  .catch((err) => console.error(err));

const category3 = document.querySelector(".blog__header");
const options3 = {
  method: "GET",
  params: { q: "Bitcoin", lang: "en", sort_by: "relevancy", page: "1" },
  headers: {
    "x-api-key": "cee18a90008a4b60b399d572d9d06a49",
  },
};

fetch("https://newsapi.org/v2/everything?q=space", options3)
  .then((response) => response.json())
  .then((data) => {
    data.articles.slice(0, 1).map((startup) => {
      const blogs = (category3.innerHTML += `
      <div class="container">
      <div class="blog__header">
      <img class="blog__header-image" src="${startup.urlToImage}" alt="" />
      </div>
        </div>
     `);
      console.log(data);
      //   startupBlogs.appendChild(blogs)
      //   startupContainer.appendChild(startupBlogs)
      //   startupSection.appendChild(startupContainer)
      return blogs;
    });
  })
  .catch((err) => console.error(err));

const category4 = document.querySelector(".blog__main");
const options4 = {
  method: "GET",
  params: { q: "Bitcoin", lang: "en", sort_by: "relevancy", page: "1" },
  headers: {
    "x-api-key": "cee18a90008a4b60b399d572d9d06a49",
  },
};

fetch("https://newsapi.org/v2/everything?q=space", options4)
  .then((response) => response.json())
  .then((data) => {
    data.articles.slice(0, 1).map((startup) => {
      const blogs = (category4.innerHTML += `
      <div class="blog__main">
      <div class="blog__info">
        <div>
          <img
            class="blog__info__img"
            src="${startup.urlToImage}"
            alt="" />
        </div>
        <div>
          <p class="blog__info__name">${startup.author}</p>
          <p class="blog__info__date">${startup.publishedAt}</p>
        </div>
      </div>
      <div class="blog__texts">
        <p class="blog__texts-header">
        ${startup.title}
        </p>
        <p class="blog__texts-main">
        ${startup.description}
        </p>
        <p class="blog__texts-footer1">
        ${startup.content}
        </p>
        <p class="blog__texts-footer2">
        ${startup.content}
        </p>
      </div>
    </div>
     `);
      console.log(data);
      //   startupBlogs.appendChild(blogs)
      //   startupContainer.appendChild(startupBlogs)
      //   startupSection.appendChild(startupContainer)
      return blogs;
    });
  })
  .catch((err) => console.error(err));

function showResults() {
  const ul = document.getElementById("authors");
  var showresults = search(authors);
  console.log(showresults);
  showresults ? counterResults(showresults) : null;
}

function search() {
  var results = "";
  var count = 0;
  var searchText = document.getElementById("search-box").value;
  console.log(searchText, datum);
  datum.map(function (startup) {
    var text = startup.email;
    var slicedText = text.slice(0, searchText.length);
    if (searchText === slicedText) {
      count++;
      results += prepareList(startup);
    }
  });
  console.log(results, count);
  return { count: count, results: results };
}
