import axios from "axios";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

export const useGato = () => {
	const apiRequest = (url: string) => axios.get(url).then(response => response.data);

	const { data, error } = useSWR('http://localhost:3000/cats', apiRequest);
}