import HomePage from './HomePage/HomePage'
import LoginPage from './LoginPage/LoginPage'

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
]
