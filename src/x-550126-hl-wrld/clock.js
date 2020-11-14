const Clock = (props) => {

	const {date, format} = props;
	
	return (<h1>Current time: {date[format]()}</h1>);
    }
    
export default Clock;