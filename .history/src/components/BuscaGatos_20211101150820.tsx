import { Center, Flex, useToast, Heading, Input, Spacer, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { mutate } from "swr";
import { Lista } from "./lista.gatos";
import { Menu } from "./menu";
import { useGato } from "../hooks/useGatos";
import { useUserGato } from "../hooks/useUserGato";

export const Busca = () => {

	const [campoBusca, setCampoBusca] = useState("");

	const toast = useToast();

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
				toast({
					title: "Item removido",
					description: "Gato com id:" + id + " foi removido.",
					status: "success",
					duration: 2000,
					isClosable: true,
				})
			})
		console.log("Apagar gato com id: " + id);
	}

	return (
		<Center>
			<VStack w="full">
				<Menu />
				<VStack w={{ sm: "90%", md="50%", lg="50%" }}>
					<Heading my={4}>Busca</Heading>
					<Flex w="full">
						<Spacer />
						<Input ml={4} value={campoBusca} onChange={(e) => { setCampoBusca(e.target.value) }} variant="filled" placeholder="Digite aqui o nome de um gato" />
					</Flex>

				</VStack>
				<Lista gatos={cats} onDelete={apagarGato} error={isError} />
			</VStack>
		</Center>
	);
}