import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import CustomText from '../CustomText';
import { useTheme } from '../../theme/useTheme';

const ContactCard = ({ data }) => {
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
                Contact Information
            </CustomText>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 15,
                }}
            >
                <MaterialIcons name="email" size={24} color={colors.primary} backgroundColor={colors.primary + '2d'} style={{ padding: 8, borderRadius: 6 }} />
                <View>
                    <CustomText style={{ fontSize: 12, fontFamily: 'Poppins-SemiBold', color: colors.textSecondary }}>
                        EMAIL ADDRESS
                    </CustomText>
                    <CustomText style={{ fontSize: 16, color: colors.text }}>bilalahmed2520@gmail.com</CustomText>
                </View>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 15,
                }}
            >
                <MaterialIcons name="phone" size={24} color={colors.primary} backgroundColor={colors.primary + '2d'} style={{ padding: 8, borderRadius: 6 }} />
                <View>
                    <CustomText style={{ fontSize: 12, fontFamily: 'Poppins-SemiBold', color: colors.textSecondary }}>
                        PHONE NUMBER
                    </CustomText>
                    <CustomText style={{ fontSize: 16, color: colors.text }}>+92 300 1234567</CustomText>
                </View>
            </View>
        </View>
    );
}

export default ContactCard;