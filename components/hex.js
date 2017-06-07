import React from 'react'

export default class Hex extends React.Component {
	render(){
		return (
			<li className='hex'>
				<div className="hexIn">
					<a className="hexLink" href={this.props.number}>
						<img src={this.props.url} alt=''/>
						<h1>{this.props.title}</h1>
						<p>{this.props.short}</p>			
					</a>
				</div>
			</li>
		);
	}
}