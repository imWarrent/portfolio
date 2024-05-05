import { Flex, Image, Text } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
export default function FirstPage() {
  const [clicked, setClicked] = useState(false);

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
      <Flex
        direction="row"
        style={{
          height: "100vh",
        }}
      >
        <Flex direction="column" justify="center" p={50} w="100%">
          <Text
            mb={15}
            style={{
              fontWeight: "bold",
              color: "#2C2C2C",
              fontSize: "30px",
              lineHeight: "1",
            }}
          >
            DEV PORTFOLIO
          </Text>
          <hr
            style={{
              width: "80px",
              borderWidth: "3px",
              borderColor: "#2C2C2C",
              background: "#2C2C2C",
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              color: "#2C2C2C",
              fontSize: "80px",
              lineHeight: "1",
            }}
          >
            I&#39;M WARRENT
          </Text>
          <Text
            style={{
              fontWeight: "normal",
              color: "#2C2C2C",
              fontSize: "80px",
              lineHeight: "1",
            }}
          >
            PADOLINA.
          </Text>
          <Text
            mt={25}
            style={{
              fontWeight: "normal",
              color: "#2C2C2C",
              fontSize: "25px",
              lineHeight: "1",
            }}
          >
            As an avid learner and enthusiast of programming languages, I&#39;ve
            crafted this space to showcase my dedication and hard work. Explore
            my journey through the ever-changing landscape of technology as I
            continuously strive to expand my skills and embrace new challenges.
          </Text>
          <Link href={"mailto:imwarrentpadolina@gmail.com"}>
            <Flex
              justify="center"
              align="center"
              mt={25}
              style={{
                border: "2px solid black",
                borderRadius: "0px 30px 0px 30px",
                background: "#ffffff",
                width: "180px",
                cursor: "pointer",
              }}
            >
              <Text
                py={10}
                style={{
                  fontWeight: "normal",
                  lineHeight: 1,
                  color: "#2C2C2C",
                  fontSize: "25px",
                }}
              >
                Contact Me
              </Text>
            </Flex>
          </Link>
        </Flex>
        <Flex direction="column" justify="center" align="center" w="100%" visibleFrom="sm">
          {clicked ? (
            <Image
              src="/gif/heart.gif"
              alt="shiba"
              style={{
                width: "25%",
                transform: "scaleX(-1)",
                marginLeft: 100,
              }}
            />
          ) : undefined}
          <Image
            src="/gif/shiba.gif"
            alt="shiba"
            style={{ width: "60%", transform: "scaleX(-1)", cursor: "grab" }}
            onClick={() => setClicked(true)}
            onMouseLeave={() => setClicked(false)}
          />
          <Text mt={30} style={{ fontSize: "20px" }}>
            ( pat the shiba dog )
          </Text>
        </Flex>
      </Flex>
      <Flex
        align="center"
        px={20}
        style={{ background: "#2C2C2C", width: "100%", height: "5vh" }}
      ></Flex>
    </Flex>
  );
}
