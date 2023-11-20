import { useEffect } from "react";
const npPaginationStyle =
  "border border-blue-700 px-3 py-1 mx-1 rounded-md bg-blue-900";
const customClickStyle = "border border-blue-700 px-3 py-1 mx-1 rounded-md";

function CoinPagination({ currentPage, setCurrentPage }) {
  const nextPage = () => {
    if (currentPage >= 10) return;
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const pervousPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage((currentPage) => currentPage - 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-center my-5">
      <button
        className={
          currentPage === 1
            ? `${npPaginationStyle} opacity-30 cursor-not-allowed`
            : npPaginationStyle
        }
        onClick={pervousPage}>
        Prevous
      </button>
      <button
        className={
          currentPage === 1
            ? `${customClickStyle} bg-blue-900`
            : customClickStyle
        }
        onClick={() => setCurrentPage(1)}>
        1
      </button>
      <button
        className={
          currentPage === 2
            ? `${customClickStyle} bg-blue-900`
            : customClickStyle
        }
        onClick={() => setCurrentPage(2)}>
        2
      </button>
      {currentPage < 9 && currentPage > 2 && (
        <>
          <span>...</span>
          <button className={npPaginationStyle}>{currentPage}</button>
        </>
      )}
      <span>...</span>
      <button
        className={
          currentPage === 9
            ? `${customClickStyle} bg-blue-900`
            : customClickStyle
        }
        onClick={() => setCurrentPage(9)}>
        9
      </button>
      <button
        className={
          currentPage === 10
            ? `${customClickStyle} bg-blue-900`
            : customClickStyle
        }
        onClick={() => setCurrentPage(10)}>
        10
      </button>
      <button
        className={
          currentPage === 10
            ? `${npPaginationStyle} opacity-30 cursor-not-allowed`
            : npPaginationStyle
        }
        onClick={nextPage}>
        Next
      </button>
    </div>
  );
}

export default CoinPagination;
