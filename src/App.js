import './App.css';
import React, { useState, useEffect } from 'react';
import Context from './Context';
import ComponentA from './components/ComponentA';
import { createContext } from 'react';
import useLocalStorage from './useLocalStorage';
export const UserCount = createContext()

function App() {
  // useStateの定義
  const [count, setCount] = useState(0);
  // useEffectの定義
  useEffect(() => {
    console.log(`useEffect発火`)
  }, [count])

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  }

  // カスタムフック
  const [address, setAddress] = useLocalStorage("address", "住所を入力")



  return (
    <div className="App">
      <section style={{ borderBottom: '1px solid black', paddingBottom: 30, marginBottom: 30 }}>
        <h1>useState</h1>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>−</button>
      </section>

      {/* useEffect */}
      <section style={{ borderBottom: '1px solid black', paddingBottom: 30, marginBottom: 30 }}>
        <h1>useEffect</h1>
        <p>コンソールを確認</p>
      </section>

      {/* useContext */}
      <section style={{ borderBottom: '1px solid black', paddingBottom: 30, marginBottom: 30 }}>
      <h1>useContext</h1>
        <UserCount.Provider value={"うどん食べ"}>
          <ComponentA />
        </UserCount.Provider>
      </section>

      <section style={{ borderBottom: '1px solid black', paddingBottom: 30, marginBottom: 30 }}>
        <h1>カスタムフック</h1>
        <p>{address}</p>
        {/* 他から機能をフックしてこれる */}
        <button onClick={() => setAddress("東京都中央区築地")}>住所録</button>
      </section>
    </div>
  );
}

export default App;