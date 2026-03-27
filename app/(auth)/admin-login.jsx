//Purpose of the file:
//So this file contains all the stuff related to admin login page with dummy credentials for now 

import CustomButton from "@/components/CustomButton";
import CustomText from "@/components/CustomText";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ADMIN_EMAIL = "admin@ubit.edu.pk";
const ADMIN_PASSWORD = "admin123";

const AdminLogin = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (
            email.trim() === ADMIN_EMAIL &&
            password.trim() === ADMIN_PASSWORD
        ) {
            setError('');
            router.replace('/(screens)/post-notice');
        } else {
            setError('Invalid credentials. Access denied.');
        }
    };

    const handleEmailChange = (text) => {
        setEmail(text);
        if (error) setError('');
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        if (error) setError('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <MaterialIcons name="arrow-back" size={24} color="#fff" />
                    </TouchableOpacity>
                    <CustomText style={styles.headerTitle}>Admin Portal</CustomText>
                    <View style={{ width: 40 }} />
                </View>

                <View style={styles.content}>
                    <View style={styles.logoSection}>
                        <View style={styles.logoContainer}>
                            <Image
                                source={require('@/assets/images/ubit-logo.jpeg')}
                                style={styles.logo}
                            />
                            <View style={styles.adminBadge}>
                                <MaterialIcons name="security" size={14} color="#fff" />
                            </View>
                        </View>
                        <CustomText style={styles.title}>Admin Login</CustomText>
                        <CustomText style={styles.subtitle}>Secure access for campus administrators</CustomText>
                    </View>

                    <View style={styles.formSection}>
                        <FloatingLabelInput
                            label="Admin ID / Email"
                            value={email}
                            onChangeText={handleEmailChange}
                        />
                        <FloatingLabelInput
                            label="Password"
                            value={password}
                            onChangeText={handlePasswordChange}
                            isPassword={true}
                        />

                        {error ? (
                            <CustomText style={styles.errorText}>{error}</CustomText>
                        ) : null}

                        <View style={styles.forgotPassword}>
                            <CustomText style={styles.forgotText}>Forgot Password?</CustomText>
                        </View>

                        <CustomButton
                            text="Authorize & Sign In"
                            onPress={handleLogin}
                            style={styles.loginButton}
                            icon="login"
                        />
                    </View>

                    <View style={styles.noticeContainer}>
                        <MaterialIcons name="info-outline" size={20} color="#64748b" />
                        <CustomText style={styles.noticeText}>
                            Unauthorized access is strictly prohibited and monitored.
                        </CustomText>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flexGrow: 1,
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
    backButton: {
        padding: 8,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
    },
    content: {
        padding: 24,
        flex: 1,
        justifyContent: 'center',
    },
    logoSection: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoContainer: {
        position: 'relative',
        marginBottom: 20,
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    adminBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#8a0000',
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontFamily: 'Poppins-Bold',
        color: '#0f172a',
    },
    subtitle: {
        fontSize: 14,
        color: '#64748b',
        textAlign: 'center',
        marginTop: 4,
    },
    formSection: {
        gap: 8,
    },
    forgotPassword: {
        alignItems: 'flex-end',
        marginVertical: 8,
    },
    forgotText: {
        color: '#8a0000',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    loginButton: {
        marginTop: 16,
        backgroundColor: '#8a0000',
        height: 56,
        borderRadius: 12,
    },
    noticeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8fafc',
        padding: 16,
        borderRadius: 12,
        marginTop: 40,
        gap: 12,
    },
    noticeText: {
        flex: 1,
        fontSize: 12,
        color: '#64748b',
        lineHeight: 18,
    },
    errorText: {
        color: '#dc2626',
        fontSize: 13,
        fontFamily: 'Poppins-Medium',
        marginTop: 8,
        textAlign: 'center',
    },
});

export default AdminLogin;
