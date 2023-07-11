import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import {  Link } from 'react-router-dom';

import { FiEdit } from "react-icons/fi";
const DataTable = (props) => {
 
  return (

    <TableContainer width="100%" >
      <Table style={{ borderSpacing: "10px", textAlignLast: "start" }}>
        <Thead>
          <Tr>
            {props.column.map((columnItem, index) => {
              return <Th key={index}>{columnItem.heading}</Th>;
            })}
             {props.showEditButton ? 
              <Th></Th> : <></>}
            
          </Tr>
        </Thead>
        <Tbody>
          {props.data.map((item, index) => (
            <Tr key={index}>
              {props.column.map((columnItem, index) => {
                return <Td key={index}>{item[`${columnItem.value}`]}</Td>;
              })}
              {props.showEditButton ? 
                <Td>
                  <Link to = {`/event/${item.eventID}`}>
                  <Button >
                  <FiEdit />
                  </Button>
                  </Link>
              </Td> : <></>}
            
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
