import { Pressable, Text, View, StyleSheet, ScrollView } from "react-native";
import { styles as GlobalStyles } from "@/components/Style";

export default function HomeScreen() {
    const isHoverIn = (event: any) => {
        console.log('hover', event)
    }
    return (
        <View style={[GlobalStyles.appContainer, styles.flexContainer]}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>Hi, Alda Delas</Text>
                <Text style={styles.subText}>Selamat Datang di Visit Lapangan App!</Text>
            </View>
            <View style={styles.listContainer}>
                <ScrollView>
                    <View style={styles.cardList}>
                        <Pressable android_ripple={styles.rippleConfig} style={({pressed}) => pressed && styles.pressedList} focusable={true} onHoverIn={isHoverIn}> 
                            <View style={styles.contentList}>
                                <Text style={styles.titleList}>Pekerjaan Nomor 1</Text>
                                <Text style={styles.statusList}>Menunggu</Text>
                            </View>
                            <Text style={styles.descriptionList}>Sub deskripsi pekerjaan nomor 1</Text>
                        </Pressable>
                    </View>
                    <View style={styles.cardList}>
                        <Pressable style={({pressed}) => pressed && styles.pressedList} focusable={true} onHoverIn={isHoverIn}> 
                            <View style={styles.contentList}>
                                <Text style={styles.titleList}>Pekerjaan Nomor 2</Text>
                                <Text style={styles.statusList}>Menunggu</Text>
                            </View>
                            <Text style={styles.descriptionList}>Sub deskripsi pekerjaan nomor 2</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: 'column',
    },
    headerContainer: {
        flex: 1, 
        padding: 16, 
        justifyContent: 'flex-end', 
        borderBottomWidth: 2, 
        borderBottomColor: '#ccc'
    },
    listContainer: {
        flex: 6, 
        padding: 16
    },
    titleText: {
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 5
    },
    subText: {
        marginBottom: 5
    },
    cardList: {
        borderWidth: 1, 
        borderRadius: 10, 
        borderColor: '#ccc', 
        marginBottom: 15, 
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOpacity: 0.1,
        backgroundColor: 'white',
    },
    contentList: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
    },
    titleList: {
        flex: 2, 
        fontSize: 16, 
        fontWeight: 'bold', 
        marginBottom: 5
    },
    statusList: {
        flex: 1, 
        fontSize: 12, 
        fontStyle: 'italic', 
        fontWeight: '500', 
        marginBottom: 5, 
        textAlign: 'right',
    },
    descriptionList: {
        fontSize: 12,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
    },
    pressedList: {
        backgroundColor: 'rgb(245, 245, 245)'
    },
    rippleConfig: {
        color: 'rgb(245, 245, 245)',
    }
});
