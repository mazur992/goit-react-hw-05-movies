import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Nav, StyledLink } from './App.styled';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  const location = useLocation();
  return (
    <div>
      <header>
        <Nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies" state={{ from: location }}>
            Movies
          </StyledLink>
        </Nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
