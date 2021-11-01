import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Flex,
  Button,
  Spacer,
  Input,
  Heading,
  Container,
  Text
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import axios from "axios";
import { Cat } from "./cat.interface";
import { Lista } from "./components/lista.gatos";
import useSWR from "swr";
import { useGato } from "./hooks/gato.hooks";
import { Principal } from "./pages/principal";

export const App: React.FC = () => {
  return (
    <Principal />
  );
}
