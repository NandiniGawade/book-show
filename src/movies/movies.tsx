import { useQuery } from "react-query";
import { useHistory } from "react-router";
import { MovieType } from "../App";
import { makeServer } from "../mirage/movies-api";
import { Wrapper } from "./movies.styles";
import Grid from '@material-ui/core/Grid';
import { Box, createStyles, makeStyles, Typography } from "@material-ui/core";
import MovieImage from "../Movie-Image/Movie-Image";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: 'black',
      color: '#FFFFFF',
      padding: theme.spacing(2.5, 3, 2),
    },
    title: {
      fontSize: 25,
      paddingLeft: theme.spacing(1.25),
    },
  })
);

const Movies = () => {
    makeServer();
    const history = useHistory();
    const classes = useStyles();
    const { data, error } = useQuery<MovieType[], any>('movies', () =>
      fetch('/api/movies').then((x) => x.json())
    );
  
    const handleOpenMovieDetail = (clickedItem: MovieType) => {
      history.push({
        pathname: '/movie-details',
        state: clickedItem
      })
    };
  
    if (error) return <div>Something went wrong ...</div>;
  
    return (
      <Wrapper>
        <Box component="header" className={classes.root} display="flex" flexDirection="row" alignItems="center">
            <Typography className={classes.title}>
                Pop Movies
            </Typography>
        </Box>
        <Grid container>
          {data?.map(item => (
            <Grid item key={item.id} xs={12} sm={4}>
              <MovieImage item={item} handleOpenMovieDetail={handleOpenMovieDetail}/>
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    );
  };
export default Movies;