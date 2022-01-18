import { useRecoilState } from "recoil";
import { textState } from '../atom/text';
import { VStack, Heading, Input } from '@chakra-ui/react';

function TextInput() {
	const [text, setText] = useRecoilState(textState);

	function onChange(event: string) {
		setText(event);
	}
	return (
		<VStack>
		<Heading>{ text } < /Heading>
		< Input value = { text } placeholder = "digite aqui" onChange = {(e) => { onChange(e.target.value) }
} />
	< /VStack>
	);
}