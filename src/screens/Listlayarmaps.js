import React from 'react'
    import { SafeAreaView } from 'react-navigation'
    import {View,StyleSheet,Linking,Button} from 'react-native'
    import Header from './Komponen/header'
    
    
    const Listlayarmaps = ({ navigation }) => {
      return (
        <SafeAreaView forceInset={{ top: 'always' }}>
          <View>
        <Header textHeader={'List Detail Wisata'} />
      </View>
        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://www.tamanmini.com/pesona_indonesia/');

         }}

         title="Taman Mini Indonesia Indah"

        />
        </View>

        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://www.ancol.com/');

         }}

         title="Taman Impian Jaya Ancol"

        />
        </View>

        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://ragunanzoo.jakarta.go.id/language/id/');

         }}

         title="Kebun Binatang Ragunan"

        />
        </View>

        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://tamansafari.com/');

         }}

         title="Taman Safari"

        />
        </View>

        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://www.ancol.com/unit-rekreasi/sea-world-ancol--3');

         }}

         title="SeaWorld Ancol"

        />
        </View>

        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://www.tamanmini.com/pesona_indonesia/');

         }}

         title="Monumen Nasional "

        />
        </View>



        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://id.wikipedia.org/wiki/Planetarium');

         }}

         title="Planetarium"

        />
        </View>


        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://www.perpusnas.go.id/');

         }}

         title="Perpustakaan Nasional Republik Indonesia"

        />
        </View>

        <View style={styles.buttonContainer}>
          <Button

            onPress={() => {

              Linking.openURL('https://kelloggsnyc.com/pantai-ancol/');

         }}

         title="Pantai Ancol"

        />
        </View>


        










        

        </SafeAreaView>
      )
    }
    const styles = StyleSheet.create({

      buttonContainer: {

        margin: 20
      }

    })

    
    export default Listlayarmaps