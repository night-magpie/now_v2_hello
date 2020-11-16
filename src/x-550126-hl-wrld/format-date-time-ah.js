const formatDateTimeAH = () => {
        return ({
                'NOW_DROPDOWN#ITEM_CLICKED': (coeffects) => {
                        const {updateState} = coeffects;
                        const {id} = coeffects.action.payload.item;
                        
                        updateState({clock_format: id});
                }
        });
   }
   
   export {formatDateTimeAH};