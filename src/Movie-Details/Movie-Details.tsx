// Styles
import { Wrapper } from './Movie-Details.styles';

import { useHistory, useLocation } from 'react-router';

//Components
import { Box, createStyles, Divider, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { VideocamOffOutlined, ArrowBack } from '@material-ui/icons';

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

const MovieDetails: React.FC<{}> = () => {
  const location = useLocation();
  const classes = useStyles();
  const item = (location.state as any);
  const history = useHistory();

  const redirectMainPage = () => {
    history.push('/')
  };
  
  return (
    <Wrapper>
      <Box component="header" className={classes.root} display="flex" flexDirection="row" alignItems="center">
        <ArrowBack onClick={() => redirectMainPage()} className="cursor-pointer"/><Typography className={classes.title}>
          Movie Details
        </Typography>
      </Box>
      <div className="container">
      <Box className="title-name" display="flex" flexDirection="row" alignItems="center">
          <Typography className="title" data-testid="item-name">
            {item.name}
          </Typography>
      </Box>
        <div className="d-flex">
          <div>
            <img src={item.image} alt={item.name}></img>
          </div>
          <div className="div-margin">
            <Typography className="span-margin-top">{item.year}</Typography>
            <Typography className="length-display span-margin-top">{item.length} <Typography className="div-margin-left">mins</Typography></Typography>
            <Typography className="span-margin-top">8.1/10</Typography>
            <Box className="title-name span-margin-top" display="flex" flexDirection="row" alignItems="center">
              <Typography className="add-title">
                  Add to Fovorite
              </Typography>
            </Box>
          </div>
        </div>
        <Typography>
          {item.description}
        </Typography>
        <Typography className="span-margin-top">TRAILERS</Typography>
        <Divider />
        <Box className="box-trailer" display="flex" flexDirection="row" alignItems="center">
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <VideocamOffOutlined/>
            </ListItemIcon>
            <ListItemText primary="Play trailer 1" />
          </ListItem>
        </Box>
        <Box className="box-trailer" display="flex" flexDirection="row" alignItems="center">
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <VideocamOffOutlined/>
            </ListItemIcon>
            <ListItemText primary="Play trailer 2" />
          </ListItem>
        </Box>
      </div>
    </Wrapper>
  );
};

export default MovieDetails;
