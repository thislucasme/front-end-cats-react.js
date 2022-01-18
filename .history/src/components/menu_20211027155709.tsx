import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
export const Menu = () => {
	return (
		<>
			<Flex p={4} bg={"#291744"} w={"full"}>
				<Button pr={4} colorScheme="teal" variant="link">
					Busca
				</Button>
				<Button pr={4} colorScheme="teal" variant="link">
					Busca
				</Button>
			</Flex>
		</>
	);
}