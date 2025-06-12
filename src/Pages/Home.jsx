import MovieCard from "../components/MovieCard/MovieCard"

function Home(){

    const movies = [
        {id:1 , title: 'John Wick', release_date:'2020'},
        {id:2 , title: 'Terminator', release_date:'1993'},
        {id:3 , title: 'The Matrix', release_date:'1995'}
    ]

    const handleSearch = () =>{

    }

    return(
        <div className="home">
            <h1>This is movie project</h1>
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