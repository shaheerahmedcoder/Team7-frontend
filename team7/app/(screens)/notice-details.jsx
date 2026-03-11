import CustomText from '@/components/CustomText';
import NoticeBadge from '@/components/notice/notice-badge';
import { MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NOTICES_DATA = [
    {
        id: '1',
        title: 'Final Semester Examination Schedule (Fall 2023)',
        description: 'All students are hereby notified that the Final Semester Examinations for the Fall 2023 session will commence from December 15, 2023. The detailed schedule for all departments has been finalized and is attached below for your reference.\n\nPlease ensure that you have cleared all your dues and obtained your admit cards from the Student Affairs office by December 10, 2023. No student will be allowed to enter the examination hall without a valid admit card and student ID.\n\nStrict adherence to the university\'s examination code of conduct is expected. Any form of academic dishonesty will result in immediate disqualification. We wish all students the very best for their upcoming assessments.',
        category: 'Exam',
        date: 'Oct 24, 2023',
        postedBy: 'Admin Office',
        attachment: {
            name: 'Exam_Schedule.pdf',
            size: '2.4 MB',
            type: 'PDF'
        }
    },
    // ... other notices could be added here
];

const NoticeDetails = () => {
    const router = useRouter();
    const params = useLocalSearchParams();

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
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
                    <MaterialIcons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <CustomText style={styles.headerTitle}>Notice Details</CustomText>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <View style={styles.badgeContainer}>
                    <NoticeBadge category={notice.category} />
                </View>

                <CustomText style={styles.title}>{notice.title}</CustomText>

                <View style={styles.metaContainer}>
                    <View style={styles.metaItem}>
                        <MaterialIcons name="calendar-today" size={16} color="#8a0000" />
                        <CustomText style={styles.metaText}>{notice.date}</CustomText>
                    </View>
                    <View style={styles.metaItem}>
                        <MaterialIcons name="person-outline" size={16} color="#8a0000" />
                        <CustomText style={styles.metaText}>Posted by: {notice.postedBy}</CustomText>
                    </View>
                </View>

                <View style={styles.divider} />

                <CustomText style={styles.bodyText}>
                    {notice.body}
                </CustomText>

                {!!notice.attachment && (
                    <View style={styles.attachmentCard}>
                        <View style={styles.attachmentInfo}>
                            <View style={styles.attachmentIconContainer}>
                                <MaterialIcons name="description" size={24} color="#8a0000" />
                            </View>
                            <View>
                                <CustomText style={styles.attachmentName} numberOfLines={1}>
                                    {notice.attachment.name}
                                </CustomText>
                                <CustomText style={styles.attachmentMeta}>
                                    {notice.attachment.size} • {notice.attachment.type}
                                </CustomText>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.viewButton}>
                            <CustomText style={styles.viewButtonText}>View</CustomText>
                        </TouchableOpacity>
                    </View>
                )}

                <View style={styles.bottomSpacer} />
            </ScrollView>

            {/* Share FAB */}
            <TouchableOpacity style={styles.shareFab}>
                <MaterialIcons name="share" size={24} color="#fff" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#8a0000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        paddingTop: 20,
    },
    headerButton: {
        padding: 8,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
    },
    scrollContent: {
        padding: 20,
    },
    badgeContainer: {
        marginBottom: 16,
    },
    title: {
        fontSize: 22,
        fontFamily: 'Poppins-Bold',
        color: '#0f172a',
        lineHeight: 30,
        marginBottom: 16,
    },
    metaContainer: {
        gap: 8,
        marginBottom: 20,
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    metaText: {
        fontSize: 14,
        color: '#64748b',
    },
    divider: {
        height: 1,
        backgroundColor: '#f1f5f9',
        marginBottom: 20,
    },
    bodyText: {
        fontSize: 15,
        color: '#334155',
        lineHeight: 24,
        fontFamily: 'Poppins-Regular',
        marginBottom: 30,
    },
    attachmentCard: {
        backgroundColor: '#f8fafc',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#f1f5f9',
    },
    attachmentInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        flex: 1,
        marginRight: 10,
    },
    attachmentIconContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#fdecec',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    attachmentName: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: '#0f172a',
    },
    attachmentMeta: {
        fontSize: 11,
        color: '#64748b',
    },
    viewButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#8a0000',
    },
    viewButtonText: {
        fontSize: 12,
        fontFamily: 'Poppins-Bold',
        color: '#8a0000',
    },
    bottomSpacer: {
        height: 100,
    },
    shareFab: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        width: 56,
        height: 56,
        backgroundColor: '#8a0000',
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});

export default NoticeDetails;
