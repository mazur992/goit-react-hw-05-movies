import ReactPaginate from 'react-paginate';
import AppContext from '../AppContext/AppContext';
import { useContext } from 'react';

export default function Paginate({ totalPages, changePage }) {
  const { globalPage } = useContext(AppContext);
  const handlePageClick = event => {
    changePage(event.selected);
  };

  return (
    <>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        initialPage={globalPage - 1}
        forcePage={globalPage - 1}
        renderOnZeroPageCount={null}
      />
    </>
  );
}
