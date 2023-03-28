import { View, Text, StyleSheet, ScrollView } from "react-native";

function SearchScreen(props) {
    return (
        <ScrollView style={styles.conatiner}>
            <View>
                <Text>Search Screen</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    }
});

export default SearchScreen;