import * as React from "react"
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
  Heading
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Container borderRadius={ 3 }  w={ "80%" } h={ "80vh" }>
          <Heading p={ 5 }>Cadastro de gatos</Heading>
          <Flex>
            <Button colorScheme="blue">Buscar</Button>
            <Spacer />
            <Input   ml={ 4 } variant="filled" placeholder="Digite aqui o nome de um gato" />
            </Flex>
            <Flex mt={5}>
               <Button mr={3} w="full" colorScheme="green">Adcionar</Button>
            <Input   variant="filled" placeholder="Nome" />
            <Input   ml={ 4 } variant="filled" placeholder="Idade" />
            <Input   ml={ 4 } variant="filled" placeholder="Sexo" />
            </Flex>

            <Divider/>
        </Container>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
