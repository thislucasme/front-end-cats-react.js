import { Button, Flex, Input, Container } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Lista } from "../components/lista.gatos";
import useSWR from "swr";
export const Cadastro = () => {
	const [nome, setNome] = useState("");
	const [idade, setIdade] = useState("");
	const [sexo, setSexo] = useState("");


	const apiRequest = (url: string) => axios.get(url).then(response => response.data);

	//get all data
	const { data, error, mutate } = useSWR('http://localhost:3000/cats', apiRequest);

	const salvar = () => {

		const dadosTemp = {
			nome: nome,
			idade: Number(idade),
			sexo: sexo
		}

		axios.post('http://localhost:3000/cats/cat', dadosTemp)
			.then(result => {
				console.log("salvo");
				mutate();

			}).catch(error => {
				console.log("erro ao salvar")
			});
	}
	function onDeleteGato(id: number) {
		axios.delete('http://localhost:3000/cats/' + id)
			.then(response => {
				mutate();
			})
	}

	return (
		<>
		</>
	);
}