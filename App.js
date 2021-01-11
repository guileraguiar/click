import * as React from 'react';
import AutoHeightWebView from 'react-native-autoheight-webview'
import { Dimensions } from 'react-native'

export default class App extends React.PureComponent {
  render() {
    return (
<AutoHeightWebView
style={{ width: Dimensions.get('window').width, marginTop: 10 }}
onSizeUpdated={size => console.log(size.height)}
    files={ [{
        href: 'cssfileaddress',
        type: 'text/css',
        rel: 'stylesheet'
    }] }
    source={{ uri: 'https://click.copapel.com.br/login' }}
    scalesPageToFit={ true }
    viewportContent={ 'width=device-width, user-scalable=no' }
  />
    );
  }
}