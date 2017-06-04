import React from 'react'
import Hex from './hex.js'

export default class HexGrid extends React.Component {
	render(){
		return (
			postlist.map(function(el){
				return (
					<Hex
						number = {el.number}
						url = {el.url}
						title={el.title}
						short={el.short}
					/>
				);
			})
		);
	}
}