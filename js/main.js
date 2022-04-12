fetch('')
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)


// Create an h1 for every news title and populate the marquee__inner class
let newsHeading = document.getElementsByClassName('marquee__inner')[0];
for (let i = 0; i <= 9; i++) {
    const positionDash = data.articles[i].title.indexOf('-')
    let h1 = document.createElement('h1');
    // Trim for only the first X characters and then add title?
    h1.innerHTML = data.articles[i].title.slice(0,positionDash-1)
    ;
    newsHeading.appendChild(h1);
   }
  
  

  /*Todo
  - Fix speed depending on length, only display certain amount of character
  - Dry code
  - Include Headline Source in smaller typo after title
  - Add links to headings
  - How to hide API key
  - Write everything in a Class
  - async await?
  - Include options to filter depending on topic and exclude categories
  */

})
.catch(err => {
    console.log(`error ${err}`)
});