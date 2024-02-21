import React from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from '../../Schemas'

const initialValues = {
    email: "",
    password: "",
};
function UserLogIn() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log("hello", values);
            action.resetForm();
        }
    })
    return (
        <>
            <form className="login-form-container" onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className='input-block'>
                    <input type="email"
                        placeholder="Username"
                        name='email'
                        className="input-field"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <br />
                    {errors.email && touched.email ? (
                        <span className='text-danger'>{errors.email}</span>) : null}
                </div>
                <br />
                <div className='input-block'>
                    <input type="password"
                        placeholder="Password"
                        name='password'
                        className="input-field"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />

                    <br />
                    {errors.password && touched.password ? (
                        <span className='text-danger'>{errors.password}</span>) : null}
                </div>
                <br />
                <button className="login-button" type="submit">
                    Login
                </button>
            </form>
        </>
    )
}

export default UserLogIn