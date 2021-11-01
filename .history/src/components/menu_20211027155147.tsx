import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
export const Menu = () => {
	return (
		<>
			<Flex w={"full"}>
				<Box p="4" bg="red.400">
					Box 1
				</Box>
				<Spacer />
				<Box p="4" bg="green.400">
					Box 2
				</Box>
			</Flex>
		</>
	);
}