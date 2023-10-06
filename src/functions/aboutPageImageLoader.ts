export const aboutPageImageLoader = async () => {
  try {
    const response = await fetch(
      "https://uploads-ssl.webflow.com/5e9cb6d11b847f674c55d722/621eabd5607ec58e017f6b6f_Rocket-p-2000.jpeg"
      //, { mode: "no-cors" }
    );
    return response.blob();
  } catch (error) {
    return null;
  }
};
