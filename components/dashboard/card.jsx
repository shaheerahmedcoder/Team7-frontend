import CustomText from "@/components/CustomText";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "../../theme/useTheme";

const DashboardCard = ({ title, description, iconName, iconColor, onPress, style }) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={[{ width: '48%', marginBottom: 15 }, style]}
        >
            <View style={{ backgroundColor: colors.card, borderRadius: 12, padding: 16, alignItems: 'center', width: '100%', elevation: 2, shadowColor: colors.cardShadow, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4 }}>
                <MaterialIcons name={iconName} size={40} color={iconColor + "10"} style={{ position: 'absolute', top: 5, right: 5 }} />
                <MaterialIcons name={iconName} size={40} color={iconColor} style={{ marginBottom: 12, backgroundColor: iconColor + '20', padding: 12, borderRadius: 12 }} />
                <CustomText style={{ fontSize: 16, fontFamily: 'Poppins-Bold', color: colors.text }}>{title}</CustomText>
                <CustomText style={{ fontSize: 12, color: colors.textSecondary, textAlign: 'center' }}>{description}</CustomText>
            </View>
        </TouchableOpacity>
    );
}

export default DashboardCard;