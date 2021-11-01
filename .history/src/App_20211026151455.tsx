import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Flex,
  Divider,
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
import api from "./api";
import axios from "axios";
export const App = () => {

  useEffect(() => {
    api.get('/jjd')
      .then(() => {
        
      })
  })

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
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
               
            </Table>
          </Container>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
  );
}
