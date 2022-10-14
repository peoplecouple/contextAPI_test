import React, { useContext } from 'react'
import { DarkTheme } from './App'

const DeeperSub = () => {
  const { dark, setDark } = useContext(DarkTheme)
  console.log(dark, setDark)
  return (
    <>
      <div className='dark_btn'>
        <label htmlFor='btn' className={`Btn ${dark ? "on" : ""}`}>
          dark
        </label>

        <button id="btn" onClick={
          () => { setDark(!dark) }}
        >
          mode
        </button>
      </div>

      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus animi ullam ut error! Ex soluta reiciendis ipsam nisi maxime ad, pariatur eligendi est commodi quos ab voluptas earum quod perferendis, corporis quam deserunt rerum inventore quaerat consequuntur. Quis dolor quidem sapiente eligendi consequuntur? Magnam, nemo incidunt illum minus at odit.
      </div>
    </>


  )
}

export default DeeperSub