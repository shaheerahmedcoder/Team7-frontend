import CustomText from '@/components/CustomText';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNotices } from '../../context/NoticesContext';
import { useTheme } from '../../theme/useTheme';
import { StatusBar } from 'expo-status-bar';

const PostNotice = () => {
    const router = useRouter();
    const { addNotice } = useNotices();
    const { colors, isDark } = useTheme();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [body, setBody] = useState('');
    const [attachment, setAttachment] = useState(null);
    const [error, setError] = useState('');

    const handlePublish = () => {
        if (!title.trim() || !category || !body.trim()) {
            setError("Please fill all required fields.");
            return;
        }
        addNotice({ title, category, body, attachment });
        router.replace('/(screens)/notice-board');
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <StatusBar style={isDark ? "light" : "dark"} backgroundColor={colors.headerBackground} />
            {/* Header */}
            <View style={{ backgroundColor: colors.headerBackground, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12, paddingTop: 20 }}>
                <TouchableOpacity onPress={() => router.replace('/(screens)/notice-board')} style={{ padding: 8 }}>
                    <MaterialIcons name="arrow-back" size={24} color={colors.headerText} />
                </TouchableOpacity>
                <CustomText style={{ color: colors.headerText, fontSize: 18, fontFamily: 'Poppins-SemiBold' }}>Post Notice</CustomText>
                <TouchableOpacity style={{ padding: 8 }}>
                    <MaterialIcons name="save" size={24} color={colors.headerText} />
                </TouchableOpacity>
            </View>

            {/* Admin Badge Section */}
            <View style={{ backgroundColor: colors.background, paddingVertical: 12, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: colors.border }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.primary + '1a', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20, gap: 6 }}>
                    <MaterialIcons name="lock" size={14} color={colors.primary} />
                    <CustomText style={{ color: colors.primary, fontSize: 11, fontFamily: 'Poppins-Bold', letterSpacing: 0.5 }}>ADMIN ACCESS ONLY</CustomText>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 20, gap: 24 }}>
                {/* Notice Title */}
                <View style={{ gap: 8 }}>
                    <CustomText style={{ fontSize: 14, fontFamily: 'Poppins-SemiBold', color: colors.text, marginLeft: 4 }}>Notice Title</CustomText>
                    <TextInput
                        style={{ backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 12, paddingHorizontal: 16, height: 48, fontSize: 16, fontFamily: 'Poppins-Regular', color: colors.text }}
                        placeholder="Enter notice title"
                        value={title}
                        onChangeText={setTitle}
                        placeholderTextColor={colors.textSecondary}
                    />
                </View>

                {/* Category Selection */}
                <View style={{ gap: 8 }}>
                    <CustomText style={{ fontSize: 14, fontFamily: 'Poppins-SemiBold', color: colors.text, marginLeft: 4 }}>Category</CustomText>
                    <View style={{ backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 12, height: 55, justifyContent: 'center', overflow: 'hidden' }}>
                        <Picker
                            selectedValue={category}
                            onValueChange={(value) => setCategory(value)}
                            style={{ height: 55, width: '100%', color: colors.text, backgroundColor: 'transparent' }}
                            dropdownIconColor={colors.icon}
                        >
                            <Picker.Item label="Select category" value="" color={isDark ? "#fff" : "#000"} />
                            <Picker.Item label="Exam" value="EXAM" color={isDark ? "#fff" : "#000"} />
                            <Picker.Item label="Event" value="EVENT" color={isDark ? "#fff" : "#000"} />
                            <Picker.Item label="Academic" value="ACADEMIC" color={isDark ? "#fff" : "#000"} />
                            <Picker.Item label="General" value="GENERAL" color={isDark ? "#fff" : "#000"} />
                        </Picker>
                    </View>
                    {!!error && !category && <CustomText style={{ color: '#dc2626', fontSize: 12, fontFamily: 'Poppins-Medium', textAlign: 'center', marginBottom: 8 }}>Please select a category</CustomText>}
                </View>

                {/* Notice Body */}
                <View style={{ gap: 8 }}>
                    <CustomText style={{ fontSize: 14, fontFamily: 'Poppins-SemiBold', color: colors.text, marginLeft: 4 }}>Notice Body</CustomText>
                    <TextInput
                        style={{ backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 12, paddingHorizontal: 16, fontSize: 16, fontFamily: 'Poppins-Regular', color: colors.text, height: 150, paddingTop: 12, paddingBottom: 12 }}
                        placeholder="Write the full notice here..."
                        value={body}
                        onChangeText={setBody}
                        placeholderTextColor={colors.textSecondary}
                        multiline
                        textAlignVertical="top"
                    />
                </View>

                {/* Attachment Section */}
                <View style={{ gap: 8 }}>
                    <CustomText style={{ fontSize: 14, fontFamily: 'Poppins-SemiBold', color: colors.text, marginLeft: 4 }}>Attach File (Optional)</CustomText>
                    <TouchableOpacity style={{ borderWidth: 2, borderStyle: 'dashed', borderColor: colors.border, backgroundColor: colors.card, borderRadius: 12, padding: 24, alignItems: 'center', gap: 4 }}>
                        <MaterialIcons name="cloud-upload" size={32} color={colors.icon} />
                        <CustomText style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: colors.textSecondary, marginTop: 8 }}>Tap to attach image or document</CustomText>
                        <CustomText style={{ fontSize: 12, color: colors.textSecondary }}>PDF, JPG, PNG up to 10MB</CustomText>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={{ padding: 20, backgroundColor: colors.background, borderTopWidth: 1, borderTopColor: colors.border, gap: 12 }}>
                {!!error && <CustomText style={{ color: '#dc2626', fontSize: 12, fontFamily: 'Poppins-Medium', textAlign: 'center', marginBottom: 8 }}>{error}</CustomText>}
                <TouchableOpacity
                    style={{ backgroundColor: colors.primary, borderRadius: 12, height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, elevation: 2, shadowColor: colors.primary, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4 }}
                    onPress={handlePublish}
                >
                    <MaterialIcons name="send" size={20} color="#fff" />
                    <CustomText style={{ color: '#fff', fontSize: 16, fontFamily: 'Poppins-Bold' }}>Publish Notice</CustomText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: 'transparent', borderRadius: 12, height: 52, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: colors.primary }}
                    onPress={() => router.replace('/(screens)/notice-board')}
                >
                    <CustomText style={{ color: colors.primary, fontSize: 16, fontFamily: 'Poppins-Bold' }}>Save as Draft</CustomText>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default PostNotice;
