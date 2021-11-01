import { Center, FormLabel, Heading, Input, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import { Lista } from "../components/lista.gatos";
export const Login = () => {
	return (
		<Center>
			<VStack w="full">
				<VStack w="50%">
					<Heading my={4}>Bem vindo ao login</Heading>
					<Input placeholder="email" />
					<Input placeholder="email" />
				</VStack>
			</VStack>
		</Center>
	);
}