import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Router";
// import { darkModePreference } from "./scripts";

function App() {
  // darkModePreference();

  return <RouterProvider router={router} />;
}

export default App;
