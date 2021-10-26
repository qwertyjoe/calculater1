import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";


import styles from "./style";
var i = 0;//�O�Ʋ�
var eqli = 0;//�p�⵪�ץ�

var point = 0;//�P�_�p���I
var pointn = [1,1,1];//�p��p���I
var maxP = 1;//�����p���I�̤j���
var pointB = 0;//�p���I�}��
var check = 0;//�T�{�Ĥ@�줣�i�O�s
var n = [0,0,0];

var ans='0'

var sig = [];//�����Ÿ�
var b = 0;//�}��



function num(m) {//������J���Ʀr
    if (b == 1) {
        if (n[i] == 0 && m == 0&&check==0) {
            check = 0;
        } else {
            check = 1;
        }
        if (check == 1) {
            if (m == -1 && pointB == 0) {

                point = 1;
                pointB = 1;
                if (i> 0&&n[i]==0) {
                    ans = ans + "0.";
                } else   {
                    ans = ans + ".";
                }
            }
            if (point == 1) {
                if (m >= 0) {
                    ans = ans + "" + m;
                    pointn[i] = pointn[i] * 10;
                    n[i] = n[i] * 10 + m;
                    if (maxP < pointn[i]) {
                        maxP = pointn[i];
                    }
                }
            } else if (point == 0) {
                if (n[0] == 0) {
                    ans = m;
                } else {
                    ans = ans + "" + m;
                }
                n[i] = n[i] * 10 + m;

            }
        }
        
    }
    b = 0;
} 

function sign(m) {//�����Ÿ�
    if (b == 1) {
        sig[i] = m;
        ans = ans + "" + m;
        i++;
        n[i] = 0;
        pointn[i] = 1;
        clean();
    }
    b = 0;
} 

function eql() {//�B��
    if (b == 1) {
        n[0] = n[0] * maxP / pointn[0];
        for (eqli = 0; eqli < i; eqli++) {
            switch (sig[eqli]) {
                case "+":
                    n[0] = n[0] +( n[eqli + 1] * maxP / pointn[eqli + 1]);
                    break;
                case "-":
                    n[0] = n[0] -( n[eqli + 1] * maxP / pointn[eqli + 1]);
                    break;
                case "X":
                    n[0] = n[0] * n[eqli + 1] / pointn[eqli + 1];
                    break;
                case "/":
                    n[0] = n[0] / n[eqli + 1]  / pointn[eqli + 1];
                    break;
            }
        }
        n[1] = 0;
        pointn[0] = maxP;
        if (n[0] % maxP!=0) {
            point = 1;
            pointB = 1;
        }
        i = 0;
        ans = n[0] / maxP;
    }
    b = 0;
} 

function clear() {//�M��
    if (b == 1) {
        n[0] = 0;
        ans = '0';
        pointn[0] = 1;
        maxP = 1;
        i = 0;
        clean();
    }
    b = 0;
}

function clean() {//�M��
    pointB = 0;
    point = 0;
    check = 0;
}

class Mondrian extends Component {//�����t�m
    constructor() {
        super();
        this.state = {
            TextH:0
        }
    }
    change = () => {  
            this.setState({
                TextH: ans
            })
    }
    
    render() {
    return (
      <View style={styles.parent}>
            <View style={styles.topBlock}>
                <View style={styles.topBlock}>
                </View>
                <Text style={[styles.value]}  > {this.state.TextH}</Text>  
        </View>
        <View style={styles.bottomBlock}>
                <View style={styles.bottomLeft} >
                    <TouchableOpacity style={styles.button} onPress={() => { b = 1; clear(); this.change(); }}>
                        <Text style={styles.buttonText}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { b = 1; sign("+"); this.change(); }}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { b = 1; sign("-");  this.change(); }}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { b = 1; sign("X"); this.change();}}>
                        <Text style={styles.buttonText}>X</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { b = 1; sign("/");  this.change();}}>
                        <Text style={styles.buttonText}>/</Text>
                    </TouchableOpacity>

                </View>
                
                <View style={[ styles.bottomRight]}>
                    <View style={[styles.BRB]}>
                        <TouchableOpacity style={styles.Nbutton} onPress={() => { b = 1; num(7); this.change(); }}>
                            <Text style={styles.NbuttonText}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Nbutton} onPress={() => { b = 1; num(8); this.change(); }}>
                            <Text style={styles.NbuttonText}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Nbutton} onPress={() => { b = 1; num(9); this.change();}}>
                            <Text style={styles.NbuttonText}>9</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={[styles.BRB]}>
                        <TouchableOpacity style={styles.Nbutton} onPress={() => { b = 1; num(4); this.change(); }}>
                            <Text style={styles.NbuttonText}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Nbutton} onPress={() => { b = 1; num(5); this.change(); }}>
                            <Text style={styles.NbuttonText}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Nbutton} onPress={() => { b = 1; num(6); this.change(); }}>
                            <Text style={styles.NbuttonText}>6</Text>
                        </TouchableOpacity>
                       
                    </View>
                    <View style={[styles.BRB]}>
                        <TouchableOpacity style={styles.Nbutton} onPress={() => { b = 1; num(1); this.change();}}>
                            <Text style={styles.NbuttonText}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Nbutton} onPress={() => { b = 1; num(2); this.change(); }}>
                            <Text style={styles.NbuttonText}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Nbutton} onPress={() => { b = 1; num(3); this.change();}}>
                            <Text style={styles.NbuttonText}>3</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={[styles.BRB]}>
                        <TouchableOpacity style={styles.Nbutton} onPress={() => { b = 1; num(0); this.change(); }}>
                            <Text style={styles.NbuttonText}>0</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.Nbutton} onPress={() => { b = 1; num(-1); this.change(); }}>
                            <Text style={styles.NbuttonText}>.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Nbutton} onPress={() => { b = 1; eql();  this.change();}}>
                            <Text style={styles.NbuttonText}>=</Text>
                        </TouchableOpacity>
                       
                    </View>
                    
                </View>
        </View>
      </View>
    );
        
  }
}


export default Mondrian;
