import * as React from 'react';
//@ts-ignore
import { ActivityIndicator,TouchableOpacity, Text,StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';

interface StyledListNoDataProps {
    text?: string;
    canRefresh?: boolean;
    loading?: boolean;
    onRefresh?(): any;
    customStyle?: StyleProp<ViewStyle>;
    customStyleText?: StyleProp<TextStyle>;
}

 
const StyledNoData: React.FunctionComponent<StyledListNoDataProps> = (props: StyledListNoDataProps) => {
    return (
        <View style={[styles.container, props.customStyle]}>
            {props.loading ? (
                <View style={{ alignItems: 'center' }}>
                    <ActivityIndicator />
                </View>
            ) : (
                <Text>Khong co data</Text>
            )}
            {!!props.canRefresh && !props.loading ? (
                <TouchableOpacity onPress={props.onRefresh}>
                    <Text>Reload</Text>
                </TouchableOpacity>
            ) : (
                <View />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    text: {
        fontWeight: '600',
        fontSize: 14,
        color: 'red',
        textAlign: 'center',
    },
    textReload: {
        margin: 12,
        color: 'red',
    },
});

export default StyledNoData;
