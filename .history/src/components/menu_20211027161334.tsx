import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
export const Menu = () => {

	function openLink(url: string) {
		document.open(url, '_self')
	}
	return (
		<>
			<Flex p={4} bg={"#291744"} w={"full"}>
				<Button onClick={() => { openLink('/buscar-gato') }} mr={4} colorScheme="teal" variant="link">
					Busca
				</Button>
				<Button mr={4} colorScheme="teal" variant="link">
					Adcionar
				</Button>
			</Flex>
		</>
	);
}