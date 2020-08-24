export const combine = data => {
  return data.items.map(({ sys, fields }) => {
    Object.keys(fields).map(field => {
      if (typeof fields[field] === 'object') {
        const assetFields = data.includes.Asset.filter(
          assetItem => assetItem.sys.id === fields[field].sys.id
        )[0].fields;
        fields[field] = { ...assetFields };

        return { fields };
      }

      return fields[field];
    });
    return { id: sys.id, ...fields };
  });
};
