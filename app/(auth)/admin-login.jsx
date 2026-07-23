import CustomButton from "@/components/CustomButton";
import CustomText from "@/components/CustomText";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from '../../theme/useTheme';

const ADMIN_EMAIL = "admin@ubit.edu.pk";
const ADMIN_PASSWORD = "admin123";

const AdminLogin = () => {
    const router = useRouter();
    const { colors, isDark } = useTheme();
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
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <StatusBar style={isDark ? "light" : "dark"} backgroundColor={colors.headerBackground} />

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ backgroundColor: colors.headerBackground, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12, paddingTop: 20 }}>
                    <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
                        <MaterialIcons name="arrow-back" size={24} color={colors.headerText} />
                    </TouchableOpacity>
                    <CustomText style={{ color: colors.headerText, fontSize: 18, fontFamily: 'Poppins-SemiBold' }}>Admin Portal</CustomText>
                    <View style={{ width: 40 }} />
                </View>

                <View style={{ padding: 24, flex: 1, justifyContent: 'center' }}>
                    <View style={{ alignItems: 'center', marginBottom: 40 }}>
                        <View style={{ position: 'relative', marginBottom: 20 }}>
                            <Image
                                source={require('@/assets/images/ubit-logo.jpeg')}
                                style={{ width: 120, height: 120, borderRadius: 60 }}
                            />
                            <View style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: colors.primary, width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: colors.background }}>
                                <MaterialIcons name="security" size={14} color="#fff" />
                            </View>
                        </View>
                        <CustomText style={{ fontSize: 28, fontFamily: 'Poppins-Bold', color: colors.text }}>Admin Login</CustomText>
                        <CustomText style={{ fontSize: 14, color: colors.textSecondary, textAlign: 'center', marginTop: 4 }}>Secure access for campus administrators</CustomText>
                    </View>

                    <View style={{ gap: 8 }}>
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
                            <CustomText style={{ color: '#dc2626', fontSize: 13, fontFamily: 'Poppins-Medium', marginTop: 8, textAlign: 'center' }}>{error}</CustomText>
                        ) : null}

                        <View style={{ alignItems: 'flex-end', marginVertical: 8 }}>
                            <CustomText style={{ color: colors.primary, fontSize: 14, fontFamily: 'Poppins-Medium' }}>Forgot Password?</CustomText>
                        </View>

                        <CustomButton
                            text="Authorize & Sign In"
                            onPress={handleLogin}
                            style={{ marginTop: 16, backgroundColor: colors.primary, height: 56, borderRadius: 12 }}
                            icon="login"
                        />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, padding: 16, borderRadius: 12, marginTop: 40, gap: 12 }}>
                        <MaterialIcons name="info-outline" size={20} color={colors.icon} />
                        <CustomText style={{ flex: 1, fontSize: 12, color: colors.textSecondary, lineHeight: 18 }}>
                            Unauthorized access is strictly prohibited and monitored.
                        </CustomText>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AdminLogin;
