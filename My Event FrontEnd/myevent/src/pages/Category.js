import React,{useEffect} from 'react';
import { Box, VStack ,Heading ,Text,Checkbox,Divider, Flex} from '@chakra-ui/react';
import DataTable from '../components/DataTable';
import { useSelector, useDispatch } from "react-redux";
import { getCategories ,reset } from '../api/categories/categorySlice';

const Category = () => {
  const { categories, isLoading, isSuccess, message ,isError} = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();


    const column = [
        { heading: "EVENT NAME" , value : "name" },
        { heading: "EVENT DATE" ,value : "date" },
        { heading: "ARTIST" ,value : "artist" },
        { heading: "PRICE" ,value : "price" },
      ];

const categoryEvents = categories.map((item)=>{
    return     <>   <Box pl={2}  >
    <Text fontSize='lg'   p="12px" color="gray">
    {item.name}
      </Text>
        <Divider   />
        </Box > 
        <Flex justifyContent="center">
            <Box w="80%">
            <DataTable column={column} data={item.events} showEditButton={false}/>
        </Box>
        </Flex>
        <Divider   />
        </>
    
})
      
  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

    return (
        <VStack align="stretch" width="100%">
            <Box>
              <Heading as="h3" size="lg" p="15px" color="teal">
               Event Category Overview
              </Heading>
            </Box>
           <Box pl={5}>
           <Checkbox size='md' >
           Include past event?
        </Checkbox>
            </Box> 
            <Box pl={2}  >
            <Text fontSize='xs'  p="12px" color="gray">
             CATRGORY NAME
              </Text>
                <Divider   />
                </Box> 
         {categoryEvents}
          </VStack>
        );
      };

export default Category;
