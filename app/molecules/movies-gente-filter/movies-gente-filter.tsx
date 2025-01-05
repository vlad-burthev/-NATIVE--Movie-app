import {Fragment, useId, type FC} from 'react';
import {FlatList, View} from 'react-native';
import {useGetGenresQuery} from '../../api/genre-api';
import CustomText from '../../atoms/custom-text';
import GenreItem from '../../atoms/genre-item';

interface MoviesGenteFilterProps {}

const MoviesGenteFilter: FC<MoviesGenteFilterProps> = () => {
  const {data, isLoading} = useGetGenresQuery('');

  const uniqueKey = useId();

  if (isLoading) return null;

  return (
    <View style={{flex: 1}}>
      <CustomText
        style={{
          paddingBottom: 10,
        }}>
        Select Genre
      </CustomText>
      <FlatList
        data={data?.results}
        renderItem={({item}) => {
          return (
            <Fragment>
              {item !== null && (
                <GenreItem style={{marginHorizontal: 10, marginVertical: 10}}>
                  {item}
                </GenreItem>
              )}
            </Fragment>
          );
        }}
        numColumns={4}
        key={2}
      />
    </View>
  );
};

export default MoviesGenteFilter;
