import { useState, useEffect, Suspense } from 'react'
import { TitleFilm, BigPoster, BoxPoster, Overview, Link } from './MovieDetailsPage.styled'
import { useParams, useNavigate, Outlet, useLocation } from 'react-router-dom' 
// import { Button } from '@mui/material';
import { findFilmsInfo } from '../views/fetchAPI';
// import { linkActiv } from '../';
const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

const MovieDetailsPage = () => {
  const [filmInfo, setFilmInfo] = useState({})
  const { movieId } = useParams()
  let navig = useNavigate()
  let location = useLocation()

  useEffect(() => {
    findFilmsInfo(movieId).then((r)=>{
    setFilmInfo(r)})
  }, [movieId])

  return (
    <>
      <button onClick={() => {
          navig(location?.state?.from ?? '/');
        }} variant='contained' sx={{mb: '10px'}}>Back</button>
      <TitleFilm>{filmInfo.original_title}</TitleFilm>
      <BoxPoster>
        {filmInfo.poster_path ? <BigPoster src={imgBaseUrl + filmInfo.poster_path} alt="" /> : <BigPoster src='https://www.jakartaplayers.org/uploads/1/2/5/5/12551960/2297419_orig.jpg' alt="" />}
        <div>
          <Overview><h3>Overview: </h3>{filmInfo.overview}</Overview>
          <Overview><h3>Release date: </h3>{filmInfo.release_date}</Overview>
          <Overview><h3>Vote average: </h3>{filmInfo.vote_average}</Overview>
        </div>
      </BoxPoster>
      <Link to='cast' state={{ from: location?.state?.from ?? '/' }}>cast</Link>
      <Link to='reviews' state={{ from: location?.state?.from ?? '/' }}>reviews</Link>
      <Suspense fallback={<h1>Wite one more...</h1>}>
        <Outlet context={[filmInfo]} />
      </Suspense>
      </>
  )
}

export default MovieDetailsPage