import { Navigation } from './Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import NotFoundView from './views/NotFoundView';
import { lazy } from 'react';
// import MoviesPage from './MoviesPage/MoviesPage';
// import HomeView from './views/HomeView';
// import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage'

const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage'));
const HomeView = lazy(() => import('./views/HomeView'));
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomeView />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route exact path="movies/:movieId/*" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  </>
);