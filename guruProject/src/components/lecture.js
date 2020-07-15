import React from 'react'
import {
    View,
    Text,
    Switch,
    Image,
    TouchableOpacity,
    Button,
    StyleSheet,
    AsyncStorage,
    Alert
} from 'react-native'
import Seperator from './seperator'

export default class Lecture extends React.Component{
    render(){
        return (
            <TouchableOpacity onPress={this.props.move} style={{flexDirection:'row'}}>
                <View style={styles.container}>
                    <View style={styles.container_text}>
                        <Text style={styles.title}>
                            {this.props.title}
                        </Text>
                        <Text style={styles.name}>
                            {this.props.name}
                        </Text>
                    </View>
                    <View style={styles.container_text_left}>
                        <Text style={styles.time}>{this.props.time}</Text>
                    </View>
                </View>
                    <View style={{justifyContent:'center', marginRight:10}}>
                        <Button color="#000000" title={"del"} onPress={this.props.action}/>
                    </View>
            </TouchableOpacity>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    time:{
        flex:1,
        justifyContent:'center'
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        //flexDirection: 'column',
        marginLeft: 12,
        alignItems:'baseline',
    },
    container_text_left: {
        flex: 1,
        //flexDirection: 'column',
        marginRight: 12,
        alignItems:'flex-end',
    },
    name : {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
    wrapper:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        justifyContent:'space-between',
        borderWidth:2
    },
    wrapperLeft:{
        width:40,
        height:40,
        borderRadius:20,
        borderColor:'gray',
        borderWidth:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    iconLeft:{
        width:40,
        height:40
    },
    wrapperName:{
        flex:1,
        justifyContent:'flex-start',
        marginLeft:15
    },
    iconRight:{
        width:30,
        height:30
    },
})
