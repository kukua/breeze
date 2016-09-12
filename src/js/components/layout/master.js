import React from 'react'

export default class Master extends React.Component {
    render() {
        return (
            <div class="container">
                {this.props.children}
            </div>
        )
    }
}

Master.propTypes = {
    children: React.PropTypes.element
}
