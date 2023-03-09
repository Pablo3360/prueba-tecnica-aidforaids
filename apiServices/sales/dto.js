// eslint-disable-next-line
const single = (resource, authUser) => ({
  id: resource.id,
  userId: resource.userId,
  bookId: resource.bookId,
  createdAt: resource.createdAt,
});

const multiple = (resources, authUser) => resources.map((resource) => single(resource, authUser));

module.exports = {
  single,
  multiple,
};
