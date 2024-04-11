import React, { ChangeEvent, useState } from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [selectedPage, setSelectedPage] = useState<number>(currentPage);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const page = parseInt(event.target.value, 10);
    setSelectedPage(page);
    onPageChange(page);
  };

  return (
    <div className="mt-8 join flex justify-center">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <input
            key={page}
            className="join-item btn btn-sm md:btn-md btn-square"
            type="radio"
            name="options"
            aria-label={page.toString()}
            value={page}
            checked={selectedPage === page}
            onChange={handleChange}
          />
        )
      )}
    </div>
  );
};
