import React from 'react';
import { StyleSheet, Text, View, ListView} from 'react-native';
import { connect } from "react-redux";
import { Container, Header, Title, Button, Left, Right, Body, Icon, Drawer } from 'native-base';
//redux
import { addPlace, deletePlace, selectPlace, deselectPlace} from "../../store/actions/index";

import JobList from '../../Components/HomeScreen/JobList.js';
import CallExpertButton from "../../Components/HomeScreen/CallExpertButton";
import  StartJobButton  from "../../Components/HomeScreen/StartJobButton";
import {addJob} from "../../store/actions";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    startJobScreen = ()=> {
        this.props.navigator.push({
            screen: "AR_Maintenace_App.JobScreen",
            title: this.props.selectedJob,
            navigatorStyle: {navBarBackgroundColor: '#c8c8c8'}
        });
    };

    render() {
        return (
            <Container>
                {/*welcome screen*/}
                <View style={styles.container}>
                    {/*left side of the app*/}
                    <JobList />
                    {/*This is how you would pass props if I wasn't using Redux*/}
                    {/*<JobList jobList={this.state.jobs}/>*/}
                    <View style={styles.mainScreen}>
                        <View style={styles.messageView}>
                            <Text style={styles.message}>Welcome to AR Maintenance</Text>
                        </View>
                        {this.props.showButtons ? (<View style={styles.mainMenuButtons}>
                            <CallExpertButton />
                            <StartJobButton onJobStarted={this.startJobScreen}/>
                        </View>) : (<View style={{height: '100%'}}/>)}
                    </View>
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
        fontSize: 44,
        color: '#2b70ec',
        fontFamily: 'Roboto',
        textShadowOffset: {width: 2, height: 2},
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
        selectedJob: state.jobs.selectedJob,
        jobList: state.jobs.jobs
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
