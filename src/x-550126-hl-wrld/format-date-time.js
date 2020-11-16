import '@servicenow/now-dropdown';

const ACCEPTED_DATE_TIME_FORMATS = [
        {"id":"toLocaleString","label":"Locale string"},
        {"id":"toISOString","label":"ISO string"},
        {"id":"toUTCString","label":"UTC string"}];



const FormatDateTime = (props) => {
        
        const {format} = props;
                        
    return (<now-dropdown
   
            items={ACCEPTED_DATE_TIME_FORMATS}
            selectedItems={[format]}
            select="single"
            placeholder=""
            variant="secondary"
            size="md"
            tooltipContent=""
            panelFitProps={{}}
            configAria={{}}>
            </now-dropdown>);
}

export {FormatDateTime, ACCEPTED_DATE_TIME_FORMATS};