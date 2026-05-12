export const getPaginationMeta = ({
    page = 1,
    limit = 10, 
    totalItem = 0,
}) => {

    const currentPage = Number(page);
    const currentLimit = Number(limit);

    const totalPages = Math.ceil(totalItem/currentLimit);

    return {
        page:currentPage,
        limit:currentLimit,
        totalItem,
        totalPages,
        hasNextPage: currentPage<totalPages,
        hasPrevPage: currentPage > 1,
    };
};