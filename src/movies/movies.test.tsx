import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Movies from './movies';
import '@testing-library/jest-dom/extend-expect';


describe("<Movies />", () => {
    const queryClient = new QueryClient();
    test("Renders Movies list", async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Movies />
            </QueryClientProvider>
        )
      const linkElement = screen.getByText(/Pop Movies/i);
      expect(linkElement).toBeInTheDocument();
    });
});