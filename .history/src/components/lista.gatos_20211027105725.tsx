import React from "react";
import { Button, Heading, Table, Tbody, Td, Th, Thead, Tr, Image } from "@chakra-ui/react";
import { Cat } from "../cat.interface";
export const Lista = (gatos: any) => {
	console.log(gatos);
	return (
		<Table mt={5} variant="simple">
              <Thead>
                  <Tr>
                  <Th>ID</Th>
                  <Th>Nome</Th>
                  <Th>Idade</Th>
                    <Th>Sexo</Th>
                    <Th>Ação</Th>
                </Tr>
                </Thead>
                  <Tbody>
                    {
                      gatos.gatos?.map((res: Cat) => (
                        <Tr color={"gray"} fontSize={"md"}>
                          <Td>{res.idGato}</Td>
                          <Td>{res.nome}</Td>
                          <Td>{res.idade}</Td>
                          <Td>{res.sexo}</Td>
                          <Td><Button ml={4} variant={"ghost"} onClick={() => {  }}><Image src="https://i.ibb.co/89zmrZs/delete.png" /></Button></Td>
                        </Tr>
                      )).reverse()
                    }
                
                  </Tbody>
                
                </Table>
	);
}