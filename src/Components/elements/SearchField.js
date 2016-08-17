import React from "react";


export default class SearchField extends React.Component {

	constructor(props) {
		super(props)
		this.searchHandler=this.searchHandler.bind(this)
		this.state = {
		  searchKey: ""
		};
		
    }

    searchHandler(event) {
        var searchKey = event.target.value;
		this.setState({searchKey: searchKey});
        this.props.searchHandler(searchKey);
    }
    
	render() {
        return (
            <div className="">
                <input type="search" value={this.state.symbol} onChange={this.searchHandler}/>
            </div>
        );
    }
}
