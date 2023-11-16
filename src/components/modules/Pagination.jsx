function Pagination({ currentPage, setCurrentPage }) {
  const clickStyle =
    "border border-blue-700 px-3 py-1 mx-1 rounded-md bg-blue-700";

  const nextPage = () => {
    if (currentPage >= 10) return;
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const pervousPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage((currentPage) => currentPage - 1);
  };

  return (
    <div className="text-center my-5">
      <button className={clickStyle} onClick={pervousPage}>
        Prevous
      </button>
      <button className={currentPage === 1 ? 'border border-blue-700 px-3 py-1 mx-1 rounded-md bg-blue-700' : 'border border-blue-700 px-3 py-1 mx-1 rounded-md'}>1</button>
      <button className={currentPage === 2 ? 'border border-blue-700 px-3 py-1 mx-1 rounded-md bg-blue-700' : 'border border-blue-700 px-3 py-1 mx-1 rounded-md'}>2</button>
      {currentPage <8 && currentPage >2 && (
        <>
          <span>...</span>
          <button className={clickStyle}>{currentPage}</button>
        </>
      )}
      <span>...</span>
      <button className={currentPage === 9 ? 'border border-blue-700 px-3 py-1 mx-1 rounded-md bg-blue-700' : 'border border-blue-700 px-3 py-1 mx-1 rounded-md'}>9</button>
      <button className={currentPage === 10 ? 'border border-blue-700 px-3 py-1 mx-1 rounded-md bg-blue-700' : 'border border-blue-700 px-3 py-1 mx-1 rounded-md'}>10</button>
      <button className={clickStyle} onClick={nextPage}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
