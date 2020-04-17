import React, { Component } from 'react'

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			error: null
		}
	}
	static getDerivedStateFromError(error) {
		return { hasError: true, error: error.error }
	}

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
	  }
	  
	render() {
		if(this.state.hasError) {
			return (
			<div>
				{this.state.error}
			</div>
			)
		}
		return this.props.children
	}
}