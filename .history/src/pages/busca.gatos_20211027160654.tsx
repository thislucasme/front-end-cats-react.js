import { Center, Flex, Heading, Input, Spacer, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Menu } from "../components/menu";
import { useGato } from "../hooks/gato.hooks";
export const Busca = () => {

	const [campoBusca, setCampoBusca] = useState("");

	//hook personalizado 
	const { cats, isError } = useGato(campoBusca);

	return (
		<Center>
			<VStack w="full">
				<Menu />
				<VStack w="50%">
					<Heading>Hello</Heading>
					<Flex>
						<Spacer />
						<Input ml={4} value={campoBusca} onChange={(e) => { setCampoBusca(e.target.value) }} variant="filled" placeholder="Digite aqui o nome de um gato" />
					</Flex>
				</VStack>
			</VStack>
		</Center>
	);
}