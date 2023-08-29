import React from 'react'
import styles from './Category.module.css'
import { Link } from 'react-router-dom'

const CategoryCard = ({ data }) => {
    return (
        <Link to={`product/type/${data.name}`}>
            <div className={styles.mainCard}>
                <img src={data.img} alt="" className={styles.mainImg} loading='lazy' />
                <span className={styles.imgTitle} style={{background: 'linear-gradient(90deg, rgba(254,166,22,1) 0%, rgba(244,208,64,1) 35%, rgba(255,144,53,1) 100%)'
            }}>{data.name}</span>
            </div>
        </Link>
    )
}

export default CategoryCard