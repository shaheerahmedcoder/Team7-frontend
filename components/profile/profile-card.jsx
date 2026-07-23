import { MaterialIcons } from '@expo/vector-icons';
import { Image, View } from 'react-native';
import CustomText from '../CustomText';
import { useTheme } from '../../theme/useTheme';

const ProfileCard = ({ name }) => {
    const { colors } = useTheme();
    return (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            <View
                style={{
                    width: '90%',
                    backgroundColor: colors.card,
                    borderRadius: 20,
                    marginTop: 60,
                    paddingVertical: 20,
                    alignItems: 'center',
                }}
            >
                <View>
                    <Image
                        source={{ uri: 'https://miro.medium.com/v2/resize:fit:500/0*X7e4LM92V7Qnrbyn' }}
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 80,
                            marginTop: -80,
                            marginBottom: 20,
                            borderColor: colors.primary,
                            borderWidth: 3,
                        }}
                    />
                    <View
                        style={{
                            backgroundColor: 'green',
                            width: 20,
                            height: 20,
                            borderRadius: 80,
                            position: 'absolute',
                            right: 10,
                            bottom: 24,
                            borderWidth: 2,
                            borderColor: colors.card,
                        }}
                    >
                    </View>
                </View>
                <CustomText style={{ fontSize: 22, fontFamily: 'Poppins-Bold', color: colors.text }}>
                    {name}
                </CustomText>
                <CustomText style={{ fontSize: 16, color: colors.textSecondary }}>Student ID: 123456789</CustomText>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: colors.primary + '1a',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        borderRadius: 10,
                        marginTop: 10
                    }}
                >
                    <MaterialIcons name="school" size={16} color={colors.primary} style={{ marginRight: 6 }} />
                    <CustomText
                        style={{
                            fontSize: 14,
                            color: colors.primary,
                            lineHeight: 20,
                        }}
                    >
                        Department of Computer Science
                    </CustomText>
                </View>
                <View
                    style={{
                        height: 1,
                        width: '40%',
                        backgroundColor: colors.border,
                        marginVertical: 20
                    }}
                >
                </View>
                <CustomText style={{ fontSize: 14, color: colors.textSecondary }}>Current Enrolment</CustomText>
                <CustomText style={{ fontSize: 14, fontFamily: 'Poppins-SemiBold', color: colors.primary }}>
                    Third Year (5th Semester)
                </CustomText>
            </View>
        </View>
    );
}

export default ProfileCard;