import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Grid } from "@material-ui/core";
import PersonalData from "./PersonalData";

function Profile() {
  return (
    <Container>
      <div className="content-wrapper">
        <Header />
        <Grid container spacing={9}>
          <Grid item xs={6}>
            <PersonalData />
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </div>
      <Footer />
    </Container>
  );
}

export default Profile;
