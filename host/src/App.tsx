import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./components/root";
import Contact from "./components/contact";
import Dashboard from "./components/dashboard";
import Home from "./components/home";
import NotFound from "./components/not-found";
// import ReportDesigner from "./components/report-designer";
import ReportDesigner from "remoteApp/ReportDesigner";

const contactLoader = async ({ request }: { request: Request }) => {
  const response = await fetch("/api/contact-info.json", {
    signal: request.signal,
  });
  if (!response.ok) throw new Error("Failed to fetch contact data");
  return response.json();
};

// Dashboard loader that checks authentication
export const dashboardLoader = async () => {
  const response = await fetch("/api/check-auth.json");
  const authData = await response.json();

  if (!authData.isAuthenticated) {
    return redirect("/login");
  }

  const dashboardResponse = await fetch("/api/dashboard/stats.json");

  if (dashboardResponse.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }
  if (!dashboardResponse.ok) throw new Error("Failed to fetch dashboard data");

  return dashboardResponse.json();
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} index />
      <Route path="/contact" element={<Contact />} loader={contactLoader} />
      <Route path={"/dashboard"} element={<Dashboard />} />
      <Route path="/reports/*" element={<ReportDesigner />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
