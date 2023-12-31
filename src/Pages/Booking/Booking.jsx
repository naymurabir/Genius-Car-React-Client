import PropTypes from 'prop-types';
import { AiOutlineDelete } from 'react-icons/ai';


const Booking = ({ booking, handleDeleteCheckout, handleUpdateCheckout }) => {

    const { _id, img, date, email, title, price, status } = booking

    return (
        <>
            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDeleteCheckout(_id)}> <AiOutlineDelete className='text-red-500 text-2xl'></AiOutlineDelete> </button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{title}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span>${price}</span>
                </td>
                <td>{date}</td>
                <th>
                    {
                        status === 'confirm' ? <span className="text-white bg-[#f3411d] px-3 py-1 rounded"> Confirmed </span>
                            :
                            <button onClick={() => handleUpdateCheckout(_id)} className="text-white bg-[#f3411d] px-3 py-1 rounded">Please Confirm</button>
                    }
                </th>
            </tr>
        </ >
    );
};

Booking.propTypes = {
    booking: PropTypes.object.isRequired,
    handleDeleteCheckout: PropTypes.func.isRequired,
    handleUpdateCheckout: PropTypes.func.isRequired
}

export default Booking;