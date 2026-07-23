//Purpose of the file:
//Routes between notice screens like post notice , notice details one and notice board too

import CustomBottomNav from '@/components/CustomBottomNav';
import { Stack } from 'expo-router';
import { useTheme } from '../../theme/useTheme';

export default function MainLayout() {
    const { colors } = useTheme();
    return (
        <>
            <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right', contentStyle: { backgroundColor: colors.background } }}>
                <Stack.Screen name="home" options={{ animation: 'fade' }} />
                <Stack.Screen name="notice-board" />
                <Stack.Screen name="notice-details" />
                <Stack.Screen name="post-notice" />
            </Stack>
            <CustomBottomNav />
        </>
    );
}
