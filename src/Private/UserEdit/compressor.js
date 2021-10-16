import Resizer from "react-image-file-resizer";

export const compressImage = async (file) => {
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "JPEG",
      75,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });
};
