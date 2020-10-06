import React from 'react';
const fetch = require( 'node-fetch' );
const hive_user = 'borepstein';
const post_count = 5;
const post_search_count = 100;
const hive_api_url = 'https://api.openhive.network';
const hive_base_url = 'https://peakd.com';
	
class HiveFeed extends React.Component {
	/* constructor: start */
	constructor() {
	    super();
    	this.state = { data: [] };
  	}
	/* constructor: end*/

	/* componentDidMount: begin */
	componentDidMount(){
		var options = {
			method: 'POST', 
			body: JSON.stringify(
				{jsonrpc:"2.0", 
					method: "condenser_api.get_discussions_by_blog", 
					params: [{tag:hive_user, limit:post_search_count}], 
					id:1
				}
			), 				 
			mode: "cors"
		};
		
		fetch(hive_api_url, options)
			.then(res => res.json())
			.then(json => this.setState({ data: json }));		
	}
	/* componentDidMount: end */
	
	/* render: start */			
  	render() {		
		let entry;
		let valid_cnt = 0;
		let full_url;
		let list_arr = [];
		
			
		for (entry in this.state.data.result){
			if (valid_cnt >= post_count) break;
			if (this.state.data.result[entry].author !== hive_user) continue;
			valid_cnt++;
			full_url = hive_base_url + "/@" +
						hive_user + "/" +
						this.state.data.result[entry].permlink;
			
			list_arr.push(						
				<p>
					<a href={full_url}>{this.state.data.result[entry].title}</a>
				</p>
			);						
		}
				
		return( list_arr );
		
  	}
	/* render: end */

}

export default HiveFeed;