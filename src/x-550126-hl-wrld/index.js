import {createCustomElement, actionTypes} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import Clock from './clock';
import HelloButton from './hello-button';
import helloButtonAH from './hello-button-ah';
import FormatDateTime,  {ACCEPTED_DATE_TIME_FORMATS} from './format-date-time';
import formatDateTimeAH from './format-date-time-ah';

const {COMPONENT_BOOTSTRAPPED} = actionTypes;

const view = (state, {updateState}) => {

	const {clock_time, clock_format, hello_text} = state;

	return (
		<div width="100%" align="center">
			<Clock date={clock_time} format={clock_format}/>
			<br/>
			<FormatDateTime format={clock_format}/>
			<br/>
			<HelloButton text={hello_text}/>
		</div>
	);
};

createCustomElement('x-550126-hl-wrld', {
	actionHandlers: {...helloButtonAH(),...formatDateTimeAH(),
	[COMPONENT_BOOTSTRAPPED]: (coeffects) => {
		const {updateState} = coeffects;
		
		setInterval(() => {updateState({clock_time: new Date()})}, 1000);
	}
	},
	initialState: {
		clock_time: new Date(),
		clock_format: ACCEPTED_DATE_TIME_FORMATS[0].id,
		hello_text: "Hello"
	},
	renderer: {type: snabbdom},
	view,
	styles
});
