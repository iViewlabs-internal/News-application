import React,{useState} from 'react'
import ReactPaginate from 'react-paginate';
import './pagination.css';

const Pagination = (props) => {
    const [articles,setArticles]=useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [loading, setLoading] = useState(true)
    const [page,setPage] = useState(2)
    
    const handlePageChange=(event)=>{
        console.log(event);
        setCurrentPage(event.selected)
    }
    const updateNews = async () => {
        props.setProgress(10);
        // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${currentPage}&pageSize=${props.pageSize}`;
        setLoading(true);
        setCurrentPage(currentPage + 1);
        // let data = await fetch(url);
        props.setProgress(30);
        // let parsedData = await data.json();
        props.setProgress(70);
        // setArticles(parsedData.articles);
        // setTotalResults(parsedData.totalResults)
        setLoading(false);
        props.setProgress(100);
      };

  return (
    <>
        {articles &&
        <div> <ReactPaginate
                    nextLabel=">>"
                    previousLabel="<<"
                    breakLabel="..."
                    forcePage={currentPage}
                    pageCount={page}
                    renderOnZeroPageCount={null}
                    onPageChange={handlePageChange}
                    className="pagination"
                    activeClassName='active-page'
                    previousClassName='previous-page'
                    nextClassName='next-page'
                />
                <br/>
                <br/>
         </div> 
        }        
    </>
  )
}

export default Pagination