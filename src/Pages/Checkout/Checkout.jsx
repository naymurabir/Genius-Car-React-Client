import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {

    const { user } = useContext(AuthContext)

    const checkoutService = useLoaderData()
    const { title, price, img } = checkoutService

    const handleCheckout = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = user?.displayName
        const price = form.get('price')
        const date = form.get('date')
        const email = user?.email
        const message = form.get('message')
        const checkout = {
            name,
            price,
            date,
            email,
            message,
            img: img,
            title
        }
        console.log(checkout);

        fetch('http://localhost:5000/checkout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(checkout)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "A new checkout has been replaced to cart.",
                        showConfirmButton: false,
                        background: '#343436',
                        heightAuto: '100px',
                        color: 'white',
                        timer: 2000
                    })
                    e.target.reset()
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleCheckout}>
                <div className="bg-gray-100 lg:w-2/4 mx-auto p-5 my-5 rounded">

                    <h2 className="text-xl font-bold text-[#FF3811] text-center mb-5">Checkout</h2>

                    <div className="flex flex-col md:flex-row gap-5 justify-between ">
                        <input name="name" type="text" placeholder="Name..." defaultValue={user?.displayName} className="input input-bordered input-error w-full max-w-xs text-xs" />

                        <input name="price" type="text" placeholder="Price..." defaultValue={price} className="input input-bordered input-error w-full max-w-xs text-xs" />
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row gap-5 justify-between mt-5">
                            <input name="date" type="date" placeholder="Date..." className="input input-bordered input-error w-full max-w-xs text-xs" />

                            <input name="email" type="text" placeholder="Email..." defaultValue={user?.email} className="input input-bordered input-error w-full max-w-xs text-xs" />
                        </div>
                        <div>
                            <textarea className="h-[100px] mt-5 w-full textarea textarea-warning text-xs" name="message" id="" cols="30" rows="10" placeholder="Your message..."></textarea>
                        </div>
                    </div>
                    <button className="bg-[#FF3811] text-white font-semibold px-3 py-2 rounded w-full mt-4">Checkout</button>

                </div>
            </form>
        </div>
    );
};

export default Checkout;