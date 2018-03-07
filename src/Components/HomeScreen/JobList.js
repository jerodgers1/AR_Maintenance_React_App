import React from 'react';
import { StyleSheet, Text, View, ListView} from 'react-native';
import { connect } from "react-redux";
import {selectJob} from "../../store/actions";

class JobList extends React.Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isReady: false,
            dataSource: ds.cloneWithRows(this.props.jobs),
        };
    }

    selectJobHandler = selected => {
        this.props.onSelectJob(selected);
        console.log(this.props.selectedJob);
    };

    i = 1;

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    style={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text onPress={() => this.selectJobHandler(rowData)} style={styles.listItems}>
                        {this.i++}) { rowData }
                    </Text>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        paddingLeft: 40,
    },
    listItems: {
        fontSize: 25,
        paddingTop: 10,
        color: 'black',
        textShadowOffset: {width: 1, height: 1}
    },
    container: {
        width: '35%',
        height: '100%',
        alignSelf: 'flex-start',
        borderRightWidth: 1,
        borderRightColor: '#7c7f99'

    },
});



const mapStateToProps = state => {
    return {
        jobs: state.jobs.jobs,
        selectedJob: state.jobs.selectedJob
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectJob: job => dispatch(selectJob(job)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);

