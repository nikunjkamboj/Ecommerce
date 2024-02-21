import React from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from '../../Schemas'

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};

function Sign_up() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log("hello", values);
            action.resetForm();
        }
    })
    // console.log("hello input",errors);

    return (
        <>
            <form onSubmit={handleSubmit} className="login-form-container">
                <h1>Signup Form</h1>

                <div className='input-block'>
                    <input type="text"
                        name='name'
                        placeholder='Enter Name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="input-field" />
                    <br />
                    {errors.name && touched.name ? (
                        <span className='text-danger'>{errors.name}</span>) : null}
                </div>

                <br />
                <div className='input-block'>
                    <input type="email"
                        name='email'
                        placeholder='Enter Email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="input-field" />
                    <br />
                    {errors.email && touched.email ? (
                        <span className='text-danger'>{errors.email}</span>) : null}
                </div>

                <br />
                <div className='input-block'>
                    <input type="password"
                        autoComplete='off'
                        name='password'
                        placeholder='Enter Password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="input-field" />

                    <br />
                    {errors.password && touched.password ? (
                        <span className='text-danger'>{errors.password}</span>) : null}
                </div>

                <br />
                <div className='input-block'>
                    <input type="password"
                        autoComplete='off'
                        name='confirm_password'
                        placeholder='Enter Confirm Password'
                        value={values.confirm_password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="input-field" />
                    <br />
                    {errors.confirm_password && touched.confirm_password ? (
                        <span className='text-danger'>{errors.confirm_password}</span>) : null}
                </div>
                <br />

                <button type="submit" className="login-button">
                    Signup
                </button>
            </form>
        </>
    )
}

export default Sign_up