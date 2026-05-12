// This module defines the buildQueryOptions function, which takes a query object (typically from an Express.js request) and extracts pagination, sorting, and search parameters. It ensures that the page and limit values are within reasonable bounds, calculates the skip value for pagination, and provides default values for sorting and searching. This function is useful for standardizing query options across API endpoints that support pagination, sorting, and searching.

export const buildQueryOptions = (query = {}) => {
    
  const page = Math.max(Number(query.page) || 1, 1);
  const limit = Math.min(Math.max(Number(query.limit) || 10, 1), 100);
  const skip = (page - 1) * limit;
  const sort = query.sort || "-createdAt";
  const search = query.search?.trim() || "";

  return {
    page,
    limit,
    skip,
    sort,
    search,
  };
};
