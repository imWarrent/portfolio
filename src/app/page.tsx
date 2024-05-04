"use client";

import { Flex, Text } from "@mantine/core";
import FirstPage from "./pages/first";
import SecondPage from "./pages/second";
import ThirdPage from "./pages/third";
import FourthPage from "./pages/fourth";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{
        height: "auto",
        background: "#FEF7ED",
      }}
    >
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Flex
        direction="column"
        align="center"
        justify="center"
        px={20}
        style={{ background: "#2C2C2C", width: "100%", height: "30vh" }}
      >
        <Text
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 1,
          }}
        >
          Oh, you reach this section?
          <br /> I guess you&#39;re interested about me, Let&#39;s connect!
        </Text>
        <Flex direction="row" gap={10} justify="center" align="center" mt={15}>
          <Link href="mailto:imwarrentpadolina@gmail.com" target="_blank">
            <IconMail color="white" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/warrent-p-6a3745243/"
            target="_blank"
          >
            <IconBrandLinkedin color="white" onClick={() => {}} />
          </Link>
          <Link href="https://github.com/imWarrent" target="_blank">
            <IconBrandGithub color="white" />
          </Link>
          <Link
            href="#"
            onClick={() => {
              navigator.clipboard.writeText("(+63) 956 927 2696");
              alert("Phone number copied on your clipboard!");
            }}
          >
            <IconPhone color="white" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
