import { Box, Loader as MantineLoader } from "@mantine/core";
import React from "react";

const Loader: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F6F6F6 !important",
        border: "1px solid #EAEAEA",
        borderRadius: "5px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "25px"
      }}
    >
      <MantineLoader color="#C2C6EC" />
    </Box>
  );
};

export default Loader;
