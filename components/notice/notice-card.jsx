//Purpose of the file:
//Below is the component of notice card, that we have used in our screens

import CustomText from '@/components/CustomText';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import NoticeBadge from './notice-badge';
import { useTheme } from '../../theme/useTheme';

const NoticeCard = ({ notice, onPress }) => {
    const { colors } = useTheme();
    const { title, description, preview, category, date, isUnread } = notice;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                {
                    backgroundColor: colors.card,
                    borderRadius: 12,
                    padding: 16,
                    marginBottom: 12,
                    borderWidth: 1,
                    borderColor: colors.border,
                    shadowColor: colors.cardShadow,
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.05,
                    shadowRadius: 2,
                    elevation: 2,
                },
                isUnread && {
                    borderLeftWidth: 4,
                    borderLeftColor: colors.primary,
                }
            ]}
            activeOpacity={0.7}
        >
            <View style={{ flex: 1 }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 8,
                }}>
                    <NoticeBadge category={category} />
                    {isUnread && <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: colors.primary }} />}
                </View>

                <CustomText style={{
                    fontSize: 16,
                    fontFamily: 'Poppins-Bold',
                    color: colors.text,
                    lineHeight: 22,
                    marginBottom: 6,
                }} numberOfLines={2}>
                    {title}
                </CustomText>

                <CustomText style={{
                    fontSize: 13,
                    color: colors.textSecondary,
                    lineHeight: 18,
                    marginBottom: 12,
                }} numberOfLines={2}>
                    {description || preview}
                </CustomText>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 6,
                }}>
                    <MaterialIcons name="calendar-today" size={14} color={colors.icon} />
                    <CustomText style={{ fontSize: 12, color: colors.textSecondary }}>{date}</CustomText>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default NoticeCard;
