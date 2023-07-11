import React  from 'react';
import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,

} from 'react-icons/fi';
import {Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const LinkItems = [
  { name: 'Home', icon: FiHome , linkTo :"/"},
  { name: 'Event', icon: FiTrendingUp , linkTo :"/events"},
  { name: 'Category', icon: FiCompass , linkTo :"/category"},
  { name: 'Add category', icon: FiStar ,  linkTo :"/addcategory"},
  { name: 'Settings', icon: FiSettings ,  linkTo :"#"},
];

const Sidebar=({ children }) => 
{
  const {user} = useSelector((state)=>state.auth)

  return (
  user ? <Box  pos={"fixed"} >
<SidebarContent
  display={{ base: 'none',sm:'none', md: 'none' ,lg:"block" }}
/>   
  {children} 
</Box> : <></> 
  
    );
  }

  const SidebarContent = ({ onClose, ...rest }) => {
    return (
      <Box 
        bg={useColorModeValue('gray.100', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={60}
        h="100vh"
        {...rest}>
          <Box pt="12px" >
        {LinkItems.map((link) => (
    
          <NavItem key={link.name} icon={link.icon} linkTo={link.linkTo}>
            {link.name}
          </NavItem>
          
        ))}
        </Box>
      </Box>
    );
  };
  
  const NavItem = ({ icon,linkTo, children, ...rest }) => {
    return (
     
      <Link to={linkTo} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex borderBottom='1px' borderColor='gray' 
          align="center"
          p="3"
          mx="2"  
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'gray.300',
            color: 'black',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'black',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    );
  };
export default Sidebar;