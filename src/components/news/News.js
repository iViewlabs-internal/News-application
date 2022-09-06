import React, { Component } from 'react'
import NewsItem from '../newsitems/NewsItem';

export class News extends Component {
  articles =[
    {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Jacob Lev, CNN",
      "title": "American Frances Tiafoe upsets Rafael Nadal in 4th round of US Open - CNN",
      "description": "Twenty-two-time grand slam champion Rafael Nadal was upset in the fourth round of the US Open on Monday by American Frances Tiafoe at Arthur Ashe Stadium in Flushing, New York.",
      "url": "https://www.cnn.com/2022/09/05/tennis/us-open-monday-spt-intl/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220905215710-us-open-monday-spt-intl-super-tease.jpg",
      "publishedAt": "2022-09-06T05:29:00Z",
      "content": "(CNN)Twenty-two-time grand slam champion Rafael Nadal was upset in the fourth round of the US Open on Monday by American Frances Tiafoe at Arthur Ashe Stadium in Flushing, New York.\r\nIn a match that … [+3054 chars]"
      },
      {
      "source": {
      "id": "entertainment-weekly",
      "name": "Entertainment Weekly"
      },
      "author": "Clark Collis",
      "title": "Dwayne Johnson praises Mummy costar Brendan Fraser in The Whale - Entertainment Weekly News",
      "description": "The minutes-long ovation for<em> The Whale</em> at the Venice Film Festival delighted Fraser's <em>Mummy Returns </em>costar.",
      "url": "https://ew.com/movies/dwayne-johnson-happy-standing-ovation-brendan-fraser-the-whale/",
      "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C26%2C1500%2C776&poi=face&w=1500&h=750&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F09%2F05%2Fbrendan-fraser-dwayne-johnson-090522-2a.jpg",
      "publishedAt": "2022-09-06T04:56:00Z",
      "content": "Brendan Fraser fans around the world were delighted to learn on Sunday that the actor received a lengthy standing ovation at the Venice Film Festival for his performance in director Darren Aaronofsky… [+2081 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "New York Post"
      },
      "author": "David Propper",
      "title": "Bed Bath & Beyond CFO Gustavo Arnal's death ruled suicide by medical examiner - New York Post ",
      "description": "The deadly leap was ruled a suicide with Arnal sustaining multiple blunt trauma, the medical examiner determined.",
      "url": "https://nypost.com/2022/09/06/bed-bath-beyonds-gustavo-arnals-death-ruled-suicide/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/09/bbb-suicide-189.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2022-09-06T04:38:00Z",
      "content": "Bed Bath &amp; Beyond executive Gustavo Arnals deadly leap from his swanky Tribeca high-rise apartment was officially ruled a suicide by the citys medical examiner Monday.\r\nArnal, who was CFO of the … [+2168 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "CBS Sports"
      },
      "author": "Barrett Sallee",
      "title": "Clemson vs. Georgia Tech score, takeaways: Tigers offense overcomes slow start to win big in Atlanta - CBS Sports",
      "description": "Quarterback DJ Uiagalelei shook off early mistakes to give Clemson its first win of the 2022 season",
      "url": "https://www.cbssports.com/college-football/news/clemson-vs-georgia-tech-score-takeaways-tigers-offense-overcomes-slow-start-to-win-big-in-atlanta/live/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/09/06/6e3bb41f-29ee-4afe-8758-fdf778ba9264/thumbnail/1200x675/bcb1baa9543531356cfd2009271bf18b/dju-gt-usatsi.jpg",
      "publishedAt": "2022-09-06T04:26:00Z",
      "content": "ATLANTA -- Overcoming a sloppy and slow start that has been all too familiar, No. 4 Clemson topped Georgia Tech 41-10 on Monday night as the Tigers look to return to the top of the ACC after falling … [+5546 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "YouTube"
      },
      "author": null,
      "title": "1500 homes evacuated, additional structures destroyed - CBS Los Angeles",
      "description": "Nicole Comstock reports from Hemet where the Fairview Fire has burned more than 700 acres and is about 5% contained. Around 1,500 homes have been evacuated a...",
      "url": "https://www.youtube.com/watch?v=2-sNJprYoik",
      "urlToImage": "https://i.ytimg.com/vi/2-sNJprYoik/hqdefault.jpg",
      "publishedAt": "2022-09-06T04:16:34Z",
      "content": null
    }
  ]

  constructor(){
    super();
    console.log("error");
    this.state ={
      arcticles : this.articles,
      loading : false
    }
   }
   // ComponentDidMount is used to
    // execute the code 
  //   async componentDidMount() {
  //     let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ef3fec39b4ce4bab9cad045d876f47be"
  //     let data = await fetch(url)
  //     let parsedData = await data.json()
  //     this.state('arcticles: parsedData.articles')
  // } 

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headline </h2>
        
        <div className='row'>
        {this.state.arcticles.map((element)=>{
          return <div className="col md-4" key={element.url}>
            <NewsItem  title = {element.title.slice(0,40)} description = {element.description.slice(0,88)} imgUrl={element.urlToImage} newsUrl = {element.url}/>
             </div>
        })}
          
        </div>
      </div>
    )
  }
}

export default News
