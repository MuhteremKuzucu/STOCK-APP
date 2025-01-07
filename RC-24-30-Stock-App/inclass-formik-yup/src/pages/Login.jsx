import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/hero.png";
import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik } from "formik";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";

const Login = () => {
  const theme = useTheme();

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Geçerli bir Email giriniz")
      .required("Email zorunludur"),
    password: Yup.string()
      .required("Password zorunludur")
  });

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.main",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography variant="h4" align="center" mb={4} color="secondary.main">
            SIGN IN
          </Typography>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {}}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  type="email"
                  margin="normal"
                />
                <TextField
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && errors.password}
                  helperText={touched.password && errors.password}
                  label="Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  margin="normal"
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  margin="normal"
                >
                  SUBMIT
                </Button>
              </form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/register">Don't have an account? Sign Up</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Login;
