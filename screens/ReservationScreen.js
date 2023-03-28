import { View, Text, StyleSheet, ScrollView } from "react-native";

function ReservationScreen(props) {
    return (
        <ScrollView style={styles.conatiner}>
            <View>
                <Text>Reservation Screen</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    }
});

export default ReservationScreen;