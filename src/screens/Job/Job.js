import React from 'react';
import { StyleSheet, Text, View, ListView} from 'react-native';
import { connect } from "react-redux";
import { Container, Header, Title, Button, Left, Right, Body, Icon, Drawer } from 'native-base';
//redux
import { addPlace, deletePlace, selectPlace, deselectPlace} from "../../store/actions/index";
import {Navigation} from "react-native-navigation";

//import JobList from '../../Components/HomeScreen/JobList.js';

class Job extends React.Component {

    render() {

        return (
            <Container>
                <View style={styles.container}>
                   <Text>JOB SCREEN: waiting on Prativa Devkota and Rolando Rivera to commit their components</Text>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    mainScreen: {
        width: '60%',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#c8c8c8',
        justifyContent: 'flex-start',
    },
    mainMenuButtons:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#c8c8c8',
        paddingTop: 30,
        paddingLeft: '22%',
    },
    message: {
        textAlign: 'center',
        fontSize: 40,
        color: 'blue',
    },
    messageView: {
        paddingTop: '15%',
    },
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#cecece',
        alignItems: 'flex-start',
    },
});


const mapStateToProps = state => {
    return {
        showButtons: state.jobs.showButtons,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Job);
