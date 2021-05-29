import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  TextField,
} from '@material-ui/core';

function Security() {
  return (
    <Formik
      initialValues={{
        password: '',
        passwordConfirm: '',
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string().min(7, 'Must be at least 7 characters').max(255).required('Required'),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Required'),
      })}
      onSubmit={async (values, { resetForm, setStatus, setSubmitting }) => {
        try {
          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
        } catch (error) {
          setStatus({ success: false });
          // setErrors({ submit: error.message });
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader title="Change Password" />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={4} sm={6} xs={12}>
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="Password"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                  <TextField
                    error={Boolean(touched.passwordConfirm && errors.passwordConfirm)}
                    fullWidth
                    helperText={touched.passwordConfirm && errors.passwordConfirm}
                    label="Password Confirmation"
                    name="passwordConfirm"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.passwordConfirm}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              {(errors.password || errors.passwordConfirm) && (
                <Box mt={3}>
                  <FormHelperText error>{errors.password || errors.passwordConfirm}</FormHelperText>
                </Box>
              )}
            </CardContent>
            <Divider />
            <Box p={2} display="flex" justifyContent="flex-end">
              <Button color="secondary" disabled={isSubmitting} type="submit" variant="contained">
                Change Password
              </Button>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
}

export default Security;
