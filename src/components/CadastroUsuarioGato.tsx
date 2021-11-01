import { Center, Text, Link, Heading, Input, Button, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import { Menu } from "../components/menu";
export const UserCadastro = () => {

	function openLink(url: string) {
		window.open(url, '_self')
	}
	return (
		<Center>
			<VStack w="full">
				<VStack w="30%">
					<Heading my={4}>Cadastro de Usuario</Heading>
					<Input placeholder="Email" />
					<Input placeholder="Senha" type={"password"} />
					<Button colorScheme="facebook" w="full">Cadastre-se</Button>
					<HStack><Text>Já possui uma conta? </Text><Link onClick={() => { openLink('/login') }}>faça login</Link></HStack>
				</VStack>
			</VStack>
		</Center>
	);
}