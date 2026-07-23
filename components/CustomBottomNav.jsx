import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../theme/useTheme';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const CustomBottomNav = () => {
    const router = useRouter();
    const path = usePathname();
    const { colors } = useTheme();

    const tabs = [
        { name: 'home', label: 'Home', icon: 'home' },
        { name: 'courses', label: 'Courses', icon: 'book' },
        { name: 'schedule', label: 'Schedule', icon: 'calendar' },
        { name: 'profile', label: 'Profile', icon: 'person' },
    ];

    return (
        <SafeAreaView edges={['bottom']} style={{ backgroundColor: colors.card }}>
            <View style={{
                flexDirection: 'row',
                height: Platform.OS === 'ios' ? 80 : 60,
                backgroundColor: colors.card,
                borderTopColor: colors.border,
                borderTopWidth: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingBottom: Platform.OS === 'ios' ? 20 : 0,
            }}>
                {tabs.map((tab) => {
                    const isActive = path.includes(tab.name) || (path === '/' && tab.name === 'home');
                    return (
                        <TouchableOpacity
                            key={tab.name}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingHorizontal: 20,
                                paddingVertical: 5,
                                borderRadius: 10,
                                backgroundColor: isActive ? colors.primary + '1a' : 'transparent'
                            }}
                            onPress={() => router.push(`/(screens)/${tab.name}`)}
                        >
                            <Ionicons
                                name={tab.icon}
                                size={24}
                                color={isActive ? colors.primary : colors.icon}
                            />
                            <Text style={{ fontSize: 12, marginTop: 2, color: isActive ? colors.primary : colors.icon }}>
                                {tab.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </SafeAreaView>
    );
}

export default CustomBottomNav;