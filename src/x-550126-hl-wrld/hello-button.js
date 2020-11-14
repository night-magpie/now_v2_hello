import '@servicenow/now-button';

const HelloButton = (props) => {
    return (<now-button
            label={props.text}
            variant="primary"
            size="lg"
            configAria={{}}
            append-to-payload={{label: "Hello"}}
            tooltipContent="">
            </now-button>);
}

export default HelloButton;