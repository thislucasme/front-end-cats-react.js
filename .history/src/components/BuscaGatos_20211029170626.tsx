import { Center, Flex, Heading, Input, Spacer, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { mutate } from "swr";
import { Lista } from "./lista.gatos";
import { Menu } from "./menu";
import { useGato } from "../hooks/useGatos";
import { useUserGato } from "../hooks/useUserGato";

export const Busca = () => {

	const [campoBusca, setCampoBusca] = useState("");

	const { userCat } = useUserGato();

	function openLink(url: string) {
		window.open(url, '_self')
	}

	if (userCat?.data === null) {
		openLink('/login')
	}


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
					<Lista gatos={cats} onDelete={apagarGato} error={isError} />
				</VStack>
			</VStack>
		</Center>
	);
}