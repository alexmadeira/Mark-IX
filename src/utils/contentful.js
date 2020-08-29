function GetContent(includes) {
  const include = (type, id) => {
    return includes[type].find(item => item.sys.id === id);
  };
  return { include };
}

export const combine = data => {
  const getContent = GetContent(data.includes);

  return data.items.map(({ sys, fields }) => {
    Object.keys(fields).forEach(field => {
      const temp = {};
      if (typeof fields[field] === 'object') {
        const { id, linkType } = fields[field].sys;
        const findContent = getContent.include;
        const include = findContent(linkType, id);
        temp[field] = { ...include };
        fields = { ...fields, ...temp };
      }
      return { ...temp };
    });

    return { sys, fields: { ...fields, id: sys.id } };
  });
};
