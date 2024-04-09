import { View, StyleSheet } from 'react-native'

export const Desafio = () => {
    return(
        <>
            <View style={styles.statusBar} />
            <View style={styles.box1}>
                <View style={styles.quadrado}/>
                <View style={styles.retangulo}/>
            </View>
            <View style={styles.box2}>
                <View style={styles.boxEsq}/>
                <View style={styles.boxDir}/>
            </View>
            <View style={styles.box3}>
                <View style={styles.boxFeed}/>
                <View style={styles.boxFeed}/>
                <View style={styles.boxFeed}/>
                <View style={styles.boxFeed}/>
                <View style={styles.boxFeed}/>
                <View style={styles.boxFeed}/>
            </View>
            <View style={styles.box4}/>
        </>
    )
}

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: 'lightgreen',
        height: 30
    },
    box1: {
        flex: 2.7,
        alignItems: 'center',
        justifyContent: "center",
        gap: 20
    },
    quadrado: {
        width:100,
        height: 100,
        backgroundColor: 'orange'
    },
    retangulo: {
        width:200,
        height: 40,
        backgroundColor: 'orange'
    },
    box2: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "lightgreen",  
    },
    boxEsq: {
        flex: 1,
        backgroundColor: "purple",
        height: '87%',

    },
    boxDir: {
        flex: 1,
        height: '87%',
        backgroundColor: "blue"
    },
    box3: {
        flex: 3,
        flexWrap: 'wrap',
        alignContent: "space-around",
        justifyContent: 'space-around'
    },
    boxFeed: {
        width: 105,
        height: 105,
        backgroundColor: 'orange'
    },
    box4: {
        flex: .6,
        backgroundColor: "darkblue"
    },
})