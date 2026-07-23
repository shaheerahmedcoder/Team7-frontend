//Purpose of the file:
//Simple reusable component for notice filter

import CustomText from '@/components/CustomText';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../theme/useTheme';

const NoticeFilter = ({ activeFilter, onFilterChange }) => {
    const { colors } = useTheme();
    const filters = ['All', 'Exams', 'Events', 'Academic', 'General'];

    return (
        <View style={{ paddingVertical: 10 }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20, gap: 12, flexDirection: 'row' }}
            >
                {filters.map((filter) => {
                    const isActive = activeFilter === filter;
                    return (
                        <TouchableOpacity
                            key={filter}
                            onPress={() => onFilterChange(filter)}
                            style={[
                                { paddingHorizontal: 24, paddingVertical: 8, borderRadius: 20, borderWidth: 1 },
                                isActive 
                                ? { backgroundColor: colors.primary, borderColor: colors.primary } 
                                : { backgroundColor: colors.card, borderColor: colors.border }
                            ]}
                        >
                            <CustomText
                                style={[
                                    { fontSize: 14, fontFamily: 'Poppins-Medium' },
                                    isActive ? { color: '#fff' } : { color: colors.textSecondary }
                                ]}
                            >
                                {filter}
                            </CustomText>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default NoticeFilter;
