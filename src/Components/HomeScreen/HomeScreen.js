import React from 'react';
import { StyleSheet, Text, View, ListView} from 'react-native';
import { connect } from "react-redux";
import { Container, Header, Title, Button, Left, Right, Body, Icon, Drawer } from 'native-base';
//redux
import { addPlace, deletePlace, selectPlace, deselectPlace} from "../../store/actions/index";

import JobList from './JobList.js';
import CallExpertButton from "./CallExpertButton";
import  StartJobButton  from "./StartJobButton";

class HomeScreen extends React.Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isReady: false,
            jobs: ['Change Light Bulb', 'Make PB&J'],
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }

    render() {

        return (
            <Container>
                <Header style={{backgroundColor: '#c8c8c8'}}>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{color: 'black', marginLeft: '-23%', fontSize: 22}}>Shipcom Wireless AR Mainenace</Title>
                    </Body>
                    <Right />
                </Header>

                {/*welcome screen*/}
                <View style={styles.container}>
                    {/*left side of the app*/}
                    <JobList jobList={this.state.jobs}/>
                    <View style={styles.mainScreen}>
                        <View style={styles.messageView}>
                            <Text style={styles.message}>Welcome to AR Maintenance</Text>
                        </View>
                        {this.props.showButtons ? (<View style={styles.mainMenuButtons}>
                            <CallExpertButton/>
                            <StartJobButton/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
