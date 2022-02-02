import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import s from './Login.module.css';
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {createField, Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import CustomButton from "../common/CustomButton/CustomButton";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    error: string
}
type MapStateToPropsType = {
    isAuth: boolean
    isFetching: boolean
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha?: boolean) => void
}

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

const LoginForm = ({handleSubmit, error}: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={handleSubmit} className={s.formElementsPosition}>
            {createField('Login', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField('', 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
            {
                error && <div style={{color: 'red'}}>{error}</div>
            }
            <div>
                <CustomButton purple>Login</CustomButton>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching
    }
}

const Login = (props: LoginPropsType) => {
    const onSubmitHandler = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) return <Redirect to={'/profile'}/>
    return (
        <div className={s.loginContainer}>
            <div className={s.loginElementsPosition}>
                <div>
                    <h1 className={s.formName}>LOGIN</h1>
                </div>
                <div>
                    <LoginReduxForm onSubmit={onSubmitHandler}/>
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, {login})(Login);