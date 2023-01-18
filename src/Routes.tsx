import { Route } from 'react-router'
import {Routes} from 'react-router-dom'
import { DefaultLayout } from './Layouts/DefaultLayout'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { HomePage } from './pages/home'
import { OrderConfirmed } from './pages/OrderComfirmed'

export function Router (){
    return(
    <Routes>
        <Route path='/'element={<DefaultLayout />}>
        <Route path="/"element={<HomePage/>} />
        <Route path="/completeOrder"element={<CompleteOrderPage/>} />
        <Route path="/orderConfirmed" element={<OrderConfirmed />} />
        </Route>
    </Routes>
    );
}