import { View, Text, StyleSheet, ScrollView } from "react-native";

function ProfileScreen(props) {
    return (
        <ScrollView style={styles.conatiner}>
            <View>
                <Text>Profile Screen</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    }
});

export default ProfileScreen;