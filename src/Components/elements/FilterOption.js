import React from 'react';


export default class FilterOption extends React.Component {	
	
  constructor(props) {
		super(props)
		this.filterHandler=this.filterHandler.bind(this)
		this.state = {
		  filter: ""
		};
  }	
  
   filterHandler(changeEvent)  {
        var filterBy = changeEvent.target.value
		this.setState({filter: filterBy});
        this.props.filterHandler(filterBy);
   }
	
  render() {
	  
	  var filterOption = [	{'key':'relevant','value':'Relevant'},
							{'key':'popular','value':'Popular'},
							{'key':'lowprice','value':'Low price'},
							{'key':'highprice','value':'High Price'},
							{'key':'new','value':'New'}
							].map((option) => {
					return (
							<span key={option.key}>
							  <label>
								<input type="radio" value={option.key}
											  checked={this.state.filter === option.key} 
											  onChange={this.filterHandler} />
											  {option.value}
							  </label>
							</span>
						);
				});
	  
	  
	  
	  
	return ( 
			<form className='filter-option'>
				{filterOption}
			</form>
		)
  }
}
  
