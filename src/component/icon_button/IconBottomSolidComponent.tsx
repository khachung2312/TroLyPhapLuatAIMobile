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

interface IconBottomSolidComponentProps {
  iconName: ImageSourcePropType;
  text: string;
  onPress: () => void;
}

const IconBottomSolidComponent: React.FC<IconBottomSolidComponentProps> = ({
  iconName,
  text,
  onPress,
}) => {
  const {theme} = useContext(ThemeContext);
  const styles = createStyles(theme);

  return (
    <TouchableOpacity style={styles.containerSolid} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image style={styles.iconContainer} source={iconName} />
      </View>
      <Text style={styles.textSolid}>{text}</Text>
    </TouchableOpacity>
  );
};

export default IconBottomSolidComponent;
