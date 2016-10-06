import React from 'react'

import Map from './map'
import Sidebar from './sidebar'

export default class Index extends React.Component{
	render() {
		return (
			<div>
				<Map />
				<Sidebar />
			</div>
		)
	}
}
