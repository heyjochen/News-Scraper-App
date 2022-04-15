// for every article that we fetch we create an h1, h2, a div and a h3
// We set the text content to the respective fetched values
// we append the items to the section

class News{
  //What to put in here?
  constructor(){

  }
  getNewsArticles(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=fe0f8edc63764895be223c86d367cf91')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
     console.log(data.articles);
     data.articles.forEach((e) => {

       // Create an populate headings
       const heading = document.createElement('h1');
       heading.className = 'news-title';
       heading.textContent = e.title;
       document.querySelector('.news').appendChild(heading);

       // Create an populate sources
       const source = document.createElement('h2');
       source.className = 'news-source';
       source.textContent = e.source.name;
       document.querySelector('.news').appendChild(source);

       //Link the Sources with the
       const link = document.createElement('a');
       link.className = 'news-link';
       link.textContent = 'Read More';
       link.href = e.url
       document.querySelector('.news').appendChild(link);

       // Add the divider
      const divider = document.createElement('div');
      divider.className = 'news-divider';
      document.querySelector('.news').appendChild(divider);
     })


    })
    .catch(err => {
    console.log(`error ${err}`)
    });
  }

}

const newHeadlines = new News()
newHeadlines.getNewsArticles()







