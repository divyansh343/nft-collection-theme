import React from 'react'
import styles from './Card.module.css'


const Card = (props) => {
  return (
    <div className={styles.layout}>
      <div className={styles.card}>
        
        <img 
        src={`https://robohash.org/${props.charcter.id}?set=set1`} 
        alt="BigCo Inc. logo"
        height="250"
        width="250"
        />


        <h3>{props.charcter.name}</h3>
        <p>{props.charcter.email}</p>
        <p>{props.charcter.website}</p>
        
    </div>

    </div>
    
  )
}

export default Card