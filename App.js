import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import codePush from 'react-native-code-push';

class App extends React.Component {
    updateVersion = () => {
        codePush.sync({
            updateDialog: true,
            installMode: codePush.InstallMode.IMMEDIATE
        });
    }

    render() {
        return (
            <View>
                <Text>Version 1.0.0</Text>
                <Button 
                    title='Update Version'
                    onPress={this.updateVersion} 
                />
            </View>
        )
    }
}

const codePushOptions = {
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
}

export default codePush(codePushOptions)(App);