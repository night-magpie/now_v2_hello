const helloButtonAH = () => {
     return ({'NOW_BUTTON#CLICKED': (coeffects) => {
          const {clock_time} = coeffects.state;
          const {updateState} = coeffects;

          let hours = clock_time.getHours();
          let hello_text = "Hello";

               if ((hours >= 22) || (hours <= 4 )) hello_text = "Good night";
		else if ((hours >= 5 ) && (hours <= 11)) hello_text = "Good morning";
		else if ((hours >= 12) && (hours <= 17)) hello_text = "Good afternoon";
          else if ((hours >= 18) && (hours <= 21)) hello_text = "Good evening";
          
          updateState({hello_text})
          setTimeout(() => {updateState({hello_text: "Hello"})}, 1777)
          console.log(coeffects.action.payload)}});
}

export {helloButtonAH};