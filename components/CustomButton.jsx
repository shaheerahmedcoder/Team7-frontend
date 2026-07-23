import { MaterialIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import CustomText from './CustomText';
import { useTheme } from '../theme/useTheme';

const CustomButton = ({ text, icon, style, onPress }) => {
    const scale = useSharedValue(1);
    const { colors } = useTheme();

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    const handlePressIn = () => {
        scale.value = withSpring(0.95, { stiffness: 400, damping: 10 });
    };

    const handlePressOut = () => {
        scale.value = withSpring(1, { stiffness: 400, damping: 10 });
    };

    return (
        <Animated.View style={[animatedStyle, style]}>
            <Pressable
                onPress={onPress}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                style={{
                    backgroundColor: colors.primary,
                    paddingVertical: 14,
                    paddingHorizontal: 18,
                    borderRadius: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <CustomText
                    style={{
                        color: '#fff',
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 14,
                        marginRight: 8,
                    }}
                >
                    {text}
                </CustomText>
                {icon && <MaterialIcons name={icon} color='#fff' size={18} />}
            </Pressable>
        </Animated.View>
    );
}

export default CustomButton;