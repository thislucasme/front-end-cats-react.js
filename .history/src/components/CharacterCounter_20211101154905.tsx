import { Button, Flex, useToast, Input, Container, Heading, VStack, Center } from "@chakra-ui/react";
import { api } from "../lib/api";
import React, { useState } from "react";
import { Lista } from "../components/lista.gatos";
import useSWR from "swr";
import { Menu } from "../components/menu";
import { useUserGato } from '../hooks/useUserGato';
import { useRecoilState } from "recoil";
import { textState } from '../atom/text';

function TextInput() {
	const [text, setText] = useRecoilState(textState);

	function onChange(event: string) {
		setText(event);
	}
	return (
		<VStack>
			<Heading>{text} < /Heading>
				< Input value={text} placeholder="digite aqui" onChange={(e) => { onChange(e.target.value) }
				} />
				< /VStack>
				);
}