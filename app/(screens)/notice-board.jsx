import CustomText from '@/components/CustomText';
import NoticeCard from '@/components/notice/notice-card';
import NoticeFilter from '@/components/notice/notice-filter';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNotices } from '../../context/NoticesContext';
import { useTheme } from '../../theme/useTheme';
import Animated, { FadeInUp, FadeInDown, SlideInDown } from 'react-native-reanimated';

const NoticeBoard = () => {
    const router = useRouter();
    const { notices } = useNotices();
    const { colors } = useTheme();
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
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            {/* Header */}
            <View style={{ backgroundColor: colors.headerBackground, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12, paddingTop: 20 }}>
                <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
                    <MaterialIcons name="arrow-back" size={24} color={colors.headerText} />
                </TouchableOpacity>
                <CustomText style={{ color: colors.headerText, fontSize: 18, fontFamily: 'Poppins-SemiBold' }}>Notice Board</CustomText>
                <TouchableOpacity style={{ padding: 8 }}>
                    <View style={{ position: 'relative' }}>
                        <MaterialIcons name="notifications-none" size={24} color={colors.headerText} />
                        <View style={{ position: 'absolute', top: 2, right: 2, width: 8, height: 8, backgroundColor: colors.notificationDot, borderRadius: 4 }} />
                    </View>
                </TouchableOpacity>
            </View>

            {/* Search Section */}
            <View style={{ padding: 16 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.searchBarBackground, borderRadius: 8, paddingHorizontal: 12, height: 48, borderWidth: 1, borderColor: colors.searchBarBorder }}>
                    <MaterialIcons name="search" size={20} color={colors.icon} />
                    <TextInput
                        style={{ flex: 1, marginLeft: 8, fontSize: 14, fontFamily: 'Poppins-Regular', color: colors.text }}
                        placeholder="Search notices..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        placeholderTextColor={colors.icon}
                    />
                </View>
            </View>

            {/* Filter Section */}
            <NoticeFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

            {/* Notice List */}
            <FlatList
                data={filteredNotices}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <Animated.View entering={FadeInUp.delay(index * 100).springify()}>
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
                    </Animated.View>
                )}
                contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 40 }}>
                        <MaterialIcons name="info-outline" size={48} color={colors.border} />
                        <CustomText style={{ marginTop: 12, color: colors.emptyStateText, fontSize: 16 }}>No notices found</CustomText>
                    </View>
                }
            />

            {/* Admin FAB */}
            <View style={{ position: 'absolute', bottom: 30, right: 20, alignItems: 'center', gap: 8 }}>
                {showTooltip && (
                    <Animated.View entering={FadeInDown} style={{ backgroundColor: colors.tooltipBackground, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, position: 'relative' }}>
                        <CustomText style={{ color: '#fff', fontSize: 12 }}>Admin Access Only 🔒</CustomText>
                        <View style={{ position: 'absolute', bottom: -6, left: '50%', marginLeft: -6, width: 0, height: 0, borderLeftWidth: 6, borderLeftColor: 'transparent', borderRightWidth: 6, borderRightColor: 'transparent', borderTopWidth: 6, borderTopColor: colors.tooltipBackground }} />
                    </Animated.View>
                )}
                <Animated.View entering={SlideInDown.delay(300)}>
                    <TouchableOpacity
                        style={{ width: 56, height: 56, backgroundColor: colors.primary, borderRadius: 28, alignItems: 'center', justifyContent: 'center', elevation: 4, shadowColor: colors.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 4 }}
                        onPress={() => router.push('/(auth)/admin-login')}
                        onLongPress={handleLongPress}
                    >
                        <MaterialIcons name="add" size={30} color="#fff" />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
};

export default NoticeBoard;
