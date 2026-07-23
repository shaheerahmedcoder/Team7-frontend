import { Text } from 'react-native';
import { useTheme } from '../theme/useTheme';

const CustomText = ({ style, children, ...props }) => {
    const { colors } = useTheme();
    return (
        <Text
            style={[{ fontFamily: 'Poppins-Regular', fontSize: 16, color: colors.text }, style]}
            {...props}
        >
            {children}
        </Text >
    );
}

export default CustomText;