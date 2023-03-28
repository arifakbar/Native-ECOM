import { View, Text, StyleSheet, ScrollView } from "react-native";

function PressScreen(props) {
    return (
        <ScrollView style={styles.conatiner}>
            <View>
                <Text>Press Screen</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    }
});

export default PressScreen;