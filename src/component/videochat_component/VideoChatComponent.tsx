import {
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useContext} from 'react';
import {createStyles} from './styles';
import {ThemeContext} from '../../themes/ThemeContext';

interface VideoChatComponentProps {
  link: string;
  image: ImageSourcePropType;
  title: string;
  onPress: () => void;
}

const VideoChatComponent: React.FC<VideoChatComponentProps> = ({
  link,
  image,
  title,
  onPress,
}) => {
  const {theme} = useContext(ThemeContext);
  const styles = createStyles(theme);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.link}>{link}</Text>
        <Image style={styles.image} source={image} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VideoChatComponent;
