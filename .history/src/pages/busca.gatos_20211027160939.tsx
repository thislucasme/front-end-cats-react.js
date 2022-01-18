import { Center, Flex, Heading, Input, Spacer, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { mutate } from "swr";
import { Lista } from "../components/lista.gatos";
import { Menu } from "../components/menu";
import { useGato } from "../hooks/gato.hooks";
export const Busca = () => {

	const [campoBusca, setCampoBusca] = useState("");

	//hook personalizado 
	const { cats, isError, mutate } = useGato(campoBusca);

	function apagarGato(id: number) {
		axios.delete('http://localhost:3000/cats/' + id)
			.then(response => {
				mutate();
			})
		console.log("Apagar gato com id: " + id);
	}

	return (
		<Center>
			<VStack w="full">
				<Menu />
				<VStack w="50%">
					<Heading my={4}>Busca</Heading>
					<Flex w="full">
						<Spacer />
						<Input ml={4} value={campoBusca} onChange={(e) => { setCampoBusca(e.target.value) }} variant="filled" placeholder="Digite aqui o nome de um gato" />
					</Flex>
				</VStack>
			</VStack>
			<Lista gatos={cats} onDelete={apagarGato} error={isError} />
		</Center>
	);
}