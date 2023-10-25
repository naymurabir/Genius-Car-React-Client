
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[200px] md:h-[450px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/R4c30t0/2.jpg" className="w-full" />
                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811]">❮</a>
                        <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/9gjSNCw/3.jpg" className="w-full" />
                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811]">❮</a>
                        <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Ry9Yqc1/4.jpg" className="w-full" />
                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811]">❮</a>
                        <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/b1yF333/1.jpg" className="w-full" />
                    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811]">❮</a>
                        <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;