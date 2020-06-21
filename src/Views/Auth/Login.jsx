import React, {useContext} from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import './Login.css'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Particle from '../../App/Particle';
const LoginContainer = styled.div`
    width: 520px;
    height: 320px;
    -webkit-box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.086);  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow:    3px 3px 5px 6px rgba(0, 0, 0, 0.086);  /* Firefox 3.5 - 3.6 */
    box-shadow:         3px 3px 5px 6px rgba(0, 0, 0, 0.086);  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 12px;
    margin: auto;
    ${({theme}) => theme.medium`
        width: 320px
    `}
`
const LoginLayout = styled.div`
    display: flex;
    ${({theme}) => theme.medium`
        display: flex;
        flex-direction: column
    `}
`
const Label = styled.div`
    color: ${props => props.theme.currentTheme.textColor};
    padding: 8px
`
const Text = styled.div`
    text-align: center;
    color: ${props => props.theme.currentTheme.textColor};
    padding: 8px
`

export  const Login = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory()
    const {dispatch} = useContext(AuthContext)
    const onSubmit = data => {
      window.localStorage.setItem('user', JSON.stringify({name: 'ziddi', id: 1}))
      dispatch({type: 'login_success', payload: {name: 'ziddi', id: 1}})
      redirectToTargetPage()
    }; // your form submit function which will invoke after successful validation
    const redirectToTargetPage = () => {
        history.push("/");
    }
    
    // console.log(watch("example")); // you can watch individual input by pass the name of the input
    return (
        <LoginContainer>
            <LoginLayout>
                <Particle  />
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <input name="email" type="email"  ref={register({required:true})} />
                    {errors.email && <p>This field is required</p>}
                    <Label>Password</Label>
                    <input
                        name="password"
                        type="password"
                        ref={register({ required: true, maxLength: 10 })}
                    />
                    {errors.password && <p>This field is required</p>}
                    <input type="submit" />
                </form>
                <Text>Don't have account <a href="">Register</a> </Text>
                </div>
            </LoginLayout>
            
        </LoginContainer>
    )
}
