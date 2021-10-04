import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import MovieDetails from "./Movie-Details";
import {createMemoryHistory} from 'history'
import { Router } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';


describe("<Movie-Details />", () => {
    const item = { 
        id: 1, 
        name: 'Inception', 
        year: 2010,
        description: 'Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobbs criminal history as payment for performing an inception on his sick competitors son.',
        length: 120,
        image: 'https://image.tmdb.org/t/p/w440_and_h660_face/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg' 
      }
    const history = createMemoryHistory();
    history.push({
        pathname: '/movie-details',
        state: item
    });
    const container  = render(
        <Router history={history}>
            <MovieDetails />
        </Router>
                
    )
    test("Render MovieDetails", async () => {
      const linkElement = screen.getByText(/Movie Details/i);
      expect(linkElement).toBeInTheDocument();
    });

    test("It should have movie name", async () => {
        render(
            <Router history={history}>
                <MovieDetails />
            </Router>        
        )
        const element = screen.getByTestId('item-name');
        expect(element.innerHTML).toBe('Inception');
    });

    test("It should have Add to Fovorite button", async () => {
        render(
            <Router history={history}>
                <MovieDetails />
            </Router>        
        )
        const element = screen.getByLabelText('Add to Fovorite');
        expect(element.innerHTML).toBeInTheDocument;
    });
});