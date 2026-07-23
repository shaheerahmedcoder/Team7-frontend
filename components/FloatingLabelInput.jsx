import React, { useRef, useState } from 'react';
import { Animated, Text, TextInput, View } from 'react-native';
import { useTheme } from '../theme/useTheme';

const FloatingInput = ({ label, value, onChangeText, error, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    const { colors } = useTheme();

    // Animation value: 0 is placeholder (bottom), 1 is label (top)
    const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    // Trigger animation when focus changes or text exists
    React.useEffect(() => {
        Animated.timing(animatedIsFocused, {
            toValue: (isFocused || value) ? 1 : 0,
            duration: 200,
            useNativeDriver: false, // Layout properties don't support native driver
        }).start();
    }, [isFocused, value]);

    // Interpolate top position and font size
    const labelStyle = {
        top: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [40, 25], // Moves from center to top
        }),
        fontSize: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 12], // Shrinks when floating
        }),
        color: error ? '#ff1744' : (isFocused ? colors.primary : colors.textSecondary),
    };

    return (
        <View style={{ paddingTop: 18, width: '100%' }}>
            <Animated.Text style={[{ position: 'absolute', left: 12, paddingHorizontal: 4, zIndex: 1, fontFamily: 'Poppins-Regular' }, labelStyle]}>
                {label}
            </Animated.Text>
            <TextInput
                {...props}
                style={[
                    { height: 70, borderWidth: 1, borderColor: colors.border, borderRadius: 8, paddingHorizontal: 12, fontSize: 16, color: colors.text },
                    isFocused && { borderColor: colors.primary, borderWidth: 1, paddingTop: 25 },
                    error && { borderColor: '#ff1744' }
                ]}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={onChangeText}
                value={value}
                blurOnSubmit
                placeholderTextColor={colors.textSecondary}
            />
            {error && <Text style={{ color: '#ff1744', fontSize: 12, marginTop: 4, marginLeft: 12 }}>{error}</Text>}
        </View>
    );
};

export default FloatingInput;