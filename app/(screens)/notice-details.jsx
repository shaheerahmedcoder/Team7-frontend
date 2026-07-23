import CustomText from '@/components/CustomText';
import NoticeBadge from '@/components/notice/notice-badge';
import { MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/useTheme';
import { StatusBar } from 'expo-status-bar';

const NoticeDetails = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const { colors, isDark } = useTheme();

    // Prioritize passed params
    const notice = {
        title: params.title || 'Notice Title',
        body: params.body || 'No content provided.',
        category: params.category || 'General',
        date: params.date || '',
        postedBy: params.postedBy || 'Admin Office',
        attachment: params.attachment ? JSON.parse(params.attachment) : null
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <StatusBar style={isDark ? "light" : "dark"} backgroundColor={colors.headerBackground} />
            {/* Header */}
            <View style={{ backgroundColor: colors.headerBackground, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12, paddingTop: 20 }}>
                <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
                    <MaterialIcons name="arrow-back" size={24} color={colors.headerText} />
                </TouchableOpacity>
                <CustomText style={{ color: colors.headerText, fontSize: 18, fontFamily: 'Poppins-SemiBold' }}>Notice Details</CustomText>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 20 }}>
                <View style={{ marginBottom: 16 }}>
                    <NoticeBadge category={notice.category} />
                </View>

                <CustomText style={{ fontSize: 22, fontFamily: 'Poppins-Bold', color: colors.text, lineHeight: 30, marginBottom: 16 }}>{notice.title}</CustomText>

                <View style={{ gap: 8, marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <MaterialIcons name="calendar-today" size={16} color={colors.primary} />
                        <CustomText style={{ fontSize: 14, color: colors.textSecondary }}>{notice.date}</CustomText>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <MaterialIcons name="person-outline" size={16} color={colors.primary} />
                        <CustomText style={{ fontSize: 14, color: colors.textSecondary }}>Posted by: {notice.postedBy}</CustomText>
                    </View>
                </View>

                <View style={{ height: 1, backgroundColor: colors.border, marginBottom: 20 }} />

                <CustomText style={{ fontSize: 15, color: colors.text, lineHeight: 24, fontFamily: 'Poppins-Regular', marginBottom: 30 }}>
                    {notice.body}
                </CustomText>

                {!!notice.attachment && (
                    <View style={{ backgroundColor: colors.card, borderRadius: 12, padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: colors.border }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1, marginRight: 10 }}>
                            <View style={{ width: 40, height: 40, backgroundColor: colors.primary + '1a', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
                                <MaterialIcons name="description" size={24} color={colors.primary} />
                            </View>
                            <View>
                                <CustomText style={{ fontSize: 14, fontFamily: 'Poppins-SemiBold', color: colors.text }} numberOfLines={1}>
                                    {notice.attachment.name}
                                </CustomText>
                                <CustomText style={{ fontSize: 11, color: colors.textSecondary }}>
                                    {notice.attachment.size} • {notice.attachment.type}
                                </CustomText>
                            </View>
                        </View>
                        <TouchableOpacity style={{ paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8, borderWidth: 1, borderColor: colors.primary }}>
                            <CustomText style={{ fontSize: 12, fontFamily: 'Poppins-Bold', color: colors.primary }}>View</CustomText>
                        </TouchableOpacity>
                    </View>
                )}

                <View style={{ height: 100 }} />
            </ScrollView>

            {/* Share FAB */}
            <TouchableOpacity style={{ position: 'absolute', bottom: 30, right: 20, width: 56, height: 56, backgroundColor: colors.primary, borderRadius: 28, alignItems: 'center', justifyContent: 'center', elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84 }}>
                <MaterialIcons name="share" size={24} color="#fff" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default NoticeDetails;
