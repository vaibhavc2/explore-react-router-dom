export const githubImageLoader = async (avatar_url: string) => {
  try {
    const response = await fetch(avatar_url);
    return response.blob();
  } catch (error) {
    return null;
  }
};
