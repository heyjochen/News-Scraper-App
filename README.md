# News-Scraper-App: <a href="https://getyournews.netlify.app/" target="_blank">Get News here</a>
<a href="" target="_blank"><img src="/assets/readme.gif" /></a>

Short Intro Sentence

## Tech used: ![HTML5 BADGE](https://img.shields.io/static/v1?label=|&message=HTML5&color=23555f&style=flat-square&logo=html5)![CSS BADGE](https://img.shields.io/static/v1?label=|&message=CSS3&color=285f65&style=flat-square&logo=css3)![JAVASCRIPT BADGE](https://img.shields.io/static/v1?label=|&message=JAVASCRIPT&color=3c7f5d&style=flat-square&logo=javascript)

Building this App, I focused on integrating content from an API and filtering out working properties.

## Optimizations
When I improve this project, I would concentrate on abstracting the logic in my JS code. I will focus first on writing dry code for the eventListeners.

## Lessons Learned:
I learned how to dig into API requests and used a variety of string and array methods to display the content needed. I came back to this project after a couple weeks and was able to refine my code and saved about 20 lines of code:

Before that I had a single eventListener for every Category, which created unnecessary repetition.
 <img src="https://github.com/heyjochen/News-Scraper-App/blob/main/assets/oldCode.png" width="100%"  alt=""/>

By creating a variable called buttons and assigning the class of .links to it, which includes all of the categories, I could then place an eventListener on that variable, that extract the ID of each link and then runs the newHeadlines.getNewsArticles() method.
<img src="https://github.com/heyjochen/News-Scraper-App/blob/main/assets/newCode.png" width="100%"  alt=""/>

## More Projects



<table bordercolor="#66b2b2">
  
  <tr>
    <td width="33.3%" valign="top">
<a target="_blank" href=""> Paleontologista</a>
        <br />
      <a target="_blank" href="">
            <img src="https://github.com/heyjochen/heyjochen/blob/main/assets/Website_Jingmai-OConnor-5fps.gif" width="100%"  alt=""/>
        </a>
    </td>
    <td width="33.3%" valign="top">
<a target="_blank" href="">Omomi Sushi</a>
      <br />
        <a target="_blank" href="">
          <img src="https://github.com/heyjochen/heyjochen/blob/main/assets/Website_omomi-5fps.gif" width="100%" alt=""/>
        </a>
    </td>
    <td width="33.3%" valign="top">
<a target="_blank" href="">Portfolio</a>
        <br />
        <a target="_blank" href="">
          <img src="https://github.com/heyjochen/heyjochen/blob/main/assets/Website_Jochen-Stierberger-5fps.gif" width="100%" alt=""/>
        </a>
    </td>
  </tr>
</table>