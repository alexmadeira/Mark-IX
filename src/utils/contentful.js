export const combine = data => {
  return data.items.map(({ sys, fields }) => {
    Object.keys(fields).map(field => {
      if (
        typeof fields[field] === 'object' &&
        fields[field].sys.linkType === 'Asset'
      ) {
        const assetFields = data.includes.Asset.filter(
          assetItem => assetItem.sys.id === fields[field].sys.id
        )[0].fields;

        fields[field] = { ...assetFields };
        return { fields };
      }
      if (
        typeof fields[field] === 'object' &&
        fields[field].sys.linkType === 'Entry'
      ) {
        const entryFields = data.includes.Entry.filter(
          entryItem => entryItem.sys.id === fields[field].sys.id
        )[0].fields;

        fields[field] = { ...entryFields };
        return { fields };
      }

      return fields[field];
    });

    return { id: sys.id, ...fields };
  });
};

export const combineAsset = data => {
  return data.items.map(({ sys, fields }) => {
    Object.keys(fields).map(field => {
      if (
        typeof fields[field] === 'object' &&
        fields[field].sys.linkType === 'Asset'
      ) {
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
export const combineEntry = data => {
  return data.items.map(({ sys, fields }) => {
    Object.keys(fields).map(field => {
      if (
        typeof fields[field] === 'object' &&
        fields[field].sys.linkType === 'Entry'
      ) {
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
