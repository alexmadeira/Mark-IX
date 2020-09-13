const Contentful = data => {
  let config = {
    getContent: () => {},
    getFields: sys => {
      const { id, linkType } = sys;
      const findContent = config.getContent[linkType];
      return findContent(id);
    },
  };

  const combine = (items = data.items) => {
    const { getFields } = config;
    return items.map(({ sys, fields }) => {
      Object.keys(fields).forEach(field => {
        const temp = {};
        if (typeof fields[field] === 'object') {
          if (typeof fields[field].sys === 'undefined') {
            const include = fields[field].map(item => {
              if (item.sys) {
                return getFields(item.sys);
              }
              return item;
            });
            temp[field] = [...include];
          } else {
            const include = getFields(fields[field].sys);
            temp[field] = { ...include };
          }
          fields = { ...fields, ...temp };
        }
        return { ...temp };
      });

      return { sys, fields: { ...fields, id: sys.id } };
    });
  };

  const GetContent = includes => {
    const Asset = id => {
      return includes.Asset.find(item => item.sys.id === id);
    };
    const Entry = id => {
      const project = includes.Entry.filter(item => item.sys.id === id);
      return combine(project)[0];
    };
    return { Asset, Entry };
  };

  const init = () => {
    config = { ...config, getContent: GetContent(data.includes) };
  };

  init();
  return { combine };
};

export default Contentful;
