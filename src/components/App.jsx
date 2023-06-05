import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import { Nav, StyledLink, AppStyle } from './App.styled';
import AppContext from './AppContext/AppContext';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  const [globalPage, setGlobalPage] = useState(1);
  const resetContext = () => {};
  function handleClick() {
    resetContext();
  }
  return (
    <AppContext.Provider value={{ globalPage, setGlobalPage }}>
      <AppStyle>
        <header>
          <Nav>
            <StyledLink onClick={handleClick} to="/" end>
              Home
            </StyledLink>
            <StyledLink onClick={handleClick} to="/movies">
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
      </AppStyle>
    </AppContext.Provider>
  );
};
