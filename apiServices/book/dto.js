// eslint-disable-next-line
const single = (resource, authUser) => ({
  id: resource.id,
  isbn: resource.name,
  title: resource.title,
  autor: resource.autor,
  stock: resource.stock,
});

const multiple = (resources, authUser) => resources.map((resource) => single(resource, authUser));

const afterRegisterCompras = (resources, authUser) => 
  resources.map((resource) => 
    ({
      id: resource.id,
      bookId: resource.bookId,
      quantity: resource.quantity,
      distributorId: resource.distributorId,
      createdAt: resource.createdAt,
    })
  );

module.exports = {
  single,
  multiple,
  afterRegisterCompras
};
