import { useRoutes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { routesConfig } from "./routesConfig";

function App() {
  const elements = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: routesConfig.map((config) => ({
        path: config.path,
        element: config.component,
      })),
    },
  ]);

  return elements;
}

export default App;
