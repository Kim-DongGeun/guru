import React, { Component, useState } from "react";
import { Text, StyleSheet, View, FlatList, AsyncStorage, Alert } from "react-native";
import { Container, List, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, ListItem } from 'native-base'
import {Col, Row, Grid} from 'react-native-easy-grid'

export default function Student_list({ navigation, route, props }) {
    const [student_list, setStudent_list] = useState([{key:'1', value:'2'},{key:'1', value:'2'},{key:'1', value:'2'},{key:'1', value:'2'}])

    //const {name} = route.params
    //const {title} = route.params

    const _renderItem = ({ item }) => (
        <Text>{item.key, item.value}</Text>
        //<Lecture name={item.name} title={item.title} time={item.time} move={() => this.props.navigation.navigate("Student_screen", item)} action={() => this._onPressButton(item)}/>
    )

    return (
        <View>
            <View style={Styles.container}>
                <View style={Styles.titleContainer}>
                    <Text style={Styles.title}>title</Text>
                </View>
                <View style={Styles.nameContainer}>
                    <Text style={Styles.name}>name</Text>
                </View>
            </View>
            <FlatList
                //style={{ width: "100%" }}
                data={student_list}
                //ListEmptyComponent={_renderEmpty}
                keyExtractor={(item, index) => index.toString()}
                renderItem={_renderItem}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        height:120,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 40,
    },
    name:{
        fontSize:20     
    },
    nameContainer:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginRight:10
    },
    titleContainer:{
        flex:2,
        alignItems:'center',
        marginTop:30
        
    }
});