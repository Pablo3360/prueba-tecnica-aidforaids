// eslint-disable-next-line
const single = (resource, authUser) => ({
  id: resource.id,
  name: resource.name,
  email: resource.email,
});

const multiple = (resources, authUser) => resources.map((resource) => single(resource, authUser));

module.exports = {
  single,
  multiple,
};
