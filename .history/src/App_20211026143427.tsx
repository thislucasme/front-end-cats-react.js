import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
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
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Container borderRadius={ 3 } bg={ "white" } w={ "80%" } h={ "80vh" }>
          <Heading p={ 5 } color={ 'black' }>Cadastro de gatos</Heading>
          <Flex>
            <Button colorScheme="blue">Adcionar</Button>
            <Spacer />
            <Input ml={ 4 } variant="filled" placeholder="Digite aqui o nome de um gato" />
          </Flex>
        </Container>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
