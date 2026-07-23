import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import CustomText from '../CustomText';
import { useTheme } from '../../theme/useTheme';

const QuickLinksCard = ({ data }) => {
    const { colors } = useTheme();
    return (
        <View
            style={{
                width: '90%',
                backgroundColor: colors.card,
                borderRadius: 20,
                marginTop: 20,
                paddingVertical: 20,
                paddingHorizontal: 20,
                gap: 15,
                alignSelf: 'center',
            }}
        >
            <CustomText style={{ fontFamily: 'Poppins-SemiBold', color: colors.text }}>
                Quick Links
            </CustomText>

            {data.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 15,
                        padding: 10,
                    }}
                    onPress={item.onPress}
                >
                    <MaterialIcons name={item.icon} size={24} color={colors.text} />
                    <CustomText style={{ color: colors.text }}>{item.label}</CustomText>
                    <MaterialIcons name="chevron-right" size={24} color={colors.text} style={{ position: 'absolute', right: 10 }} />
                </TouchableOpacity>
            ))}
        </View>
    );
}

export default QuickLinksCard;