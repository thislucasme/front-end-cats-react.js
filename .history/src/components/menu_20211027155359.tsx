import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
export const Menu = () => {
	return (
		<>
			<Flex bg={"#291744"} w={"full"}>
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