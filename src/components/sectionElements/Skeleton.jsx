import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import ImagemTeste from "../../assets/imgs/skeleton/imagemTesteSkeleton.webp";

export default function SkeletonColor() {
  return (
    <Box
      sx={{
        bgcolor: "#121212",
        p: 8,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Define a altura da tela
      }}
    >
      {/* Substitui o Skeleton por uma imagem de loading */}
      <img
        src={ImagemTeste}
        alt="Carregando..."
        width="full"
        height="auto"
      />
    </Box>
  );
}
