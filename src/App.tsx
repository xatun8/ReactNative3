import React from "react";
import { SafeAreaView } from 'react-native';
import Popup from './Popup';
import Payment from './Payment';
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      < Popup />
      {/* <Payment/> */}
    </SafeAreaView>
  )
};
export default App;