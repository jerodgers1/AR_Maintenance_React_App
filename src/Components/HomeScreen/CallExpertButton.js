import React from 'react';
import { Modal, View, StyleSheet, Text,} from 'react-native';
import { Button } from 'native-base';
import {connect} from "react-redux";

class CallExpertButton extends React.Component {

    state = {
        modalVisible: false,
    };

    openModal() {
        this.setState({modalVisible:true});
    }

    closeModal() {
        this.setState({modalVisible:false});
    }

    callExpertHandler = () => {
        console.log('calling Expert for job ' + this.props.selectedJob);
    }

    render() {
        return (
            <View>
                <Modal
                    visible={this.state.modalVisible}
                    animationType={'slide'}
                    onRequestClose={() => this.closeModal()}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>
                            <Text style={{fontSize: 35}}>Call Expert?</Text>
                            <View style={styles.buttonLayout}>
                                <Button onPress={() => this.closeModal()} style={styles.cancelButton} large rounded>
                                    <Text style={{marginLeft: '15%', fontSize: 20}}> Cancel </Text>
                                </Button>
                                <Button onPress={() => this.callExpertHandler()} style={styles.callButton} large rounded>
                                    <Text style={{marginLeft: '25%', fontSize: 20}}> Call </Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Button onPress={() => this.openModal()} style={styles.expertButton} large rounded>
                    <Text style={{marginLeft: '10%', fontSize: 20}}> Call Expert </Text>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    expertButton: {
        marginLeft: 2,
        width: 140,
    },
    callButton:{
        width: 100,
        margin:'5%',
    },
    cancelButton:{
        backgroundColor: '#f93831',
        width: 100,
        margin:'5%',
    },
    buttonLayout: {
        flex: 1,
        flexDirection: 'row',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    innerContainer: {
        alignItems: 'center',
        marginTop: '-20%',
    },

});

const mapStateToProps = state => {
    return {
        selectedJob: state.jobs.selectedJob
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CallExpertButton);
