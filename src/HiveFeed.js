import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
const marked = require('marked');
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
                let image = '';
                let metadata;

		for (entry in this.state.data.result){
			if (valid_cnt >= post_count) break;
			if (this.state.data.result[entry].author !== hive_user) continue;
			valid_cnt++;
			full_url = hive_base_url + "/@" +
						hive_user + "/" +
						this.state.data.result[entry].permlink;
                        image = "blog_blank.png";
                        metadata = JSON.parse( this.state.data.result[entry].json_metadata );
                        image = metadata.image ? metadata.image[0] : image;

			list_arr.push(
                <a href={full_url} target="_bland">
                <div class="row row-blog-entry">
                <div class="row">
                <h4>{this.state.data.result[entry].title}</h4>
                </div>
                <div class="row justify-content-center">
                <img src={image} class="img-thumbnail img-25"></img>
                </div>
                </div>
                </a>
			);

		}

		return( list_arr );

  	}
	/* render: end */

}

export default HiveFeed;
