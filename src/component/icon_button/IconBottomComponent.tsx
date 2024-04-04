import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React, {useContext} from 'react';
import {createStyles} from './styles';
import {ThemeContext} from '../../themes/ThemeContext';

interface IconBottomComponentProps {
  iconName: ImageSourcePropType;
  text: string;
  onPress: () => void;
}

const IconBottomComponent: React.FC<IconBottomComponentProps> = ({
  iconName,
  text,
  onPress,
}) => {
  const {theme} = useContext(ThemeContext);
  const styles = createStyles(theme);

  return (
    <TouchableOpacity style={styles.containerLight} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image style={styles.iconContainer} source={iconName} />
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default IconBottomComponent;
