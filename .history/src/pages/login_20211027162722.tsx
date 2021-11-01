import { Center, FormLabel, Heading, Input, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import { Lista } from "../components/lista.gatos";
export const Login = () => {
	return (
		<Center>
			<VStack w="full">
				<VStack w="50%">
					<Heading my={4}>Bem vindo ao login</Heading>

				</VStack>
			</VStack>
		</Center>
	);
}