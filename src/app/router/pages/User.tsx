import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return <div className="m-10 text-center">User: {userid}</div>;
};

export default User;
