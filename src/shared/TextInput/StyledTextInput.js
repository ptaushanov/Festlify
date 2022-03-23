import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-paper'

const StyledTextInput = ({ error = false, helperText = '', helperTextStyles = {}, ...otherProps }) => {
    const { colors } = useTheme();
    return (
        <View>
            <TextInput
                {...otherProps}
                style={[
                    styles.input,
                    otherProps.style,
                ]}
            />
            <Text style={[
                styles.helperText,
                {
                    display: helperText ? "flex" : "none",
                    color: error ? colors.danger : "#333"
                },
                helperTextStyles
            ]}>
                {helperText}
            </Text>
        </View>
    )
}

export default StyledTextInput

const styles = StyleSheet.create({
    input: {
        backgroundColor: "whitesmoke",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    helperText: {
        fontSize: 14
    }
})