const formatDateTimeAH = () => {
        return ({
                'NOW_DROPDOWN#ITEM_CLICKED': (coeffects) => {
                        const {updateState} = coeffects;
                        const {id} = coeffects.action.payload.item;
                        
                        updateState({clock_format: id});
                /*console.log(coeffects.action.payload)*/}
                //'NOW_DROPDOWN#OPENED_SET': (coeffects) => {console.log("opened set")},
                //'NOW_DROPDOWN#SELECTED_ITEMS_SET': (coeffects) => {console.log("selected items set")}
        });
   }
   
   export default formatDateTimeAH;