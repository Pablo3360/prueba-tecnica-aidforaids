// eslint-disable-next-line
const single = (resource, authUser) => ({
  id: resource.id,
  name: resource.name,
  email: resource.email,
  token: resource.token ? resource.token : null,
  imageUrl: resource.perfilImageUrl ? resource.perfilImageUrl : null,
  direccion: resource.direccion,
});

const multiple = (resources, authUser) => resources.map((resource) => single(resource, authUser));

module.exports = {
  single,
  multiple,
};
