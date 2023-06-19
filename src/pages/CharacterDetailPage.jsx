import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL_GET_CHARACTER_DETAIL_INFO } from "../constants/apiData";
import logoMarvel from "../../public/Images/logo.png";
import { Container, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";

const CharacterDetailPage = () => {
  const { id } = useParams();
  const [characterInfo, setCharactersInfo] = useState(null);

  useEffect(() => {
    fetch(URL_GET_CHARACTER_DETAIL_INFO(id))
      .then((response) => response.json())
      .then((data) => {
        setCharactersInfo(data.data.results[0]);
      });
  }, [id]);

  if (characterInfo === null) {
    return (
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Loading data...
        </Typography>
      </Container>
    );
  }
  return (
    <>
      <div>
        <button onClick={() => window.history.back()}>
          <img src={logoMarvel} alt="Logo and HomeButton" />
        </button>
      </div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="500"
                image={`${characterInfo?.thumbnail?.path}.${characterInfo?.thumbnail?.extension}`}
                alt={characterInfo?.name}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {characterInfo?.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {characterInfo?.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CharacterDetailPage;
