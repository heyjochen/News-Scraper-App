// To Do
// Create a dropdown and search Function
// Hide API Key
// change whole API
class News{
  //What to put in here?
  constructor(){
  }

  getNewsArticles(category){
    // Checks if there already is content, if so it removes it
    const newsSection = document.getElementById("news")
    while (newsSection.firstChild) {
        newsSection.firstChild.remove()
    } 

    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=fe0f8edc63764895be223c86d367cf91`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
     data.articles.forEach((e) => {

       // Create an populate headings
       const heading = document.createElement('h1');
       // Slice the headline title up until '-'
       const indexOfDash = e.title.indexOf('-')
       const headingModified = e.title.slice(0, indexOfDash-1)
       heading.className = 'news-title';
       heading.textContent = headingModified;
       document.querySelector('#news').appendChild(heading);

       // Create an populate sources
       const source = document.createElement('h2');
       source.className = 'news-source';
       source.textContent = e.source.name;
       document.querySelector('#news').appendChild(source);

       //Link the Sources with the
       const link = document.createElement('a');
       link.className = 'news-link';
       link.textContent = 'Read More';
       link.href = e.url
       document.querySelector('#news').appendChild(link);

       // Add the divider
      const divider = document.createElement('div');
      divider.className = 'news-divider';
      document.querySelector('#news').appendChild(divider);
     })


    })
    .catch(err => {
    console.log(`error ${err}`)
    });
  }

}

//Create News
const newHeadlines = new News()

// Buttons
const BUSINESS = document.querySelector('#business')
const ENTERTAINMENT = document.querySelector('#entertainment')
const GENERAL = document.querySelector('#general')
const HEALTH = document.querySelector('#health')
const SCIENCE = document.querySelector('#science')
const SPORTS = document.querySelector('#sports')
const TECHNOLOGY = document.querySelector('#technology')

// Click-Events
BUSINESS.addEventListener('click', () => newHeadlines.getNewsArticles('business'))
ENTERTAINMENT.addEventListener('click', () => newHeadlines.getNewsArticles('entertainment'))
GENERAL.addEventListener('click', () => newHeadlines.getNewsArticles('general'))
HEALTH.addEventListener('click', () => newHeadlines.getNewsArticles('health'))
SCIENCE.addEventListener('click', () => newHeadlines.getNewsArticles('science'))
SPORTS.addEventListener('click', () => newHeadlines.getNewsArticles('sports'))
TECHNOLOGY.addEventListener('click', () => newHeadlines.getNewsArticles('health'))