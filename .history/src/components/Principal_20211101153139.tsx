import React, { useState, useEffect } from "react";
import {
	Box,
	VStack,
	Grid,
	Flex,
	Button,
	Spacer,
	Input,
	Heading,
	Container,
	Text
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import axios from "axios";
import { Cat } from "../cat.interface";
import { Lista } from "../components/lista.gatos";
import useSWR from "swr";
import { useGato } from "../hooks/useGatos";
import { RecoilRoot } from 'recoil';

export const Principal: React.FC = () => {
	const [gatos, setGatos] = useState<Cat[]>();
	const [nome, setNome] = useState("");
	const [idade, setIdade] = useState("");
	const [sexo, setSexo] = useState("");
	const [campoBusca, setCampoBusca] = useState("");


	const apiRequest = (url: string) => axios.get(url).then(response => response.data);

	//get all data
	const { data, error, mutate } = useSWR('http://localhost:3000/cats', apiRequest);


	//hook personalizado 
	const { cats, isError } = useGato(campoBusca);

	useEffect(() => {
		console.log(cats);
	}, [cats])

	function getAllTeste() {



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
				mutate();

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
	function apagarGato(id: number) {
		axios.delete('http://localhost:3000/cats/' + id)
			.then(response => {
				mutate();
			})
		console.log("Apagar gato com id: " + id);
	}



	return (
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
							<Heading>Hello</Heading>
						</Flex>


						<Lista gatos={data} onDelete={apagarGato} error={error} />
						<Lista gatos={cats} onDelete={apagarGato} error={isError} />


					</Container>
				</VStack>
			</Grid>
		</Box>
	);
}
