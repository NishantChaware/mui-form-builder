import React from "react";
import map from "lodash/map";
import switchItems from "../FormInputs/switchItems";
import { Button, Grid, Box, Container, Typography } from "@mui/material";

const FinalFormPreview = ({ hideFinalPreview, data }) => (
  <Container sx={{  px: 3, mt: 3, py: 1 }} maxWidth="lg">
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4">Form Preview</Typography>
      <Button onClick={hideFinalPreview}>Close</Button>
    </Box>
    <hr />

    <Grid container spacing={3} sx={{ mt: 1 }}>
      {map(data, (item) => (
        <Grid item md={6} xs={12} key={item.id}>
          {switchItems(item)}
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default FinalFormPreview;
