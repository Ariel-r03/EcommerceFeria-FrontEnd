import HomePage from './HomePage/HomePage'
import AuthPage from './AuthPage/AuthPage'

export const pagesData=[
    {
        path: "/",
        element: <HomePage/>,
        title: "HomePage",
    },
    {
        path: "/authpage",
        element: <AuthPage/>,
        title: "AuthPage",
    },
]
