import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
export const Menu = () => {
	return (
		<>
			<Flex p={4} bg={"#291744"} w={"full"}>
				<Button colorScheme="teal" variant="link">
					Busca
				</Button>
				<Spacer />
				<Button colorScheme="teal" variant="solid">
					Adcionar
				</Button>
			</Flex>
		</>
	);
}