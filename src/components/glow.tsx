"use client";

import { Box, BoxComponentProps } from "@mantine/core";

export default function RoundGlow(glowComponent: BoxComponentProps) {
  return (
    <Box
      style={{
        position: "absolute",
        zIndex: 0,
        right: "0px",
        background: "white",
        width: "0px",
        height: "0px",
        borderRadius: "50%",
        boxShadow: "0 0 80px 40px #fff, 0 0 180px 80px #8F43EE, 0 0 170px 110px #8F43EE"
      }}
    />
  );
}
