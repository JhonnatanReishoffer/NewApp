import { Pressable, StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function IconButtom({icon, label, onPress}){
    return(
        <Pressable style={styles.iconButtom} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color={"#fff"} />
            <Text style={styles.iconButtomLabel}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    iconButtom: {
        justifyContent:'center',
        alignContent:'center',
    },
    iconButtomLabel: {
        color: '#fff',
        marginTop:12,
    },
});