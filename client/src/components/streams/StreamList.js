import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }
    renderList = () => {
        this.props.streams.map(stream => {
            return <div>{stream.title}</div>
        })
    }
    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
}
}

const mapStateToProps = (state) => {
    return {
        streams: state.streams
    };
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);
