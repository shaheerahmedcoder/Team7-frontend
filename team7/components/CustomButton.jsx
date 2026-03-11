import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ text, icon, style, onPress }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={{
                backgroundColor: '#800000',
                paddingVertical: 14,
                paddingHorizontal: 18,
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                ...style,
            }}
        >
            <Text
                style={{
                    color: '#fff',
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 14,
                    marginRight: 8,
                    marginTop: 3,
                }}
            >
                {text}
            </Text>
            {icon && <MaterialIcons name={icon} color='#fff' size={18} />}
        </TouchableOpacity >
    );
}

export default CustomButton;