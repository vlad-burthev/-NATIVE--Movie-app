import {useCallback, useEffect, useState, type FC} from 'react';
import {ActivityIndicator, FlatList, Image, View} from 'react-native';
import {colors} from '../../styles/styles-variables';
import CustomText from '../../atoms/custom-text';
import {useGetAllMoviesQuery} from '../../api/movies-api';
import MoviesListItem from '../../organisms/movies-list-item/movies-list-item';
import MoviesFilter from '../../organisms/movies-filter/movies-filter';

const HomeScreen: FC = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<any>([]);

  const {data, isLoading, isFetching, isError} = useGetAllMoviesQuery(
    {page, limit: 20},
    {skip: page < 1},
  );

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
      }}>
      <MoviesFilter />

      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviesListItem
            width={170}
            height={260}
            source={{uri: item?.primaryImage?.url}}
            id={item.id}
            movie_title={item?.titleText?.text}
          />
        )}
        numColumns={2}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
        }}
        key={2}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        horizontal={false}
      />
    </View>
  );
};

export default HomeScreen;
