//Purpose of the file:
//Routes between notice screens like post notice , notice details one and notice board too

import CustomBottomNav from '@/components/CustomBottomNav';
import { Stack } from 'expo-router';

export default function MainLayout() {
    return (
        <>
            <Stack screenOptions={{ headerShown: false, animation: 'fade' }}>
                <Stack.Screen name="home" />
                <Stack.Screen name="notice-board" />
                <Stack.Screen name="notice-details" />
                <Stack.Screen name="post-notice" />
            </Stack>
            <CustomBottomNav />
        </>
    );
}
