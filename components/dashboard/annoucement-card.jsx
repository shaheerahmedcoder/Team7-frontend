import CustomText from "@/components/CustomText";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { useTheme } from "../../theme/useTheme";

const AnnoucementCard = ({ title, description, date, icon }) => {
    const { colors } = useTheme();
    return (
        <View style={{ backgroundColor: colors.card, borderRadius: 12, padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 15, elevation: 2, shadowColor: colors.cardShadow, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4 }}>
            <MaterialIcons name={icon} size={30} color={colors.primary} backgroundColor={colors.primary + "10"} padding={10} borderRadius={10} />
            <View style={{ flex: 1 }}>
                <CustomText style={{ fontSize: 14, fontFamily: 'Poppins-Bold', color: colors.text }} numberOfLines={1} ellipsizeMode="tail">{title}</CustomText>
                <CustomText style={{ fontSize: 12, color: colors.textSecondary }} numberOfLines={2} ellipsizeMode="tail">{description}</CustomText>
            </View>
            <View style={{ position: 'absolute', top: 23, right: 10 }}>
                <CustomText style={{ fontSize: 10, color: colors.textSecondary }}>{date}</CustomText>
            </View>
        </View>
    );
}

export default AnnoucementCard;