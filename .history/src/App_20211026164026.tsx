import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Flex,
  Button,
  Spacer,
  Input,
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import axios from "axios";
import { Cat } from "./cat.interface";
export const App = () => {
  const [gatos, setGatos ] = useState<Cat[]>();

  useEffect(() => {
    axios.get<Cat[]>('http://localhost:3000/cats')
      .then(response => {
        setGatos(response.data)
        console.log(gatos);
        }).catch(error => {
          console.log("Ocorreu um erro: " + error);
        });

  }, [])

  return (
     <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Container borderRadius={3} w={"80%"} h={"80vh"}>
            <Heading p={5}>Cadastro de gatos</Heading>
            <Flex>
              <Button colorScheme="blue">Buscar</Button>
              <Spacer />
              <Input ml={4} variant="filled" placeholder="Digite aqui o nome de um gato" />
            </Flex>
            <Flex mt={5}>
              <Button mr={3} w="full" colorScheme="green">Adcionar</Button>
              <Input variant="filled" placeholder="Nome" />
              <Input ml={4} variant="filled" placeholder="Idade" />
              <Input ml={4} variant="filled" placeholder="Sexo" />
            </Flex>

            <Table mt={5} variant="simple">
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Idade</Th>
                  <Th>Sexo</Th>
                </Tr>
              </Thead>
              <Tbody>
                 {gatos?.map((res) => (
                      <Tr>
                     <Td>{ res.nome}</Td>
                      <Td>{ res.idade}</Td>
                     <Td> {res.sexo}</Td>
                      </Tr>
                 ))}
                
              </Tbody>
               
            </Table>
          </Container>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
  );
}
