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
