import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { View } from 'react-native';
import CustomText from './CustomText';

const Header = ({ leftIcon, rightIcon }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingTop: 10,
            }}
        >
            <MaterialIcons name={leftIcon} color="#ffff" size={30} />
            <CustomText style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', color: '#ffff' }} >Student Profile</CustomText>
            <MaterialIcons name={rightIcon} color="#ffff" size={30} />
        </View>
    );
}

export default Header;