import { Button, Flex, Input, Container, Heading, VStack, Center } from "@chakra-ui/react";
import { api } from "../lib/api";
import React, { useState } from "react";
import { Lista } from "../components/lista.gatos";
import useSWR from "swr";
import { Menu } from "../components/menu";
import { useUserGato } from '../hooks/useUserGato'
export const Cadastro = () => {
	const [nome, setNome] = useState("");
	const [idade, setIdade] = useState("");
	const [sexo, setSexo] = useState("");


	const apiRequest = (url: string) => api.get(url).then(response => response.data);

	//get all data
	const { data, error, mutate } = useSWR('/cats', apiRequest);

	const salvar = () => {

		const dadosTemp = {
			nome: nome,
			idade: Number(idade),
			sexo: sexo
		}

		api.post('/cats/cat', dadosTemp)
			.then(result => {
				console.log("salvo");
				mutate();

			}).catch(error => {
				console.log("erro ao salvar")
			});
	}
	function onDeleteGato(id: number) {
		api.delete('/cats/' + id)
			.then(response => {
				mutate();
			})
	}

	return (
		<Center>
			<VStack w="full">
				<Menu />
				<VStack w="50%">
					<Heading my={10}>Cadastro</Heading>
					<Flex w="full" mt={5}>
						<Button mr={3} w="full" colorScheme="green" onClick={() => { salvar() }}>Adcionar</Button>
						<Input valule={nome} onChange={(e) => { setNome(e.target.value) }} variant="filled" placeholder="Nome" />
						<Input valule={idade} onChange={(e) => { setIdade(e.target.value) }} ml={4} variant="filled" placeholder="Idade" />
						<Input valule={sexo} onChange={(e) => { setSexo(e.target.value) }} ml={4} variant="filled" placeholder="Sexo" />
					</Flex>

					<Lista gatos={data} onDelete={onDeleteGato} error={error} />
				</VStack>
			</VStack>
		</Center>
	);
}