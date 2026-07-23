import Header from '@/components/Header';
import ContactCard from '@/components/profile/contact-card';
import ProfileCard from '@/components/profile/profile-card';
import QuickLinksCard from '@/components/profile/quick-links-card';
import CustomText from '@/components/CustomText';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/useTheme';

const HomeScreen = () => {
    const { theme, setTheme, colors, isDark } = useTheme();

    const quickLinks = [
        {
            icon: 'description',
            label: 'Academic Transcripts',
            onPress: () => { }
        },
        {
            icon: 'school',
            label: 'Course Registration',
            onPress: () => { }
        },
        {
            icon: 'credit-card',
            label: 'Student ID Card',
            onPress: () => { }
        }
    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <StatusBar style={isDark ? 'light' : 'dark'} backgroundColor={colors.headerBackground} />

            <View
                style={{
                    position: 'absolute',
                    height: 300,
                    width: '100%',
                    backgroundColor: colors.primary,
                }}
            >
            </View>
            <Header leftIcon={"arrow-back"} rightIcon={"settings"} />
            <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }}>
                <ProfileCard name={"Bilal Ahmed"} />
                <ContactCard data={""} />
                <QuickLinksCard data={quickLinks} />

                {/* Theme Toggle Section */}
                <View style={{ marginHorizontal: 20, marginTop: 20, backgroundColor: colors.card, borderRadius: 12, padding: 15, elevation: 2, shadowColor: colors.cardShadow, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 }}>
                    <CustomText style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold', color: colors.text, marginBottom: 10 }}>Appearance</CustomText>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {['light', 'dark', 'system'].map((t) => (
                            <TouchableOpacity
                                key={t}
                                onPress={() => setTheme(t)}
                                style={{
                                    flex: 1,
                                    paddingVertical: 8,
                                    marginHorizontal: 4,
                                    alignItems: 'center',
                                    borderRadius: 8,
                                    backgroundColor: theme === t ? colors.primary : 'transparent',
                                    borderWidth: 1,
                                    borderColor: theme === t ? colors.primary : colors.border,
                                }}
                            >
                                <CustomText style={{ color: theme === t ? '#fff' : colors.text, textTransform: 'capitalize' }}>
                                    {t}
                                </CustomText>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;
