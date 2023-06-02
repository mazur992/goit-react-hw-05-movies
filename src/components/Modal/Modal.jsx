export default function Modal() {
  return (
    <div className="modal__Backdrop">
      <div className="modal__window">
        <iframe
          class="modal__iframe"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
          src="https://www.youtube.com/embed/"
          width="1200"
          height="650"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}
