/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { WebView } from 'react-native-webview';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <WebView
        source={{
          uri:
            'https://mylo-iframe.private.fin.ag/v2/Credential/National/?accountSelectorCurrency=cad&accountSelectorEnable=false&accountSelectorMultiple=false&accountSelectorNoTitle=true&backEnable=false&backgroundColor=FFFFFF&boxLayout=false&closeEnable=false&consentEnable=false&daysOfTransactions=Days90&demo=false&desktopLayout=true&eftEligibleRatio=0.8&enhancedMFA=true&fetchAllAccounts=true&fixedHeightEnable=false&foregroundColor1=333333&foregroundColor2=333333&headerEnable=false&language=en&maximumRetry=99&redirectUrl=https%3A%2F%2Fgateway.ca.mylo.ai%2Fproduction%2Fv2%2Fhtml%2Fbank-linking%2Fform-callback%2Fv1%2Fflinks%2Fconnect&scheduleRefresh=true&showAllOperationsAccounts=false&skipEnhancedMFA=false&statement=false&stringify=false&tag=SOME_TAG&theme=light&waitSummary=false&withTransactions=true&webview=true'
        }}
        cacheEnabled={false}
        scalesPageToFit
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
