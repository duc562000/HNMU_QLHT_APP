import * as React from 'react';
//@ts-ignore
import { ActivityIndicator, ActivityIndicatorProps, StyleSheet } from 'react-native';

const StyledIndicator: React.FunctionComponent<ActivityIndicatorProps> = (props: ActivityIndicatorProps) => {
    return <ActivityIndicator color={'red'} size={'small'} style={styles.container} {...props} />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default StyledIndicator;
