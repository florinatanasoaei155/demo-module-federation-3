import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/root";
import Home from "./components/home";
import ReportDesigner from "./components/report-designer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} index />
      <Route path="/reports/*" element={<ReportDesigner />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
