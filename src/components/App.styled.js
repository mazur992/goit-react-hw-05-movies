import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppStyle = styled.div`
  padding-right: 24px;
  padding-left: 24px;
`;
export const HomeStyle = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  & h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  & li {
    margin-bottom: 5px;
    font-weight: 700;
  }
`;
export const MoviesStyle = styled.div`
  & li {
    margin-bottom: 5px;
    font-weight: 700;
  }
`;
export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 5px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 15px;
  background-color: #3f51b5;
`;
export const StyledLink = styled(NavLink)`
  color: black;
  font-weight: 700;
  font-size: 28px;

  &.active {
    color: tomato;
  }
`;
export const FormMovies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  margin-bottom: 10px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  & form {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
  }
  & button {
    display: inline-block;
    width: 90px;
    height: 48px;
    border: 0;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }
  & button:hover {
    opacity: 1;
  }
  & input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
  }

  & input::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const MovieDetailsStyle = styled.div`
  & .movieDetailsContainer {
    margin-top: 5px;
    display: flex;
    gap: 15px;
  }
  & h2 {
    margin-bottom: 5px;
  }
  & .movieScore {
    margin-bottom: 5px;
  }
  & h3 {
    margin-bottom: 5px;
  }
  & h4 {
    margin-bottom: 5px;
  }
  & .movieOverwiew {
    margin-bottom: 5px;
  }
  & .movieSubTitle {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  & .movieitem {
    margin-bottom: 10px;
    padding: 4px 10px;
    background-color: tomato;
    border-radius: 25px;
  }
  & .movieSubTitleList {
    display: flex;
    gap: 30px;
    justify-content: center;
    font-weight: 700;
  }
`;
export const CastStyle = styled.div`
  & ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
  & li {
    width: calc((100% - 180px) / 7);
  }
`;
export const ReviewsStyle = styled.div`
  & h5 {
    margin-bottom: 5px;
  }
  & p {
    margin-bottom: 10px;
  }
`;
