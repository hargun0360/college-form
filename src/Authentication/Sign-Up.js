import React, { useState } from "react";
// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Row,
} from "reactstrap";

// import images
import profile from "../Assets/images/profile-img.png";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import { doSignupUser } from "../Services/ApiServices";
import Spinner from '../Components/Spinner'
import { useSelector,useDispatch } from 'react-redux';

const Signup = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{4,}[@][a][k][g][e][c][\.][a][c][\.][i][n]$/i
  const dispatch = useDispatch();
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: '',
    },
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Required!'
      } else if (!regex.test(values.email)) {
        errors.email = 'Invalid email format!'
      }
      return errors;
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      doSignupUser(values)
        .then((res) => {
          // console.log(res);
          setLoading(false)
          swal({
            title: "OTP is Sent Successfully",
            text: "",
            icon: "success",
            button: "OK",
          });
          // localStorage.setItem("token",res.data.access);
          // localStorage.setItem("rtoken",res.data.refresh);
          navigate("/otp", { state: values });
        }).catch((e) => {
          console.log(e);
          setLoading(false)
          swal({
            title: e.data.status ? e.data.status : e.data.non_field_errors[0] ,
            text: "",
            icon: "error",
            button: "OK",
          });
        })
    }
  });

  const handleLogin = () => {
    navigate("/")
  }

  return (
    <React.Fragment>
      {
        loading ? <Spinner /> : null
      }
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-light bg-soft">
                  <Row>
                    <Col xs={7} className="mt-3">
                      <div className="text-primary p-4">
                        <h4 className="text-primary">Signing Up</h4>
                      </div>
                    </Col>
                    <Col xs={5} className="align-self-end">
                      <img
                        src={profile}
                        alt=""
                        className="img-fluid"
                      />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">

                  <div className="p-2">
                    <div
                      className="alert alert-success text-center mb-4"
                      role="alert"
                    > Enter your Email and password will be sent to you! </div>

                    <Form className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      <div className="mb-3">
                        <Label className="form-label">Email</Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="example@akgec.ac.in"
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email ? true : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                        ) : null}
                      </div>
                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary w-md"
                          type="submit"
                        >
                          Sign Up
                        </button>
                      </div>
                    </Form>
                  </div>
                </CardBody>
                <div className="mt-2 text-center">
                  <p>
                    Already have an account? <span className=" text-primary" style={{ cursor: "pointer" }} onClick={handleLogin}>Login</span>
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Signup;
