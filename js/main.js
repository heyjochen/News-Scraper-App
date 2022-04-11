fetch(url)
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)
  document.querySelector('.heading1').textContent = data.articles[0].title
  document.querySelector('.heading2').textContent = data.articles[1].title
  document.querySelector('.heading3').textContent = data.articles[2].title
  document.querySelector('.heading4').textContent = data.articles[3].title
  document.querySelector('.heading5').textContent = data.articles[4].title
  document.querySelector('.heading6').textContent = data.articles[5].title
  document.querySelector('.heading7').textContent = data.articles[6].title
  document.querySelector('.heading8').textContent = data.articles[7].title
  document.querySelector('.heading9').textContent = data.articles[8].title
  document.querySelector('.heading10').textContent = data.articles[9].title

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