import { ResponseObject } from "../types";
import { githubImageLoader } from "./githubImageLoader";

export const githubInfoLoader = async () => {
  try {
    const response = await fetch("https://api.github.com/users/vaibhavc2");

    const res: ResponseObject = await response.json();
    const followers = res?.followers;
    const avatarBlob = await githubImageLoader(res?.avatar_url);

    const resObj = { followers, avatarBlob };

    return resObj;
  } catch (error) {
    return null;
  }
};
