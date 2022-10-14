import React, { useContext, useState } from 'react'
import { createContext } from 'react'
const Context = createContext();

// 1. createContext로 Context를 만든다.
// 2. 이름.Provider 로 App을 싼고 value값을 준다.
// 3. Context를 사용할 곳에 useContext(이름)으로 변수를 만든다.
// 4. { 변수이름 }으로 값을 호출한다.

const Deepersub = () => {
  const { state, setState } = useContext(Context) // provider 비구조할당
  return (
    <>
      성아 {state}
      <button onClick={() => { setState('먹기')}}>먹기</button>
    </>)
}

const Deepsub = () => {
  return (
    <>
      <Deepersub />
    </>
  )
}


const Sub = () => {
  return (
    <>
      <Deepsub />
    </>
  )

}


const App = () => {
  const [state, setState] = useState('놀기')
  return (
    <>
      <Context.Provider value={{ state, setState }}>
        <Sub />
      </Context.Provider>
    </>

  )
}

export default App