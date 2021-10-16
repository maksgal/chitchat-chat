import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "./firebase";

const storage = getStorage(app);

export const getImageUrl = async (userId) => {
  const url = await getDownloadURL(ref(storage, userId));
  return url;
};

export const uploadImage = async (file, userId) => {
  const storageRef = ref(storage, userId);
  await uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded!");
  });

  console.log("StorageRef", storageRef);
  return storageRef;
};
