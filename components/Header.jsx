import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { View, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import { useTheme } from '../theme/useTheme';
import { useRouter } from 'expo-router';

const Header = ({ leftIcon, rightIcon }) => {
    const { colors } = useTheme();
    const router = useRouter();
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingTop: 10,
            }}
        >
            <TouchableOpacity onPress={() => leftIcon === 'arrow-back' && router.back()}>
                <MaterialIcons name={leftIcon} color={colors.headerText} size={30} />
            </TouchableOpacity>
            <CustomText style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', color: colors.headerText }} >Student Profile</CustomText>
            <TouchableOpacity>
                <MaterialIcons name={rightIcon} color={colors.headerText} size={30} />
            </TouchableOpacity>
        </View>
    );
}

export default Header;