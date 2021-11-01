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
  Heading
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import axios from "axios";
import { Cat } from "./cat.interface";
import { Lista } from "./components/lista.gatos";
import useSWR from "swr";

export const App: React.FC = () => {
  const [gatos, setGatos] = useState<Cat[]>();
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [campoBusca, setCampoBusca] = useState("");

  const apiRequest = (url: string) => axios.get(url).then(response => response.data);

  const { data, error } = useSWR('http://localhost:3000/cats', apiRequest);



  function getAllTeste() {
    console.log(data);
  }

  const salvar = () => {

    const dadosTemp = {
      nome: nome,
      idade: Number(idade),
      sexo: sexo
    }

    axios.post('http://localhost:3000/cats/cat', dadosTemp)
      .then(result => {
        console.log("salvo");
        //buscar();
      }).catch(error => {
        console.log("erro ao salvar")
      });
  }

  const buscarByNome = () => {
    axios.get('http://localhost:3000/cats/' + campoBusca)
      .then(response => {
        setGatos(response.data);
        setCampoBusca('');
      })
  }



  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Container borderRadius={3} w={"80%"} h={"80vh"}>
              <Heading p={5}>Cadastro de gatos</Heading>
              <Flex>
                <Button colorScheme="blue" onClick={() => { getAllTeste() }}>Buscar</Button>
                <Spacer />
                <Input ml={4} value={campoBusca} onChange={(e) => { setCampoBusca(e.target.value) }} variant="filled" placeholder="Digite aqui o nome de um gato" />
              </Flex>
              <Flex mt={5}>
                <Button mr={3} w="full" colorScheme="green" onClick={() => { salvar() }}>Adcionar</Button>
                <Input valule={nome} onChange={(e) => { setNome(e.target.value) }} variant="filled" placeholder="Nome" />
                <Input valule={idade} onChange={(e) => { setIdade(e.target.value) }} ml={4} variant="filled" placeholder="Idade" />
                <Input valule={sexo} onChange={(e) => { setSexo(e.target.value) }} ml={4} variant="filled" placeholder="Sexo" />
              </Flex>

              {
                data?.length > 0 ?
                  <Lista gatos={data} />
                  : <Heading>Nenhum gato foi encontrado no banco de dados</Heading>
              }
            </Container>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
