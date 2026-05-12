// This module defines the getPaginationMeta function, which calculates pagination metadata based on the provided page number, limit, and total number of items. It returns an object containing the current page, limit, total items, total pages, and boolean flags indicating whether there are next or previous pages available. This function is useful for implementing pagination in API responses.

export const getPaginationMeta = ({ page = 1, limit = 10, totalItems = 0 }) => {

  const currentPage = Math.max(Number(page) || 1, 1);
  const currentLimit = Math.max(Number(limit) || 10, 1);
  const totalPages = Math.ceil(totalItems / currentLimit);

  return {
    page: currentPage,
    limit: currentLimit,
    totalItems,
    totalPages,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
    
  };
};
