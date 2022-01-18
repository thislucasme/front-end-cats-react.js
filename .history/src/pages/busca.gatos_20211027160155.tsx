import { Center, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Menu } from "../components/menu";
export const Busca = () => {
	return (
		<Center>
			<VStack w="full">
				<Menu />
				<VStack w="50%">
					<Heading>Hello</Heading>
				</VStack>
			</VStack>
		</Center>
	);
}