import React from "react";
import { Formik, Field, Form } from "formik";
import Button from "@material-ui/core/Button";
import DatePicker from "../UI/datePicker/datePicker";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

const target = ["Тип 1", "Тип 2", "Тип 3", "Тип 4"];

export const SearchForm = ({ onSubmit}) => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center" width={1}>
      <div className={classes.SearchForm}>
        <h1>Get Report</h1>
        <Formik
          initialValues={{
            dateFrom: new Date(),
            dateTo: new Date(),
            interval: '',
            target: [],
          }}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {({ values, handleChange, handleSubmit}) => (
            <Form onSubmit={handleSubmit}>
              <Box>
                <Field name="dateFrom" label="От" component={DatePicker} />
                <Field name="dateTo" label="До" component={DatePicker} />
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Интервал
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="interval"
                    value={values.interval}
                    onChange={handleChange}
                  >
                    <MenuItem value={"Auto"}>Авто</MenuItem>
                    <MenuItem value={"Days"}>По дням</MenuItem>
                    <MenuItem value={"Hours"}>По часам</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-mutiple-name-label">Типы ИС</InputLabel>
                  <Select
                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    multiple
                    name="target"
                    value={values.target}
                    onChange={handleChange}
                    input={<Input />}
                  >
                    {target.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                  Получить отчет
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </div>
    </Box>
  );
};
