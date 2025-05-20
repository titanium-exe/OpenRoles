import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import Jobs from "./components/Jobs"
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/Companies";
import CreateCompany from "./components/admin/CreateCompany";
import CompanyProfile from "./components/admin/CompanyProfile";
import AdminJobs from "./components/admin/AdminJobs";
import PostJobs from "./components/admin/PostJobs";


const appRouter = createBrowserRouter([

  // client side paths 
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path:"/jobs",
    element:<Jobs />
  },
  {
    path:"/description/:id",
    element:<JobDescription />

  },
  {
    path:"/browse",
    element:<Browse />
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  
  // admin side paths here 
  {
    path:"admin/companies",
    element:<Companies/>
  }, 
  
  {
    path:"admin/companies/create",
    element:<CreateCompany/>
  },

  {
    path:"admin/companies/:id",
    element:<CompanyProfile/>
  },

  // 
  
  {
    path:"admin/jobs/",
    element:<AdminJobs/>
  },

  {
    path:"admin/jobs/post/",
    element:<PostJobs />
  },



]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
      <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fff",
            color: "#333",
            border: "1px solid #ccc",
          },
        }}
      />
    </>
  );
}

export default App;
