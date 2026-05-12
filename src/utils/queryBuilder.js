export const buildQueryOptions = (query = {}) =>{

    const page = Math.max(Number(query.page) || 1,1);

    const limit = Math.max(Number(query.limit) || 10,1);

    const skip = (page-1)*limit;
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