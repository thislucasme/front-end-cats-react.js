import { Button, Flex, useToast, Input, Container, Heading, HStack, Center } from "@chakra-ui/react";
import { api } from "../lib/api";
import React, { useState } from "react";
import { Lista } from "./lista.gatos";
import useSWR from "swr";
import { Menu } from "./menu";
import { useUserGato } from '../hooks/useUserGato';
import { useRecoilState } from "recoil";
import { textState } from '../atom/text';

function TextInput() {
	const [text, setText] = useRecoilState(textState);

	function onChange(event: string) {
		setText(event);
	}
	return (
		<HStack>
			<Input value={text} onchange={(e) => { onChange(e.target.value) }} />
		</HStack>
	);
}
