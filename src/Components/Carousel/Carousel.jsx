import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import BannerData from '../../Helpers/HomePageBanner'
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
const Carousel = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        // 1024: { items: 3, itemsFit: 'contain' },
    };
    const items = BannerData.map((item) => (

        // <Link to={`product/type/${item.name.toLowerCase()}`} key={item.name} >
            <div className="item" style={{ margin: 10, }} key={item.name}>
                <div style={{ height:' 100%', width: '100%', display: 'flex', position: 'relative', cursor: 'pointer'}}>
                <img src={item.img} loading='lazy' alt={item.name} style={{ height: '100%', width: '100%', objectFit: 'contain', borderRadius: '12px' }} />
                </div>
            </div>
        // </Link>
    ))

    return (
        <AliceCarousel
            animationType="fadeout"
            animationDuration={2500}
            disableButtonsControls
            infinite
            items={items}
            touchTracking
            mouseTracking
            // disableDotsControls
            autoPlay
            autoPlayInterval={9500}
            responsive={responsive}
        />
    )
}

export default Carousel