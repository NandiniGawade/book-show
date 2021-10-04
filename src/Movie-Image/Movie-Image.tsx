// Types
import { MovieType } from '../App';
// Styles
import { Wrapper } from './Movie-Image.styles';

type Props = {
  item: MovieType;
  handleOpenMovieDetail: (clickedItem: MovieType) => void;
};

const MovieImage: React.FC<Props> = ({ item, handleOpenMovieDetail }) => (
  <Wrapper>
    <img src={item.image} alt={item.name} onClick={() => handleOpenMovieDetail(item)}/>
  </Wrapper>
);

export default MovieImage;
