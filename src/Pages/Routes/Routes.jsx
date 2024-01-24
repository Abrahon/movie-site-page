import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import Movies from "../Movies/Movies";
import MovieSummury from "../MovieSummury/MovieSummury";
import BookingForm from "../BookingForm/BookingForm";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,

        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/movies',
                element:<Movies></Movies>
            },
            {
                path:'/moviesummury/:id',
                element:<MovieSummury></MovieSummury>,
                loader:({params})=>fetch(`https://api.tvmaze.com/shows/${params.id}`)
            },
            {
                path:'/bookingform',
                element:<BookingForm></BookingForm>
            }
        ]
    }
])