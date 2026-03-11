import CustomText from '@/components/CustomText';
import NoticeCard from '@/components/notice/notice-card';
import NoticeFilter from '@/components/notice/notice-filter';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNotices } from '../../context/NoticesContext';


const NoticeBoard = () => {
    const router = useRouter();
    const { notices } = useNotices();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');
    const [showTooltip, setShowTooltip] = useState(false);

    const handleLongPress = () => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000);
    };

    const filteredNotices = notices.filter(notice => {
        const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (notice.description || notice.body || '').toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = activeFilter === 'All' ||
            notice.category.toLowerCase() === activeFilter.toLowerCase() ||
            (activeFilter === 'Exams' && (notice.category === 'Exam' || notice.category === 'EXAM')) ||
            (activeFilter === 'Events' && (notice.category === 'Event' || notice.category === 'EVENT'));
        return matchesSearch && matchesFilter;
    });

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
                    <MaterialIcons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <CustomText style={styles.headerTitle}>Notice Board</CustomText>
                <TouchableOpacity style={styles.headerButton}>
                    <View style={styles.notificationWrapper}>
                        <MaterialIcons name="notifications-none" size={24} color="#fff" />
                        <View style={styles.notificationDot} />
                    </View>
                </TouchableOpacity>
            </View>

            {/* Search Section */}
            <View style={styles.searchSection}>
                <View style={styles.searchBar}>
                    <MaterialIcons name="search" size={20} color="#94a3b8" />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search notices..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        placeholderTextColor="#94a3b8"
                    />
                </View>
            </View>

            {/* Filter Section */}
            <NoticeFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

            {/* Notice List */}
            <FlatList
                data={filteredNotices}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <NoticeCard
                        notice={item}
                        onPress={() => router.push({
                            pathname: '/(screens)/notice-details',
                            params: {
                                id: item.id,
                                title: item.title,
                                body: item.body,
                                category: item.category,
                                date: item.date,
                                isUnread: item.isUnread,
                                postedBy: item.postedBy,
                                attachment: item.attachment ? JSON.stringify(item.attachment) : null
                            }
                        })}
                    />
                )}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <MaterialIcons name="info-outline" size={48} color="#e2e8f0" />
                        <CustomText style={styles.emptyText}>No notices found</CustomText>
                    </View>
                }
            />

            {/* Admin FAB */}
            <View style={styles.fabContainer}>
                {showTooltip && (
                    <View style={styles.tooltip}>
                        <CustomText style={styles.tooltipText}>Admin Access Only 🔒</CustomText>
                        <View style={styles.tooltipArrow} />
                    </View>
                )}
                <TouchableOpacity
                    style={styles.fab}
                    onPress={() => router.push('/(auth)/admin-login')}
                    onLongPress={handleLongPress}
                >
                    <MaterialIcons name="add" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
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
    notificationWrapper: {
        position: 'relative',
    },
    notificationDot: {
        position: 'absolute',
        top: 2,
        right: 2,
        width: 8,
        height: 8,
        backgroundColor: '#fbbf24',
        borderRadius: 4,
    },
    searchSection: {
        padding: 16,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8fafc',
        borderRadius: 8,
        paddingHorizontal: 12,
        height: 48,
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#1e293b',
    },
    listContent: {
        padding: 16,
        paddingBottom: 100,
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
    },
    emptyText: {
        marginTop: 12,
        color: '#94a3b8',
        fontSize: 16,
    },
    fabContainer: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        alignItems: 'center',
        gap: 8,
    },
    tooltip: {
        backgroundColor: '#2d2d2d',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        position: 'relative',
    },
    tooltipText: {
        color: '#fff',
        fontSize: 12,
    },
    tooltipArrow: {
        position: 'absolute',
        bottom: -6,
        left: '50%',
        marginLeft: -6,
        width: 0,
        height: 0,
        borderLeftWidth: 6,
        borderLeftColor: 'transparent',
        borderRightWidth: 6,
        borderRightColor: 'transparent',
        borderTopWidth: 6,
        borderTopColor: '#2d2d2d',
    },
    fab: {
        width: 56,
        height: 56,
        backgroundColor: '#8a0000',
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#8a0000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
});

export default NoticeBoard;
