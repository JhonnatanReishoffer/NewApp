import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Clipboard from 'expo-clipboard'


export function ModalPassword({password, handleClose} ){

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)
        alert("Senha salva com sucesso!")
        handleClose()
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>
                
                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.innerTitle}>{password}</Text>
                </Pressable>

                <View style={styles.buttomArea}>
                    <TouchableOpacity style={styles.buttom} onPress={handleClose}>
                        <Text style={styles.text}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttom, styles.saveButtom]}>
                        <Text style={styles.textSaveButtom}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(24,24,24,0.6)",
        flex:1,
        justifyContent:'center',
        alignItems:'center',        
    },
    content:{
        backgroundColor:"#fff",
        width:"85%",
        paddingTop:24,
        paddingBottom:24,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:"black",
        marginBottom:24,
    },
    innerPassword:{
        backgroundColor:"#000",
        width:"90%",
        padding:14,
        borderRadius:8,

    },
    innerTitle:{
        color:"white",
        textAlign:'center',
    },
    buttomArea:{
        flexDirection:"row",  
        width:"90%",
        alignItems:"center",
        justifyContent:"space-between",   
    },
    buttom:{
        flex:1,
        alignItems:'center',
        marginBottom:4,
        marginTop:16,   
        padding:8,     
    },
    saveButtom:{
        backgroundColor:"#392de9",
        borderRadius:16,
        alignItems:'center',
        justifyContent:'center'
    },
    textSaveButtom:{        
        color:"#fff",
    }
})