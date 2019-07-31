import React from 'react';
import {StyleSheet,View, TouchableOpacity,Text,Alert} from 'react-native';

export class Menu extends React.Component{

    onPress = ()=> {
        Alert.alert('Tocaste el boton');
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}>
                            Lessons
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}>
                            Registrarse
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}>
                            Blog
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('ContactRT')}>
                        <Text style={styles.buttonText}>
                            Contacto
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}>
                            Quiz
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}>
                            About
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:6,
        backgroundColor:'#35605a'
    },
    buttonRow:{
        flex:2,
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#ffffff',
        borderBottomWidth:1
    },
    buttonStyles:{
        backgroundColor:'#35605a',
        width:'50%',
        height:'50%',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#ffffff',
        fontSize:18
    }
})