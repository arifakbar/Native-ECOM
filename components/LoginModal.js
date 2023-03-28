import { useEffect, useState } from 'react';

import { Modal, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoginModal(props) {
    const [visible, setVisible] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        setVisible(props.visible);
    }, [visible, props.visible])

    return (
        <Modal visible={visible} transparent={true} >
            <View style={styles.form}>
                <Text style={styles.title}>Login</Text>
                <TextInput placeholder='Enter your username here...' style={styles.input} value={username} onChangeText={(e) => setUsername(e)} />
                <TextInput placeholder='Enter your password here...' style={styles.input} value={password} onChangeText={(e) => setPassword(e)} />
                <View style={styles.btnWrapper}>
                    <TouchableOpacity style={styles.btn1} onPress={() => props.navigation.navigate("Home", { modal: false })} >
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn2} onPress={() => props.navigation.navigate("Home", { modal: false })} >
                        <Text style={styles.text}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        top: 250,
        left: 20,
        justifyContent: "center",
        alignItems: "center",
        maxHeight: 350,
        maxWidth: 350,
        backgroundColor: "white",
        elevation: 10,
        borderRadius: 15
    },
    title: {
        color: "#DA9816",
        textTransform: "uppercase",
        fontWeight: "semibold",
        fontSize: 30,
        marginBottom: 20
    },
    input: {
        width: "80%",
        borderBottomColor: "#DA9816",
        borderBottomWidth: 1,
        padding: 5,
        marginBottom: 10,
    },
    btnWrapper: {
        display: "flex",
        flexDirection: "row",
        width: "70%",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30
    },
    btn1: {
        width: "45%",
        padding: 10,
        backgroundColor: "skyblue"
    },
    btn2: {
        width: "45%",
        padding: 10,
        backgroundColor: "red"
    },
    text: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        textTransform: "uppercase",
        fontWeight: "bold"
    }
})