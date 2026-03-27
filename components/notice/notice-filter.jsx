//Purpose of the file:
//Simple reusable component for notice filter

import CustomText from '@/components/CustomText';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const NoticeFilter = ({ activeFilter, onFilterChange }) => {
    const filters = ['All', 'Exams', 'Events', 'Academic', 'General'];

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {filters.map((filter) => {
                    const isActive = activeFilter === filter;
                    return (
                        <TouchableOpacity
                            key={filter}
                            onPress={() => onFilterChange(filter)}
                            style={[
                                styles.filterButton,
                                isActive ? styles.activeButton : styles.inactiveButton
                            ]}
                        >
                            <CustomText
                                style={[
                                    styles.filterText,
                                    isActive ? styles.activeText : styles.inactiveText
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

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    scrollContent: {
        paddingHorizontal: 20,
        gap: 12,
        flexDirection: 'row',
    },
    filterButton: {
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
    },
    inactiveButton: {
        backgroundColor: '#fff',
        borderColor: '#e2e8f0',
    },
    activeButton: {
        backgroundColor: '#8a0000',
        borderColor: '#8a0000',
    },
    filterText: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    inactiveText: {
        color: '#64748b',
    },
    activeText: {
        color: '#fff',
    },
});

export default NoticeFilter;
