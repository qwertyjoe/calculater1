
import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  parent: {
    flexDirection: "column",
    position: "absolute",
    top: 30,
    left: 0,
    right: 0,
    bottom: 0
  },
  base: { borderColor: "#000000", borderWidth: 5 },
  topBlock: {  flex: 2, alignItems: 'flex-end'},
  bottomBlock: { flex: 4, flexDirection: "row" },
  bottomRight: { flexDirection: "column", flex: 7 },
  BRB: { flexDirection: "row", flex:2},
  bottomLeft: { flexDirection: "column", flex: 2 },
  
  baseh: { borderColor: "#000000", borderWidth: 1 },
  base: { borderColor: "#000000", borderWidth: 0.5 },

  NbuttonText: {
      padding: 30,
      color: 'black',
      fontSize: 30,
      justifyContent: 'center',
      textAlign: 'center',
    },

  buttonText: {
        paddingTop:25 ,
        color: 'black',
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'center',
  },
    value: {
        flex: 1,
        color: 'black',
        fontSize: 50,
        
    },

  button: { borderColor: "#000000", borderWidth: 0.2, flex: 1 },
    Nbutton: { borderColor: "#000000", flex: 1, backgroundColor: "#DDDDDD" },
  
 
});

export default styles;
