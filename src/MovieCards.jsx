const placeholderImg = "https://via.placeholder.com/300x450";

const MovieCard = ({ movie }) => {
  return (
    <div className='movie'>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : placeholderImg}
          alt=''
          loading='lazy'
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
