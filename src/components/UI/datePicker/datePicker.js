import 'date-fns';
import React from 'react';
import {
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './datepicker.css'

export default function DatePicker({ field, form, label, ...other }) {
  // The first commit of Material-UI
 // const [selectedDate, setSelectedDate] = React.useState(new Date());

 // const handleDateChange = (date) => {
 //   setSelectedDate(date);
  //  form.setFieldValue(field.name, date, false);
 // };
  const currentError = form.errors[field.name];

  return (
   
       <KeyboardDatePicker
      clearable
      disableFuture
      name={field.name}
      value={field.value}
      label={label}
      format="dd/MM/yyyy"
      helperText={currentError}
      error={Boolean(currentError)}
      onError={error => {
        // handle as a side effect
        if (error !== currentError) {
          form.setFieldError(field.name, error);
        }
      }}
      // if you are using custom validation schema you probably want to pass `true` as third argument
      onChange={date => form.setFieldValue(field.name, date, false)}
      {...other}
    />
     
  );
}
