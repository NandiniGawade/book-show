import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Movies from './movies/movies';
import MovieDetails from './Movie-Details/Movie-Details';

// Styles
import { Wrapper } from './App.styles';


// Types
export type MovieType = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Route exact path="/" component={Movies} />
        <Route path="/movie-details" component={MovieDetails} />
      </Router>
    </Wrapper>
  );
};

export default App;
