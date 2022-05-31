import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height

const Map = () => {
  return (

    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude:-6.200000,
        longitude: 106.816666,
        latitudeDelta: 1,
        longitudeDelta: 2
      }}
    >

      <MapView.Marker
      coordinate={{
        latitude:-6.302446, 
        longitude:106.895157,
      }}
      title={"Taman Mini Indonesia Indah"}
      description={"Taman Mini Indonesia Indah merupakan suatu kawasan taman wisata bertema budaya Indonesia di Jakarta Timur."}
      />
    
    <MapView.Marker
      coordinate={{
        latitude:-6.1198657,
        longitude:106.8499504,
      }}
      title={"Taman Impian Jaya Ancol"}
      description={"Taman Impian Jaya Ancol merupakan sebuah objek wisata di Jakarta Utara."}
      />
      
    <MapView.Marker
      coordinate={{
        latitude:-6.30986208815,
        longitude: 106.818373592,
      }}
      title={"Kebun Binatang Ragunan"}
      description={"Taman Margasatwa Ragunan atau juga disebut Kebun Binatang Ragunan adalah sebuah kebun binatang yang terletak di daerah Ragunan, Pasar Minggu, Jakarta Selatan, Indonesia. Kebun binatang seluas 140 hektare ini didirikan pada tahun 1864."}
      />

    <MapView.Marker
      coordinate={{
        latitude:-6.70356 ,
        longitude:106.945675,
      }}
      title={"Taman Safari"}
      description={"Taman Safari Indonesia adalah tempat wisata keluarga berwawasan lingkungan yang berorientasi pada habitat satwa di alam bebas.."}
      />

    <MapView.Marker
      coordinate={{
        latitude:-6.1258203994681,
        longitude: 106.8428376317,
      }}
      title={"Seaworld ancol"}
      description={"Seaworld Indonesia adalah sebuah miniatur pesona laut yang terdapat dalam kompleks wisata pertama di Taman Impian Jaya Ancol. Pada tanggal 2 Oktober 1992, ."}
      />

    <MapView.Marker
      coordinate={{
        latitude:-6.175392 ,
        longitude: 106.827153,
      }}
      title={"Monumen Nasional"}
      description={"Monumen Nasional atau yang disingkat dengan Monas atau Tugu Monas adalah monumen peringatan setinggi 132 meter yang didirikan untuk mengenang perlawanan dan perjuangan rakyat Indonesia untuk merebut kemerdekaan dari pemerintahan kolonial Hindia Belanda."}
      />

    <MapView.Marker
      coordinate={{
        latitude:-6.19005840003,
        longitude:106.83900168,
      }}
      title={"Planetarium"}
      description={"Planetarium dan Observatorium Jakarta adalah satu dari tiga wahana simulasi langit di Indonesia selain di Kutai, Kalimantan Timur, dan Surabaya, Jawa Timur. Planetarium tertua ini letaknya di Taman Ismail Marzuki, Jakarta."}
      />

    <MapView.Marker
      coordinate={{
        latitude:-6.17535814388,
        longitude:106.822812675,
      }}
      title={"Perpustakaan Nasional Republik Indonesia"}
      description={"Perpustakaan Nasional Republik Indonesia adalah Lembaga Pemerintah Nonkementerian yang melaksanakan tugas pemerintahan dalam bidang perpustakaan yang berfungsi sebagai perpustakaan pembina, perpustakaan."}
      />

    <MapView.Marker
      coordinate={{
        latitude:-6.13127984607,
        longitude:106.826864385,
      }}
      title={"Pantai Ancol"}
      description={"Ancol merupakan salah satu taman rekreasi dan hiburan pantai yang bisa kita nikmati pada saat liburan di Kota Jakarta. "}
      />

    </MapView>
  )
} 

const styles = StyleSheet.create({
  map: {
    height
  }
})

export default Map