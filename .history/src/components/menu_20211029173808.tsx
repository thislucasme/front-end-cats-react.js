import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { useUserGato } from '../hooks/useUserGato';
export const Menu = () => {

	const useUser = useUserGato();
	function openLink(url: string) {
		window.open(url, '_self')
	}
	return (
		<>
			<Flex p={4} bg={"#291744"} w={"full"}>
				<Button onClick={() => { openLink('/buscar') }} mr={4} colorScheme="teal" variant="link">
					Busca
				</Button>
				<Button onClick={() => { openLink('/cadastro/gato') }} mr={4} colorScheme="teal" variant="link">
					Adcionar
				</Button>
				<Spacer />
				<Button onClick={() => { openLink('/login') }} colorScheme="red">Sair</Button>
			</Flex>
		</>
	);
}