import { View, Text, StyleSheet, ScrollView } from "react-native";

function ContactScreen(props) {
    return (
        <ScrollView style={styles.conatiner}>
            <View>
                <Text>Contact Screen</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    }
});

export default ContactScreen;