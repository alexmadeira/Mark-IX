/* eslint-disable array-callback-return */
function importAll(ImagList) {
  const images = {};
  ImagList.keys().map(image => {
    const imageName = image
      .replace('./', '')
      .split('.')[0]
      .toLowerCase();

    images[imageName] = ImagList(image);
  });

  return images;
}

const Images = importAll(require.context('.', false, /\.(png|jpe?g|svg)$/));

export default Images;
