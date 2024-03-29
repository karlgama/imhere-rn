import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


const handleParticipantAdd = () => {
    
}

export function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>
            
            <Text style={styles.eventDate}>
                Sexta,4 de dezembro de 2024
            </Text>
                <View style={styles.form}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Nome do participante"
                        placeholderTextColor="#6b6b6b"
                    />

                    <TouchableOpacity style={styles.button} 
                        onPress={handleParticipantAdd}>
                            <Text style={styles.buttonText}>

                            </Text>
                    </TouchableOpacity>   
            </View>
    </View>
    )
}