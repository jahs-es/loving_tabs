import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import List from "./List";

const Root = () => (
	<BrowserRouter>
		<div>
			<Route exact path="/" component={List}/>
		</div>
	</BrowserRouter>
);

export default Root;
