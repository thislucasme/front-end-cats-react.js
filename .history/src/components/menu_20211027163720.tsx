import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
export const Menu = () => {

	function openLink(url: string) {
		window.open(url, '_self')
	}
	return (
		<>
			<Flex p={4} bg={"#291744"} w={"full"}>
				<Button onClick={() => { openLink('/buscar') }} mr={4} colorScheme="teal" variant="link">
					Busca
				</Button>
				<Button onClick={() => { openLink('/cadastro') }} mr={4} colorScheme="teal" variant="link">
					Adcionar
				</Button>
				<Spacer />
				<Button variant="link" mr={6} onClick={() => { openLink('/cadastro/user') }} colorScheme="facebook">Cadastre-se</Button>
				<Button onClick={() => { openLink('/login') }} colorScheme="facebook">Login</Button>
			</Flex>
		</>
	);
}