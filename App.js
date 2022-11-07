import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';
export default function App() {
  return (
    <>
      <ExpoStatusBar style='auto'/>
      <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
        <View style={{padding: 16, backgroundColor: 'green'}}>
          <Text>Search</Text>
        </View>
        <View style={{flex: 1,padding: 16, backgroundColor: 'blue'}}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
