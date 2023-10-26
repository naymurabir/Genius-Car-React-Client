import PropTypes from 'prop-types';
import frameImg from '../../assets/icons/Frame.png'


const Service = ({ service }) => {

    const { img, price, title } = service

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-md p-2">
                <figure><img className='w-full h-[200px]' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className='text-xl font-bold'> {title} </h2>

                    <div className='flex justify-between items-center'>
                        <p className='text-sm text-[#FF3811] font-bold'>Price: ${price} </p>
                        <img src={frameImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object.isRequired
}

export default Service;