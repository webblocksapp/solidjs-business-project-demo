export const paginateData = (data: Array<any>, pagination: { page: number; limit: number }) => {
  const index = (Number(pagination.page) || 1) - 1;
  const limit = Number(pagination.limit);
  const start = index * limit;
  const end = start + limit;
  return data.slice(start, end);
};
