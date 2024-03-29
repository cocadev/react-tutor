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
  Grid,
  Switch,
  TextField,
  Typography,
} from '@material-ui/core';
import { SettingsMockedUser } from './index';

const stateOptions = ['Alabama', 'New York', 'San Francisco'];

type Props = {
  user: SettingsMockedUser;
};

function GeneralSettings({ user }: Props) {
  return (
    <Formik
      enableReinitialize
      initialValues={{
        canHire: user.canHire,
        country: user.country,
        email: user.email,
        firstName: user.firstName,
        isPublic: user.isPublic,
        lastName: user.lastName,
        phone: user.phone,
        state: user.state,
      }}
      validationSchema={Yup.object().shape({
        country: Yup.string().max(255).required('Country is required'),
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        firstName: Yup.string().max(255).required('First name is required'),
        lastName: Yup.string().max(255).required('Last name is required'),
      })}
      onSubmit={async (values, { resetForm, setStatus, setSubmitting }) => {
        try {
          // await dispatch(updateProfile(values));
          resetForm();
          setStatus({ success: true });
          // enqueueSnackbar('Profile updated', {
          //   variant: 'success'
          // });
        } catch (error) {
          setStatus({ success: false });
          // setErrors({ submit: error.message });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader title="Profile" />
            <Divider />
            <CardContent>
              <Grid container spacing={4}>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.firstName && errors.firstName)}
                    fullWidth
                    helperText={touched.firstName && errors.firstName}
                    label="First Name"
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    type="firstName"
                    value={values.firstName}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.lastName && errors.lastName)}
                    fullWidth
                    helperText={touched.lastName && errors.lastName}
                    label="Last Name"
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    type="lastName"
                    value={values.lastName}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email ? errors.email : 'We will use this email to contact you'}
                    label="Email Address"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.phone && errors.phone)}
                    fullWidth
                    helperText={touched.phone && errors.phone}
                    label="Phone Number"
                    name="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Select State"
                    name="state"
                    onChange={handleChange}
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                  >
                    {stateOptions.map(state => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.country && errors.country)}
                    fullWidth
                    helperText={touched.country && errors.country}
                    label="Country"
                    name="country"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    type="country"
                    value={values.country}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography variant="h6" color="textPrimary">
                    Make Contact Info Public
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Means that anyone viewing your profile will be able to see your contacts details
                  </Typography>
                  <Switch checked={values.isPublic} edge="start" name="isPublic" onChange={handleChange} />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography variant="h6" color="textPrimary">
                    Available to hire
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Toggling this will let your teammates know that you are available for acquiring new projects
                  </Typography>
                  <Switch checked={values.canHire} edge="start" name="canHire" onChange={handleChange} />
                </Grid>
              </Grid>
              {/* {errors.submit && (
                <Box mt={3}>
                  <FormHelperText error>
                    {errors.submit}
                  </FormHelperText>
                </Box>
              )} */}
            </CardContent>
            <Divider />
            <Box p={2} display="flex" justifyContent="flex-end">
              <Button color="secondary" disabled={isSubmitting} type="submit" variant="contained">
                Save Changes
              </Button>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
}

export default GeneralSettings;
