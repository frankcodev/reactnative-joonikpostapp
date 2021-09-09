import { StyleSheet } from "react-native";
import { colors } from "../../config/consts";

export const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 1,
        borderRadius: 18,
        borderColor: colors.darkTwo,
        padding: 10,
    },
    imageContainer: {
        width: 90,
        height: 90,
        backgroundColor: colors.bgPic,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    image: {
       width: 90,
       height: 90,
       position: 'absolute',
       zIndex: 1
    },
    title: {
        color: colors.darkOne,
        fontSize: 18,
        fontWeight: '600'
    },
    contentContainer: {
        maxHeight: 200,
        marginLeft: 14,
        paddingHorizontal: 6
    },
    content: {
        color: colors.darkOne,
        fontSize: 16,
        fontWeight: '500',
        marginTop: 8
    }
})