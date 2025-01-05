import React, {useState, type FC} from 'react';
import {
  ActivityIndicator,
  Animated,
  View,
  TouchableOpacity,
} from 'react-native';
import {moviesListItemStyles as styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../navigation/types';

interface MoviesListItemProps {
  source: {uri: string};
  width: number;
  height: number;
  id: number;
  movie_title: string;
}

const MoviesListItem: FC<MoviesListItemProps> = ({
  source,
  width,
  id,
  height,
  movie_title,
  ...props
}) => {
  const [imgIsLoaded, setImgIsLoaded] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));
  const navigation = useNavigation<ScreenNavigationProp>();

  const handleImageLoad = () => {
    setImgIsLoaded(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    navigation.navigate('Movie', {movie_id: String(id), movie_title});
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container]} {...props}>
        {!imgIsLoaded && (
          <ActivityIndicator size="large" style={styles.indicator} />
        )}
        <Animated.Image
          source={source.uri ? source : require('../../images/no-image.png')}
          style={[
            styles.image,
            {
              width,
              height,
              opacity: fadeAnim,
            },
          ]}
          onLoad={handleImageLoad}
          onLoadStart={() => setImgIsLoaded(false)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MoviesListItem;
