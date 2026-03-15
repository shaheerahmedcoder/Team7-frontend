import CustomText from "@/components/CustomText";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

const DashboardCard = ({ title, description, iconName, iconColor, onPress, style }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={[{ width: '48%', marginBottom: 15 }, style]}
        >
            <View style={{ backgroundColor: '#FFFFFF', borderRadius: 12, padding: 22, alignItems: 'center', width: '100%' }}>
                <MaterialIcons name={iconName} size={40} color={iconColor + "10"} style={{ position: 'absolute', top: 5, right: 5 }} />
                <MaterialIcons name={iconName} size={40} color={iconColor} style={{ marginBottom: 12, backgroundColor: iconColor + '20', padding: 12, borderRadius: 12 }} />
                <CustomText style={{ fontSize: 16, fontFamily: 'Poppins-Bold' }}>{title}</CustomText>
                <CustomText style={{ fontSize: 12, color: '#646464', textAlign: 'center' }}>{description}</CustomText>
            </View>
        </TouchableOpacity>
    );
}

export default DashboardCard;