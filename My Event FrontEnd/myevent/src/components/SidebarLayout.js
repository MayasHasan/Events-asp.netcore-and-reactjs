import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Box } from "@chakra-ui/react";

const SidebarLayout = () => {
  return (
    <>
      <Box
        w={"240px"}
        display={{ base: "none", sm: "none", md: "none", lg: "block" }}
      >
        <Sidebar />
      </Box>
      <Box flex={1}>
        <Outlet />
      </Box>
    </>
  );
};

export default SidebarLayout;
