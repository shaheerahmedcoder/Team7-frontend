import CustomText from '@/components/CustomText';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import NoticeBadge from './notice-badge';

const NoticeCard = ({ notice, onPress }) => {
    const { title, description, preview, category, date, isUnread } = notice;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.card,
                isUnread && styles.unreadCard
            ]}
            activeOpacity={0.7}
        >
            <View style={styles.content}>
                <View style={styles.header}>
                    <NoticeBadge category={category} />
                    {isUnread && <View style={styles.unreadDot} />}
                </View>

                <CustomText style={styles.title} numberOfLines={2}>
                    {title}
                </CustomText>

                <CustomText style={styles.description} numberOfLines={2}>
                    {description || preview}
                </CustomText>

                <View style={styles.footer}>
                    <MaterialIcons name="calendar-today" size={14} color="#94a3b8" />
                    <CustomText style={styles.date}>{date}</CustomText>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#f1f5f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    unreadCard: {
        borderLeftWidth: 4,
        borderLeftColor: '#fdecec',
    },
    content: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    unreadDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#8a0000',
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        color: '#0f172a',
        lineHeight: 22,
        marginBottom: 6,
    },
    description: {
        fontSize: 13,
        color: '#64748b',
        lineHeight: 18,
        marginBottom: 12,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    date: {
        fontSize: 12,
        color: '#94a3b8',
    },
});

export default NoticeCard;
