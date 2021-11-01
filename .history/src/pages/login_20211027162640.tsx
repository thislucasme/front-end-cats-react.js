import { Center, Flex, FormHelperText, FormLabel, Heading, Input, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import { Lista } from "../components/lista.gatos";
export const Login = () => {
	return (
		<Center>
			<VStack w="full">
				<VStack w="50%">
					<Heading my={4}>Bem vindo ao login</Heading>
					<FormLabel>Email address</FormLabel>
					<Input type="email" />
					<FormHelperText>We'll never share your email.</FormHelperText>
				</VStack>
			</VStack>
		</Center>
	);
}