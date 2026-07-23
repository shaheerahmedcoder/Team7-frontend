import CustomText from '@/components/CustomText';
import AnnoucementCard from '@/components/dashboard/annoucement-card';
import DashboardBanner from '@/components/dashboard/banner';
import DashboardCard from '@/components/dashboard/card';
import DashboardHeader from '@/components/dashboard/header';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/useTheme';
import Animated, { FadeInUp } from 'react-native-reanimated';

const HomeScreen = () => {
    const router = useRouter();
    const { colors, isDark } = useTheme();
    const cardsData = [
        { name: 'Timetable', iconName: '1k', iconColor: colors.primary },
        { name: 'Records', iconName: '2k', iconColor: '#1950c7' },
        { name: 'Attendance', iconName: '3k', iconColor: '#338000' },
        { name: 'Campus', iconName: '4k', iconColor: '#805e00' },
    ]

    const announcementsData = [
        { title: 'Midterm Exams Schedule', description: 'Midterm exams will commence from 15th March. Please check your timetable for details.', date: 'March 10, 2024', icon: 'schedule' },
        { title: 'Library Renovation', description: 'The library will be closed for renovation from 1st April to 30th April. Plan your visits accordingly.', date: 'March 25, 2024', icon: 'local-library' },
        { title: 'New Course Offerings', description: 'New courses in Data Science and AI will be available next semester. Check the course catalog for more info.', date: 'April 5, 2024', icon: 'book' },
    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <StatusBar style={isDark ? "light" : "dark"} />

            <DashboardHeader />
            <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 70 }}>
                <DashboardBanner
                    title="Your Academic Journey Starts Here"
                    imageSource={require('@/assets/images/ubit-facade.jpg')}
                />

                <CustomText style={{ fontSize: 18, marginHorizontal: 20, marginTop: 10, color: colors.text }}>Quick Actions</CustomText>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    padding: 10,
                    marginHorizontal: 10,
                }}>
                    {cardsData.map((item, index) => (
                        <Animated.View key={index} entering={FadeInUp.delay(index * 100).springify()} style={{ width: '48%' }}>
                            <DashboardCard
                                title={item.name}
                                description={`View your ${item.name.toLowerCase()} details and updates.`}
                                iconName={item.iconName}
                                iconColor={item.iconColor}

                                onPress={() => {
                                    if (item.name === 'Campus') {
                                        router.push('/(screens)/notice-board');
                                    }
                                }}
                                style={{ width: '100%' }}
                            />
                        </Animated.View>
                    ))}
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginVertical: 10 }}>
                    <CustomText style={{ fontSize: 18, color: colors.text }}>Recent Announcements</CustomText>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: 4 }}>
                        <CustomText style={{ fontSize: 14, lineHeight: 15, color: colors.primary }} onPress={() => { }} >History</CustomText>
                        <MaterialIcons name="arrow-forward-ios" size={12} color={colors.primary} onPress={() => { }} />
                    </View>
                </View>

                {announcementsData.map((item, index) => (
                    <Animated.View key={index} entering={FadeInUp.delay((index + 4) * 100).springify()} style={{ marginHorizontal: 20, marginBottom: 15 }}>
                        <AnnoucementCard
                            title={item.title}
                            description={item.description}
                            date={item.date}
                            icon={item.icon}
                        />
                    </Animated.View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;
