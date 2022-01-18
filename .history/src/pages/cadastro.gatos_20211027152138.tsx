import { Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
export const Cadastro = () => {
	const [nome, setNome] = useState("");
	const [idade, setIdade] = useState("");
	const [sexo, setSexo] = useState("");

	return (
		<Flex mt={5}>
			<Button mr={3} w="full" colorScheme="green" onClick={() => { salvar() }}>Adcionar</Button>
			<Input valule={nome} onChange={(e) => { setNome(e.target.value) }} variant="filled" placeholder="Nome" />
			<Input valule={idade} onChange={(e) => { setIdade(e.target.value) }} ml={4} variant="filled" placeholder="Idade" />
			<Input valule={sexo} onChange={(e) => { setSexo(e.target.value) }} ml={4} variant="filled" placeholder="Sexo" />
		</Flex>
	);
}