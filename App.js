import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.kotak}>
          <Text style={styles.teks1}> cekOngkir </Text>
          <Text style={styles.teks1}> input data </Text>
        </View>
        <View style={styles.panji}>
          <Text>Alamat Asal</Text>
         <TextInput
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 20,
            borderRadius: 4,
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="Pilih Provinsi"
          />
        <TextInput
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 20,
            borderRadius: 4,
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="Pilih Kota"
          />
        </View>

        <View style={styles.panji}>
          <Text>Alamat Tujuan</Text>
          <TextInput
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 20,
            borderRadius: 4,
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="Pilih Provinsi"
          />
          <TextInput
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 20,
            borderRadius: 4,
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="Pilih Kota"
          />
        </View> 

        <View style={styles.panji}> 
          <Text>Berat Paket</Text>
          <TextInput
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 20,
            borderRadius: 4,
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="Ons, Grams, Kg"
          />
          <Text>Pilih Kurir</Text>
          <TextInput
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 20,
            borderRadius: 4,
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="Ons, Grams, Kg"
          />
        </View>
        <View style={styles.olar}>
          <Button 
            title="cek Ongkir"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  kotak:{
    borderWidth: 1,
    padding: 20,
    backgroundColor: "purple"
  },
  panji:{
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 4,
  },
  olar:{
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
  },
  teks1:{
    textAlign: 'center',
    color: '#fff000'
  }
})
