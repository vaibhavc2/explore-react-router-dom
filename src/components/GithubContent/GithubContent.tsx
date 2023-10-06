import { useRouteLoaderData } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";

const GithubContent = () => {
  const { followers, avatarBlob } = useRouteLoaderData("github") as {
    followers: number;
    avatarBlob: Blob;
  };
  const imgSrc = URL.createObjectURL(avatarBlob);

  return (
    <>
      <span className="my-1">Github Followers: {followers}</span>
      <img
        src={imgSrc}
        alt="GitHub Profile Picture"
        width={300}
        className="mx-auto mt-3 rounded-full"
      />
    </>
  );
};

export default GithubContent;
