import { Poster, FilmTitle, CardFilm } from './FilmCard'
import PropTypes from 'prop-types'
const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';


export const FilmCard = ({ title, poster_path }) => {
    return (
      <CardFilm>
          {poster_path ? <Poster src={`${imgBaseUrl}${poster_path}`} />:<Poster src='https://www.jakartaplayers.org/uploads/1/2/5/5/12551960/2297419_orig.jpg' /> }
        <FilmTitle>{title}</FilmTitle>
      </CardFilm>
  )
}

FilmCard.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
}
  
export default FilmCard
