//Purpose of the file:
//So below is the simple component for the notice badge. Which we have used in our screens mutiple times.

import CustomText from '@/components/CustomText';
import { View } from 'react-native';
import { useTheme } from '../../theme/useTheme';

const NoticeBadge = ({ category }) => {
    const { colors } = useTheme();
    const getBadgeStyles = () => {
        switch (category?.toLowerCase()) {
            case 'exam':
                return { backgroundColor: colors.primary, label: 'EXAM' };
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
                return { backgroundColor: colors.icon, label: category?.toUpperCase() || 'NOTICE' };
        }
    };

    const { backgroundColor, label } = getBadgeStyles();

    return (
        <View style={{ paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4, alignSelf: 'flex-start', backgroundColor }}>
            <CustomText style={{ color: '#fff', fontSize: 10, fontFamily: 'Poppins-Bold', letterSpacing: 0.5 }}>{label}</CustomText>
        </View>
    );
};

export default NoticeBadge;
