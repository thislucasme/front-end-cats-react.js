import { Center, FormLabel, Heading, Input, Button, VStack } from "@chakra-ui/react";
import React from "react";
import { Menu } from "../components/menu";
import { Lista } from "../components/lista.gatos";
export const Cadastro = () => {
	return (
		<Center>
			<VStack w="full">
				<Menu />
				<VStack w="30%">
					<Heading my={4}>Cadastre-se</Heading>
					<Input placeholder="Email" />
					<Input placeholder="Senha" type={"password"} />
					<Button colorScheme="facebook" w="full">Cadastre-se</Button>
				</VStack>
			</VStack>
		</Center>
	);
}