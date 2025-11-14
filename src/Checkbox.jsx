import { Component } from 'react';

export default class Checkbox extends Component {
	constructor(props) {
		super(props);

		this.click = this.click.bind(this);
	}

	click() {
		console.log("Box is clicked");
		this.props.clickHandler();
	}

	render() {
		var classes = this.props.selected ? "checkbox checked" : "checkbox unchecked";

		return (
			<>
				<div className={classes} id={this.props.idName} onClick={this.click} />
				<h1>{this.props.boxText}</h1>
			</>
		)
	}
}