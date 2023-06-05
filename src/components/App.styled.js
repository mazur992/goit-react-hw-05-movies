import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppStyle = styled.div`
  padding-right: 24px;
  padding-left: 24px;
`;
export const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;

  padding-right: 10px;
  padding-left: 10px;
  & h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  & ul {
    margin-left: auto;
    margin-right: auto;
  }
  & .homeList {
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 30px;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }

  & .homeItem {
    padding-bottom: 10px;
    font-weight: 700;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
  & img {
    width: 100%;
    height: 622px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 20px;
  }
  & img:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
  & .containerPaginate {
  }
  & .homeMovieTitle {
    margin-left: 10px;
  }
`;

export const MoviesStyle = styled.div`
  & .searchBodyContainer {
    display: flex;
    flex-direction: column;
    height: 70vh;
  }
  & .searchList {
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: auto;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
  & .searchItem {
    margin-bottom: 5px;
    font-weight: 700;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
  & img {
    width: 100%;
    height: 622px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 20px;
  }
  & img:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
  & .pagination {
    margin-top: 15px;
    justify-content: center;
  }
  & .moviesTitle {
    margin-left: 10px;
    margin-bottom: 10px;
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
  & a {
    color: black;
    transition: color 250ms ease;
  }
  & a:hover {
    color: white;
  }
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
& .containerLockBack{
  margin-left: 15px;
}
  & .movieDetailsContainer {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
     @media screen and (min-width: 768px) {
      flex-direction: row; 
      margin-top: 5px;
      gap: 15px;
    }}
  }
  & h2 {
    margin-bottom: 5px;
  }
  & .movieScore {
    margin-bottom: 5px;
  }
  & .movieDetailsImg {
    width: 100%;
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

    border-radius: 25px;
    background-color: #ff3814;
    transition: background-color 250ms ease;
  }
  & .movieitem:hover {
    background-color: tomato;
  }
  & .movieSubTitleList {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  & .movieTrailerBtn {
      
    display: block;
    margin-top: 20px;
     margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    width: 160px;
    height: 40px;
    border: none;
    color: white;

    background-color: #ff3814;

    cursor: pointer;
    border-radius: 20px;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.33;
    text-align: center;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    transition: background-color 250ms ease;

    @media screen and (min-width: 768px) {
      margin-left: 0;
    }
  }
  & .movieTrailerBtn:hover {
    background-color: tomato;
  }
`;
export const CastStyle = styled.div`
  margin-top: 40px;
  & ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
  & li {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    & li {
      width: calc((100% - 120px) / 5);
    }
    & .movieDetailsImg {
      width: 280px;
    }
  }
  @media screen and (min-width: 1200px) {
    & li {
      width: calc((100% - 180px) / 7);
    }
  }
`;
export const ReviewsStyle = styled.div`
  margin-top: 40px;
  & h5 {
    margin-bottom: 5px;
  }
  & p {
    margin-bottom: 10px;
  }
`;
export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  & .modal__window {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }
  & .modal__iframe {
    width: 440px;
    height: 80vh;
    @media screen and (min-width: 768px) {
      width: 650px;
      height: 450px;
    }
    @media screen and (min-width: 1200px) {
      width: 1200px;
      height: 550px;
    }
  }
`;
