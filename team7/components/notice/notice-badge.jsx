import CustomText from '@/components/CustomText';
import { StyleSheet, View } from 'react-native';

const NoticeBadge = ({ category }) => {
    const getBadgeStyles = () => {
        switch (category?.toLowerCase()) {
            case 'exam':
                return { backgroundColor: '#8a0000', label: 'EXAM' };
            case 'event':
            case 'events':
                return { backgroundColor: '#1d4ed8', label: 'EVENT' };
            case 'general':
                return { backgroundColor: '#15803d', label: 'GENERAL' };
            case 'academic':
                return { backgroundColor: '#334155', label: 'ACADEMIC' };
            case 'emergency':
                return { backgroundColor: '#dc2626', label: 'EMERGENCY' };
            default:
                return { backgroundColor: '#64748b', label: category?.toUpperCase() || 'NOTICE' };
        }
    };

    const { backgroundColor, label } = getBadgeStyles();

    return (
        <View style={[styles.badge, { backgroundColor }]}>
            <CustomText style={styles.text}>{label}</CustomText>
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    text: {
        color: '#fff',
        fontSize: 10,
        fontFamily: 'Poppins-Bold',
        letterSpacing: 0.5,
    },
});

export default NoticeBadge;
