import React from 'react';
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg'
import { colors } from '../../config/consts';

const Arrow = ({fill, orientation, size}) => {

    const color = fill ? fill : colors.darkOne;
    const o = orientation;
    const transform = o === 'right' ? '180deg' : o === 'bottom' ? '-90deg' : o === 'top' ? '90deg' : '0deg';
    const s = size ? size : 16;

    return (  
      <View style={{transform: [{rotate: transform}]}}>
        <Svg width={s} height={s} viewBox="0 0 16 16" fill="none">
         <Path d="M12.1903 14.0395C12.6252 14.4744 12.6252 15.1797 12.1903 15.6146C11.7554 16.0498 11.0501 16.0498 10.615 15.6146L3.77564 8.77552C3.5583 8.55808 3.44971 8.27301 3.44971 7.98799C3.44971 7.70303 3.55852 7.418 3.77564 7.20066L10.615 0.361512C11.0501 -0.0735475 11.7554 -0.0735475 12.1903 0.361512C12.6252 0.796395 12.6252 1.50163 12.1903 1.93672L6.13881 7.98799L12.1903 14.0395Z" fill={color} />
        </Svg>
      </View>

    );
}
 
export default Arrow;