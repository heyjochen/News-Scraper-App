import { header } from "/js/header.js";

class News {
  //What to put in here?
  constructor() {}

  getNewsArticles(category) {
    // Checks if there already is content, if so it removes it
    const newsSection = document.getElementById("news");
    while (newsSection.firstChild) {
      newsSection.firstChild.remove();
    }

    fetch(
      `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=${category}`,
      header
    )
      .then((res) => res.json()) // parse response as JSON
      .then((data) => {
        data.articles.forEach((e, i) => {
          // Create article element for each article
          const article = document.createElement("article");
          article.id = `article${i}`;
          document.querySelector("#news").appendChild(article);

          // Create and populate headings
          const heading = document.createElement("a");
          heading.className = "heading1-news-title";
          heading.textContent = e.title;
          heading.href = e.link;
          document.querySelector(`#article${i}`).appendChild(heading);

          // Create a div for the sources and twitter
          const divSourceTwitter = document.createElement("div");
          divSourceTwitter.className = "div-source-twitter";
          divSourceTwitter.id = `div-source-twitter${i}`;
          document.querySelector(`#article${i}`).appendChild(divSourceTwitter);

          // Create and populate sources
          const source = document.createElement("h2");
          source.className = "heading2-news-source";
          source.textContent = e.clean_url;
          document.querySelector(`#div-source-twitter${i}`).appendChild(source);

          // edit the Twitter Account Info if there is Account info
          if (e.twitter_account !== null && e.twitter_account.startsWith("@")) {
            const twitterLink = document.createElement("a");
            twitterLink.id = `twitterLink${i}`;
            const twitterLinkSrc = e.twitter_account.slice(
              1,
              e.twitter_account.length
            );
            twitterLink.href = `http://twitter.com/${twitterLinkSrc}`;
            const twitterLogo = document.createElement("img");
            twitterLogo.className = "twitter-logo";
            twitterLogo.src = "assets/twitter.svg";

            document
              .querySelector(`#div-source-twitter${i}`)
              .appendChild(twitterLink);
            document.querySelector(`#twitterLink${i}`).appendChild(twitterLogo);
          }

          // Add the divider
          const divider = document.createElement("div");
          divider.className = "news-divider";
          document.querySelector(`#article${i}`).appendChild(divider);
        });
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  }
}

//Create News
const newHeadlines = new News();

const buttons = document.querySelector(".links");
buttons.addEventListener("click", (e) => {
  const { target } = e;
  const { id } = target;
  // condition to check user clicks on link
  if (!target.matches(".link")) {
    return;
  } else {
    newHeadlines.getNewsArticles(`${id}`);
  }
});
