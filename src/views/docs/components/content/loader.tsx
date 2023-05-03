import React from "react";
import { Text, Box, Title } from "@mantine/core";
import { CodeIcon } from "@heroicons/react/solid";

interface TerminalHomeProps {}

const Loader: React.FC<TerminalHomeProps> = ({}) => {
  return (
    <Box mb={15} mx={15}>
      <Box
        sx={{
          height: "285px",
          borderRadius: "4px",
          backgroundColor: "#F5F5F5",
          padding: "44px 48px 60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          border: "1px solid #EBEBEB"
        }}
      >
        <CodeIcon color="#C4C4C4" height={32} />
        <Title
          sx={{
            fontSize: "18px",
            lineHeight: "22px",
            letterSpacing: "0.01em",
            color: "#111827",
            fontWeight: 500
          }}
          mt="md"
          mb="sm"
        >
          API Reference
        </Title>
        <Text
          sx={{
            fontSize: "15px",
            lineHeight: "155%",
            letterSpacing: "0.01em",
            color: "#A1A1AA",
            fontWeight: 400
          }}
        >
          Look-up endpoints or models.
        </Text>
      </Box>
    </Box>
  );
};

export default Loader;
