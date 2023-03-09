// eslint-disable-next-line
const single = (resource, authUser) => ({
  id: resource.id,
  isbn: resource.name,
  title: resource.title,
  autor: resource.autor,
  stock: resource.stock,
});

const multiple = (resources, authUser) => resources.map((resource) => single(resource, authUser));

module.exports = {
  single,
  multiple,
};
