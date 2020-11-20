import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

const EditUserProfile = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Jennifer Doe</Text>
              <Text style={styles.info}>Foodie / BBQ Lover</Text>


              <View style={styles.card}>
                <Text style={styles.cardTitle}>First Name</Text>
                <TextInput style = {styles.input}>
                </TextInput>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Last Name</Text>
                <TextInput style = {styles.input}>
                </TextInput>
              </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Bio</Text>
                    <TextInput style = {styles.input}>
                    </TextInput>
                  </View>
              <View style={styles.card}>
                  <Text style={styles.cardTitle}>Email</Text>
                  <Text style={styles.cardInfo}>Jennifer123@gmail.com</Text>
                </View>

                <View style={styles.card}>
                  <Text style={styles.cardTitle}>Phone</Text>
                  <Text style={styles.cardInfo}>(493)594-3920</Text>
                </View>

              <TouchableOpacity style={styles.buttonContainer}>
                <Text style = {styles.buttonText}>Delete Profile</Text>
              </TouchableOpacity>
            </View>

        </View>


        </ScrollView>
      </View>
    );
}

export default EditUserProfile;

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#003f5c",
    height:150,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:80
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center',
    marginBottom:20,
  },
  buttonContainer: {
    marginTop:20,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#fb5b5a",
  },
  buttonText:{
    color:"white"
  },
  wordBold: {
    fontWeight: 'bold',
    color: 'black'
  },
  cardTitle:{
      color:"#808080",
      fontSize:16,
      marginBottom:-5,
    },
    card:{
      backgroundColor: "#FFFFFF",
      padding:10,
      height:60,
      width:350,
      marginTop:5,
    },
    cardInfo:{
      fontSize:13,
    }
});