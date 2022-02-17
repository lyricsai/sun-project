import React from 'react';
import Header from './Header';
import { connect } from 'react-redux'


class HeaderContainer extends React.Component {

    render() {

        return (
            <Header {...this.props} />
        )
    }
}

let mapsStateToProps = (state) => ({

})


export default connect(mapsStateToProps, {})(HeaderContainer);