import HomePage from './HomePage/HomePage'
import LoginPage from './LoginPage/LoginPage'
import RegisterPage from './RegisterPage/RegisterPage'

export const pagesData=[
    {
        path: "/",
        element: <HomePage/>,
        title: "HomePage",
    },
    {
        path: "/login",
        element: <LoginPage/>,
        title: "Login",
    },
    {
        path: "/register",
        element: <RegisterPage/>,
        title: "Register",
    },
]
