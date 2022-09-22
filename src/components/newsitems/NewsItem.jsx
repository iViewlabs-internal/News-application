import React from 'react'
import './newsitem.css'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <>
            <div>
                <div className="my-3">
                    <div className="card">
                        <div className='news-item'> 
                            <span className="badge rounded-pill bg-danger"> {source} </span>
                        </div>
                        <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." style={{height:"27vh"}}/>
                        <div className="card-body">
                            <h5 className="card-title">{title}  </h5>
                            <p className="card-text">{!description.length ? "lorem":description.slice(0,100)}</p>
                            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            
            </>
        )
}
export default NewsItem
