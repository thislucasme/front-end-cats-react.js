import { useGato } from "./gato.hooks";
import { useState, useEffect } from "react";
export const useTest = () => {

	const { cats, isError } = useGato();

	return cats;

}