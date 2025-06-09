import MovieCard from "../components/MovieCard/MovieCard"

function Home(){

    const movies = [
        {id:1 , title: 'John Wick', release_date:'2020'},
        {id:1 , title: 'Terminator', release_date:'1993'},
        {id:1 , title: 'The Matrix', release_date:'1995'}
    ]

    const handleSearch = () =>{

    }

    return(
        <div className="home">
          <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search For Movies..." className="search-input"/>
            </form> 
            <button type="submit" className="search-button">Search</button> 
        <div className="movies-grid">
            {
            movies.map(movie=><MovieCard movie={movie} key={movie.id}></MovieCard>)
            }
        </div>  
        </div>
    )
}

export default Home