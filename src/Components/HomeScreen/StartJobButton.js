import React from 'react';
import {View, StyleSheet, Text, ListView} from 'react-native';
import { Button } from 'native-base';
import {connect} from "react-redux";
import {selectJob} from "../../store/actions";
import {Navigation} from "react-native-navigation";

const StartJobButton = props => {
        return (
            <View>
                <Button onPress={() => props.onJobStarted()} style={styles.startButton} large rounded>
                    <Text style={{marginLeft: '25%', fontSize: 20}}> Start </Text>
                </Button>
            </View>
        );
}

const styles = StyleSheet.create({
    startButton: {
        marginLeft: '30%',
        width: 140,
    },
});
export default StartJobButton;
// const mapStateToProps = state => {
//     return {
//         selectedJob: state.jobs.selectedJob
//     };
// };
//
// const mapDispatchToProps = dispatch => {
//     return {
//        // StartJob: job => dispatch(StartJob(job)),
//     };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(StartJobButton);
//
