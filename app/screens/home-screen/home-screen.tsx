import {useCallback, useEffect, useState, type FC} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {colors} from '../../styles/styles-variables';
import CustomText from '../../atoms/CustomText';
import {useGetAllMoviesQuery} from '../../api/movies-api';

const HomeScreen: FC = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<any>([]);
  const {data, isLoading, isFetching, isError} = useGetAllMoviesQuery(
    {page, limit: 20},
    {skip: page < 1},
  );

  console.log(data);

  useEffect(() => {
    if (data?.items) {
      setMovies((prevMovies: any) => {
        const movieIds = prevMovies.map((movie: any) => movie.id);
        const newMovies = data.items.filter(
          (movie: any) => !movieIds.includes(movie.id),
        );
        return [...prevMovies, ...newMovies];
      });
    }
  }, [data]);

  const loadMoreItems = useCallback(() => {
    if (!isFetching && data?.nextPage) {
      setPage(prevPage => prevPage + 1);
    }
  }, [isFetching, data?.nextPage]);

  const renderFooter = () => {
    if (isLoading || isFetching) {
      return <ActivityIndicator size="large" />;
    }
    return null;
  };

  if (isError) {
    return <CustomText>Error loading items.</CustomText>;
  }

  return (
    <View
      style={{
        backgroundColor: colors.primary_bg,
        flex: 1,
        paddingHorizontal: 24,
      }}>
      <FlatList
        data={movies}
        renderItem={({item}) => <CustomText>{item.id}</CustomText>}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default HomeScreen;
