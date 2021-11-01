import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
export const Menu = () => {
	return (
		<>
			<Flex h={"50"} bg={"#291744"} w={"full"}>
				<Button colorScheme="teal" variant="link">
					Button
				</Button>
				<Spacer />
				<Button colorScheme="teal" variant="link">
					Button
				</Button>
			</Flex>
		</>
	);
}