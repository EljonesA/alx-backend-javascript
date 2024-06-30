import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    const [photoResult, userResult] = await Promise.allSettled([
      uploadPhoto(),
      createUser()
    ]);

    const photo = photoResult.status === 'fulfilled' ? photoResult.value : null;
    const user = userResult.status === 'fulfilled' ? userResult.value : null;

    return { photo, user };
  } catch (error) {
    console.error('Error during async operations:', error);
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;
