import { Center, useToast, Text, Heading, Input, Button, VStack, HStack, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuth } from "../context/auth";
export const Login = () => {

	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');

	const toast = useToast();

	const context = useAuth();

	async function handleLogin() {
		const result = await context.Login(email, senha);
		if (result === undefined) {
			toast({
				title: "Login.",
				description: "Suas credenciais estão incorretas.",
				status: "error",
				duration: 2000,
				isClosable: true,
			})
			return;
		}
		openLink('/cadastro')
	}

	function openLink(url: string) {
		window.open(url, '_self')
	}
	return (
		<Center>
			<VStack w="full">

				<VStack p={20} w={{ sm: "90%", md: "60%", lg: "40%" }}>
					<Heading my={4}>Bem vindo ao login</Heading>
					<Input value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
					<Input value={senha} placeholder="Senha" onChange={(e) => setSenha(e.target.value)} type={"password"} />
					<Button colorScheme="facebook" onClick={() => { handleLogin() }} w="full">Efetuar Login</Button>
					<HStack><Text>Não possui uma conta? </Text><Link onClick={() => { openLink('/cadastro/user') }}>criar</Link></HStack>
				</VStack>
			</VStack>
		</Center>
	);
}