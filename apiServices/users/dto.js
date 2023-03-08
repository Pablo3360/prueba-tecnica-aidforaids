// eslint-disable-next-line
const single = (resource, authUser) => ({
  id: resource.id,
  name: resource.name,
  email: resource.email,
  token: resource.token ? resource.token : null,
});

const multiple = (resources, authUser) => resources.map((resource) => single(resource, authUser));

module.exports = {
  single,
  multiple,
};
