import { createServer} from 'miragejs';

export function makeServer() {
  return createServer({
    routes() {
  
      this.get('/api/movies', () => {
        return [
            { 
              id: 1, 
              name: 'Inception', 
              year: 2010,
              description: 'Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobbs criminal history as payment for performing an inception on his sick competitors son.',
              length: 120,
              image: 'https://image.tmdb.org/t/p/w440_and_h660_face/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg' 
            },
            { 
              id: 2, 
              name: 'Interstellar', 
              year: 2014,
              length: 130,
              description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
              image:'https://image.tmdb.org/t/p/w440_and_h660_face/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg' },
            { 
              id: 3,
              name: 'Joker',
              year: 2017,
              length: 160,
              description: 'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like hes part of the world around him.',
              image: 'https://image.tmdb.org/t/p/w440_and_h660_face/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg ' },
            { 
              id: 4, 
              name: 'Godzilla vs. Kong', 
              year: 2010,
              length: 100,
              description: 'King Kong is transported out of his containment zone after Godzilla resurfaces and creates mayhem. Humans need his help to reach Hollow Earth and find a way to subdue the king of the monsters.', 
              image: 'https://images.indianexpress.com/2021/02/140216953_440426353988968_2284943744990035479_n-01.jpg?w=630' 
            },
            { 
              id: 5, 
              name: 'Raya and the Last Dragon', 
              year: 2010,
              length: 125,
              description: 'Raya, a warrior, sets out to track down Sisu, a dragon, who transferred all her powers into a magical gem which is now scattered all over the kingdom of Kumandra, dividing its people.', 
              image: 'https://images.indianexpress.com/2021/02/EsqjSwFU0AAe_56-05.jpg?w=630' 
            },
            { id: 6, 
              name: 'Tom and Jerry', 
              year: 2010,
              length: 129,
              description: 'A legendary rivalry reemerges when Jerry moves into New York Citys finest hotel on the eve of the wedding of the century, forcing the desperate event planner to hire Tom to get rid of him. As mayhem ensues, the escalating cat-and-mouse battle soon threatens to destroy her career, the wedding, and possibly the hotel itself.', 
              image: 'https://images.indianexpress.com/2021/02/137633165_480460009608369_1886099442465601473_n-02.jpg?w=630' 
            }
        ]
      });
    }
  });
};  