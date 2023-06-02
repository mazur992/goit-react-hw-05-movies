import { ModalStyle } from '../App.styled';
export default function Modal({ trailers, hideModal }) {
  let randomFilm = Math.floor(Math.random() * trailers.length);
  const clickBackdrop = event => {
    if (event.target === event.currentTarget) {
      hideModal();
    }
  };
  return (
    <ModalStyle onClick={clickBackdrop}>
      <div className="modal__window">
        <iframe
          className="modal__iframe"
          allowFullScreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
          src={`https://www.youtube.com/embed/${trailers[randomFilm]}`}
          title="A youtube video on React"
          width="1200"
          height="550"
          frameBorder="0"
        ></iframe>
      </div>
    </ModalStyle>
  );
}
