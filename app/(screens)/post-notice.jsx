// Purpose of the file:
// Contains all logics, including posting the notices, category selection and the attachment section too

import CustomText from '@/components/CustomText';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNotices } from '../../context/NoticesContext';

const PostNotice = () => {
    const router = useRouter();
    const { addNotice } = useNotices();
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
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.replace('/(screens)/notice-board')} style={styles.headerButton}>
                    <MaterialIcons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <CustomText style={styles.headerTitle}>Post Notice</CustomText>
                <TouchableOpacity style={styles.headerButton}>
                    <MaterialIcons name="save" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Admin Badge Section */}
            <View style={styles.adminBadgeSection}>
                <View style={styles.adminBadge}>
                    <MaterialIcons name="lock" size={14} color="#8a0000" />
                    <CustomText style={styles.adminBadgeText}>ADMIN ACCESS ONLY</CustomText>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Notice Title */}
                <View style={styles.inputGroup}>
                    <CustomText style={styles.label}>Notice Title</CustomText>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter notice title"
                        value={title}
                        onChangeText={setTitle}
                        placeholderTextColor="#94a3b8"
                    />
                </View>

                {/* Category Selection */}
                <View style={styles.inputGroup}>
                    <CustomText style={styles.label}>Category</CustomText>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={category}
                            onValueChange={(value) => setCategory(value)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Select category" value="" color="#94a3b8" />
                            <Picker.Item label="Exam" value="EXAM" />
                            <Picker.Item label="Event" value="EVENT" />
                            <Picker.Item label="Academic" value="ACADEMIC" />
                            <Picker.Item label="General" value="GENERAL" />
                        </Picker>
                    </View>
                    {!!error && !category && <CustomText style={styles.errorText}>Please select a category</CustomText>}
                </View>

                {/* Notice Body */}
                <View style={styles.inputGroup}>
                    <CustomText style={styles.label}>Notice Body</CustomText>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Write the full notice here..."
                        value={body}
                        onChangeText={setBody}
                        placeholderTextColor="#94a3b8"
                        multiline
                        textAlignVertical="top"
                    />
                </View>

                {/* Attachment Section */}
                <View style={styles.inputGroup}>
                    <CustomText style={styles.label}>Attach File (Optional)</CustomText>
                    <TouchableOpacity style={styles.uploadArea}>
                        <MaterialIcons name="cloud-upload" size={32} color="#94a3b8" />
                        <CustomText style={styles.uploadTitle}>Tap to attach image or document</CustomText>
                        <CustomText style={styles.uploadSubtitle}>PDF, JPG, PNG up to 10MB</CustomText>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                {!!error && <CustomText style={styles.errorText}>{error}</CustomText>}
                <TouchableOpacity
                    style={styles.publishButton}
                    onPress={handlePublish}
                >
                    <MaterialIcons name="send" size={20} color="#fff" />
                    <CustomText style={styles.publishButtonText}>Publish Notice</CustomText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.draftButton}
                    onPress={() => router.replace('/(screens)/notice-board')}
                >
                    <CustomText style={styles.draftButtonText}>Save as Draft</CustomText>
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
    adminBadgeSection: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9',
    },
    adminBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fdecec',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 20,
        gap: 6,
    },
    adminBadgeText: {
        color: '#8a0000',
        fontSize: 11,
        fontFamily: 'Poppins-Bold',
        letterSpacing: 0.5,
    },
    scrollContent: {
        padding: 20,
        gap: 24,
    },
    inputGroup: {
        gap: 8,
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: '#334155',
        marginLeft: 4,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 12,
        paddingHorizontal: 16,
        height: 48,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#0f172a',
    },
    textArea: {
        height: 150,
        paddingTop: 12,
        paddingBottom: 12,
    },
    pickerContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 12,
        height: 55,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    picker: {
        height: 55,
        width: '100%',
        color: '#0f172a',
    },
    placeholderText: {
        color: '#94a3b8',
    },
    uploadArea: {
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#e2e8f0',
        backgroundColor: '#f8fafc',
        borderRadius: 12,
        padding: 24,
        alignItems: 'center',
        gap: 4,
    },
    uploadTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: '#64748b',
        marginTop: 8,
    },
    uploadSubtitle: {
        fontSize: 12,
        color: '#94a3b8',
    },
    footer: {
        padding: 20,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#f1f5f9',
        gap: 12,
    },
    publishButton: {
        backgroundColor: '#8a0000',
        borderRadius: 12,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        elevation: 2,
        shadowColor: '#8a0000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    publishButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
    },
    draftButton: {
        backgroundColor: '#fff',
        borderRadius: 12,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#8a0000',
    },
    draftButtonText: {
        color: '#8a0000',
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
    },
    errorText: {
        color: '#dc2626',
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
        marginBottom: 8,
    },
});

export default PostNotice;
