const Contentful = data => {
  let config = { getContent: () => {} };

  const combine = (items = data.items) => {
    const { getContent } = config;
    return items.map(({ sys, fields }) => {
      Object.keys(fields).forEach(field => {
        const temp = {};
        if (typeof fields[field] === 'object') {
          const { id, linkType } = fields[field].sys;
          const findContent = getContent[linkType];

          const include = findContent(id);

          temp[field] = { ...include };
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
    console.log(data)
    config = { ...config, getContent: GetContent(data.includes) };
  };

  init();
  return { combine };
};

export default Contentful;
