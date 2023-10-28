import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Booking from "../Booking/Booking";

const Bookings = () => {

    const [bookings, setBookings] = useState([])
    console.log(bookings);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/checkout?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setBookings(data))
        }
    }, [user?.email])

    const handleDeleteCheckout = (id) => {
        fetch(`http://localhost:5000/checkout/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div>
            <h2 className="text-xl font-bold text-center text-[#f3411d]
            ">Your Bookings List</h2>
            <hr className="my-2 w-1/2 mx-auto" />
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    <tbody>
                        {
                            bookings.map(booking => <Booking key={booking._id} booking={booking} handleDeleteCheckout={handleDeleteCheckout}></Booking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;