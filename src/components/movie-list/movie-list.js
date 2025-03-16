import "../movie-list/movie-list.css"
import MovieListItem from "../movie-list-item/movie-list-item"

const MovieList = ({ data }) => {
  console.log(data);

  return (
    <ul className="movie-list">
      {data.map(item => (
        <MovieListItem name={item.name} views={item.views} favourite={item.favourite} key={item.id}/>
      ))}
    </ul>
  )
}

export default MovieList  