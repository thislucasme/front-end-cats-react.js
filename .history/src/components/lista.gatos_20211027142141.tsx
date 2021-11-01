import React from "react";
import { Button, Table, Tbody, Td, Th, Thead, Tr, Image, Spinner, VStack, Text, AlertIcon, Alert } from "@chakra-ui/react";
import { Cat } from "../cat.interface";
import axios from "axios";
import { type } from "os";

type Props = {
	gatos: Array<any>,
	error: any,
	onDelete: (id: number) => void
}

export const Lista = (props: Props) => {

	function apagarGato(id: number) {
		axios.delete('http://localhost:3000/cats/' + id)
			.then(response => {

			})
		console.log("Apagar gato com id: " + id);
	}

	if (!dados.gatos) return (
		<VStack>
			<Spinner mt={5} />
			<Text>Carregando gatos...</Text>
		</VStack>
	);

	if (dados.error) {
		return (
			<Alert status="error">
				<AlertIcon />
				Ocorreu um erro
			</Alert>
		);
	}

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
					dados.gatos?.map((res: Cat) => (
						<Tr color={"gray"} fontSize={"md"}>
							<Td>{res.idGato}</Td>
							<Td>{res.nome}</Td>
							<Td>{res.idade}</Td>
							<Td>{res.sexo}</Td>
							<Td><Button ml={4} variant={"ghost"} onClick={() => { apagarGato(res.idGato) }}><Image src="https://i.ibb.co/89zmrZs/delete.png" /></Button></Td>
						</Tr>
					)).reverse()
				}

			</Tbody>

		</Table>
	);
}