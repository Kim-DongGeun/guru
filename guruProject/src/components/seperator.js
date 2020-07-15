import React from 'react'
import {
    View,
    Text,
    Switch,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

function Seperator(props){
    return (
        <View
            style={[styles.Seperator,
            {
                borderColor:props.color? props.color:'#eceff1'
            }]}
        />
    )
}

const styles=StyleSheet.create({
    Seperator:{
        flex:1,
        borderTopWidth:1,
        marginLeft:60,
        marginRight:25,
        borderColor:'#eceff1'
    }
})

export default Seperator