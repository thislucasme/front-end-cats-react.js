import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
export const Menu = () => {
	return (
		<>
			<Flex p={4} h={"50"} bg={"#291744"} w={"full"}>
				<Button colorScheme="teal" variant="link">
					Busca
				</Button>
				<Spacer />
				<Button colorScheme="teal" variant="link">
					Adcionar
				</Button>
			</Flex>
		</>
	);
}