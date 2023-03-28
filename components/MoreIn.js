import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

export default function MoreIn(props) {
    return (
        <View style={styles.moreIn}>
            <View style={styles.moreInWrapper}>
                <View>
                    <TouchableOpacity style={styles.moreInImg}>
                        <Image source={require('../assets/images/menu-ff-pasta.jpg')} resizeMode="cover" style={styles.moreInImage} />
                    </TouchableOpacity>
                    <Text style={styles.moreInTitle2}>More in Snacks</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.moreInImg}>
                        <Image source={require('../assets/images/menu-ff-pasta.jpg')} resizeMode="cover" style={styles.moreInImage} />
                    </TouchableOpacity>
                    <Text style={styles.moreInTitle2}>More in Snacks</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.moreInImg}>
                        <Image source={require('../assets/images/menu-ff-pasta.jpg')} resizeMode="cover" style={styles.moreInImage} />
                    </TouchableOpacity>
                    <Text style={styles.moreInTitle2}>More in Snacks</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.moreInImg}>
                        <Image source={require('../assets/images/menu-ff-pasta.jpg')} resizeMode="cover" style={styles.moreInImage} />
                    </TouchableOpacity>
                    <Text style={styles.moreInTitle2}>More in Snacks</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.moreInImg}>
                        <Image source={require('../assets/images/menu-ff-pasta.jpg')} resizeMode="cover" style={styles.moreInImage} />
                    </TouchableOpacity>
                    <Text style={styles.moreInTitle2}>More in Snacks</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.moreInImg}>
                        <Image source={require('../assets/images/menu-ff-pasta.jpg')} resizeMode="cover" style={styles.moreInImage} />
                    </TouchableOpacity>
                    <Text style={styles.moreInTitle2}>More in Snacks</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.moreInImg}>
                        <Image source={require('../assets/images/menu-ff-pasta.jpg')} resizeMode="cover" style={styles.moreInImage} />
                    </TouchableOpacity>
                    <Text style={styles.moreInTitle2}>More in Snacks</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.moreInImg}>
                        <Image source={require('../assets/images/menu-ff-pasta.jpg')} resizeMode="cover" style={styles.moreInImage} />
                    </TouchableOpacity>
                    <Text style={styles.moreInTitle2}>More in Snacks</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    moreIn: {
        width: "100%",
    },
    moreInImg: {
        height: 70,
        width: 70,
        borderRadius: 50,
        overflow: "hidden",
        elevation: 4,
        margin: 10,
    },
    moreInImage: {
        height: "100%",
        width: "100%"
    },
    moreInWrapper: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    moreInTitle2: {
        fontSize: 10,
        color: "grey",
        textAlign: "center"
    },
})