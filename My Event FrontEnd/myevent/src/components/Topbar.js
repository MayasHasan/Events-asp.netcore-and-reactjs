import React from "react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiBell,
} from "react-icons/fi";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Icon,
  useColorMode,
  Text
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { logout, reset } from "../api/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];
const Topbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <>
      <Box bg={useColorModeValue("#171923", "gray.900")} px={4} pos="fixed" w="full" zIndex="9999">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {user?<Box display={{ base: "initial", md: "initial", lg:'none' }}>
            <Menu>
              <MenuButton
                color="white"
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList ml="-17px" mt="3px">
                {LinkItems.map((link) => (
                  <MenuItem key={link.name}>
                    <Icon
                      mr="4"
                      fontSize="16"
                      _groupHover={{
                        color: "white",
                      }}
                      as={link.icon}
                    />
                    {link.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>:<></>}
          <HStack spacing={8} alignItems={"center"}>
            <Box color="white">Logo</Box>
          </HStack>
         {user? <Flex alignItems={"center"}>
            <IconButton
              size="lg"
              aria-label="open menu"
              color="white"
              variant="link"
              icon={<FiBell />}
            />
            <IconButton
              size="lg"
              onClick={toggleColorMode}
              color="white"
              variant="link"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            />
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider />
                <MenuItem onClick={onLogout}>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex> : <Text color="white">Welcome In Our Events</Text>}
        </Flex>
      </Box>
    </>
  );
};
export default Topbar;
