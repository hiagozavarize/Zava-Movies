import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onClick: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onClick,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center">
      {pages.map((page) => (
        <PaginationButton
          key={page}
          page={page}
          currentPage={currentPage}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

interface PaginationButtonProps {
  page: number;
  currentPage: number;
  onClick: (page: number) => void;
}

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  page,
  currentPage,
  onClick,
}) => {
  const className =
    currentPage === page
      ? "bg-BgContainerColor border-white border-[0.5px] text-white"
      : "text-white";

  return (
    <button
      key={page}
      onClick={() => onClick(page)}
      className={`w-[30px] h-[30px] flex justify-center items-center rounded-full ${className}`}
    >
      {page}
    </button>
  );
};
