import "./App.css";
import Welcome from "./components/Welcome";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import { Flex,  Box} from "@chakra-ui/react";
import Events from "./pages/Events";
import Topbar from "./components/Topbar";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";
import AddCategory from "./pages/AddCategory";
import Category from "./pages/Category";
import PrivateRoute from "./components/PrivateRoute";
import SidebarLayout from "./components/SidebarLayout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Box>
    
      <Box h={16} w="100%">
      
        <Topbar />
      </Box>
      <Routes>
        <Route path="login" element={<LogIn />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
      <Flex w="100%">
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/events" element={<PrivateRoute />}>
              <Route path="/events" element={<Events />} />
            </Route>
            <Route path="/addevent" element={<PrivateRoute />}>
              <Route path="/addevent" element={<AddEvent />} />
            </Route>
            <Route path="/event/:eventID" element={<PrivateRoute />}>
              <Route path="/event/:eventID" element={<EditEvent />} />
            </Route>
            <Route path="/category" element={<PrivateRoute />}>
              <Route path="/category" element={<Category />} />
            </Route>
            <Route path="/addcategory" element={<PrivateRoute />}>
              <Route path="/addcategory" element={<AddCategory />} />
            </Route>
          </Route>
        </Routes>
      </Flex>
      <ToastContainer/>
    </Box>
  );
}

export default App;
