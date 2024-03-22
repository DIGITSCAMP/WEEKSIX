import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Rating } from 'react-native-ratings';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.detailsBox}>
        <Text>Limkokwing University</Text>
        <Text>#Be the best</Text>
        <Text>Programming</Text>
        <Image
          source={require("./pro.png")}
          style={styles.Pic}
        />
        <Rating
          type='star'
          ratingCount={5}
          imageSize={20}
          showRating
          onFinishRating={rating => console.log('Pro rating:', rating)}
        />
        <Text>Calculus</Text>
        <Text>The study of Calculus</Text>
        <Image
          source={require("./cal.png")}
          style={styles.Pic}
        />
        <Rating
          type='star'
          ratingCount={5}
          imageSize={20}
          showRating
          onFinishRating={rating => console.log('Calculus rating:', rating)}
        />
        <Text>Science</Text>
        <Text>The study of Science</Text>
        <Image
          source={require("./scien.png")}
          style={styles.Pic}
        />
        <Rating
          type='star'
          ratingCount={5}
          imageSize={20}
          showRating
          onFinishRating={rating => console.log('Science rating:', rating)}
        />
        <Text>Statistics</Text>
        <Text>The study Statistics</Text>
        <Image
          source={require("./stats.png")}
          style={styles.Pic}
        />
        <Rating
          type='star'
          ratingCount={5}
          imageSize={20}
          showRating
          onFinishRating={rating => console.log('Statistics rating:', rating)}
        />
        <Text>English</Text>
        <Text>The study of English language</Text>
        <Image
          source={require("./eng.png")}
          style={styles.Pic}
        />
        <Rating
          type='star'
          ratingCount={5}
          imageSize={20}
          showRating
          onFinishRating={rating => console.log('English rating:', rating)}
        />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Pic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  detailsBox: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
});
