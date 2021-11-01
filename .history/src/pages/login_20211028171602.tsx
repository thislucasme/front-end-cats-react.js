import { Center, Text, Heading, Input, Button, VStack, HStack, Link } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import AuthContext from "../context/auth";
export const Login = () => {

	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');

	const { Login } = useContext(AuthContext);

	function handleLogin() {
		Login(email, senha);
	}

	function openLink(url: string) {
		window.open(url, '_self')
	}
	return (
		<Center>
			<VStack w="full">

				<VStack w="30%">
					<Heading my={4}>Bem vindo ao login</Heading>
					<Input value={email} placeholder="Email" />
					<Input value={senha} placeholder="Senha" type={"password"} />
					<Button colorScheme="facebook" onClick={() => { handleLogin() }} w="full">Efetuar Login</Button>
					<HStack><Text>Não possui uma conta? </Text><Link onClick={() => { openLink('/cadastro/user') }}>criar</Link></HStack>
				</VStack>
			</VStack>
		</Center>
	);
}