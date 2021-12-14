import react from 'react'
import { useRoutes } from 'react-router'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'


export const AppRouter = () => {

    const routes = useRoutes ([
        {path: "/", element: <ItemListContainer />},
        {path: "/Productos/:catId/", element: <ItemListContainer />},
        {path:"/detail/:prodId", element: <ItemDetailContainer /> },
        {path:"/cart", element: <CartView />},
        {path:"/chekout", element: <Chekout/>},
        {path:"*", element: <Navigate ro="/"/>},

    ])
}