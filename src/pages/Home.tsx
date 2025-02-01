import { useQuery } from '@tanstack/react-query';
import { getMovies, IGetMoviesResult } from 'apis/movie';
import Loading from 'components/Loading';
import styled from 'styled-components';
import { makeImagePath } from 'utils/movie';

const Wrapper = styled.div`
  background-color: #000000;
`;

const Banner = styled.div<{ $bgPhotoPath: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.$bgPhotoPath});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

const Home = () => {
  const { data, isLoading } = useQuery<IGetMoviesResult>({
    queryKey: ['getMovies'],
    queryFn: getMovies,
  });

  return (
    <Wrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Banner
            $bgPhotoPath={makeImagePath(data?.results[0].backdrop_path || '')}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
