import { useContext, useEffect, useState } from "react";
import Booking from "../Booking/Booking";
import swal from "sweetalert";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";



const Bookings = () => {

    const [bookings, setBookings] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (user?.email) {

            axios.get(`http://localhost:5000/checkout?email=${user.email}`, { withCredentials: true })
                .then(res => {
                    setBookings(res.data)
                })

            // fetch(`http://localhost:5000/checkout?email=${user.email}`)
            //     .then(res => res.json())
            //     .then(data => setBookings(data))
        }
    }, [user?.email])


    const handleDeleteCheckout = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/checkout/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            const remaining = bookings.filter(booking => booking._id !== id)
                            setBookings(remaining)
                            if (data.deletedCount > 0)
                                swal("The booking has been deleted successfully.", {
                                    icon: "success",
                                });
                        })

                } else {
                    swal("Your file is safe!");
                }
            });


    }

    const handleUpdateCheckout = (id) => {
        fetch(`http://localhost:5000/checkout/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = bookings.filter(booking => booking._id !== id)
                const updatedBooking = bookings.find(booking => booking._id === id)
                updatedBooking.status = 'confirm'
                const newBooking = [updatedBooking, ...remaining]
                setBookings(newBooking)
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
                            bookings.map(booking => <Booking key={booking._id} booking={booking} handleDeleteCheckout={handleDeleteCheckout} handleUpdateCheckout={handleUpdateCheckout}></Booking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;