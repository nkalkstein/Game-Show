import React, { Component } from 'react';
import MainPage from './MainPage';
import Question from './question'


class Question extends Component{

	state = {

		question = ''

	}


componentDidMount() {

	     retrieveQuestion({key: API_KEY, term: `${cityName} ${countryName} food`, maxResults: 6}, (videos) => {
	            this.setState({
	            	question: question

	            })
	          })
	       }



export default Question
