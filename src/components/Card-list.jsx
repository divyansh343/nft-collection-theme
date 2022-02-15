import React from 'react'
import Card from './Card'
import styles from './Card-list.module.css'

const Cardlist = ({ names }) => {
  return (
    <>
      
      <section className={styles.layout}>
        {names.map((charcter) => (
          <>
            <Card key={charcter.id} charcter={charcter} />
            {/* <h1 key={Character.id}>{charcter.name}</h1> */}
          </>
        ))}
      </section>
    </>
  )
}

export { Cardlist }  