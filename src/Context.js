import { createContext } from 'react';
import ComponentA from './components/ComponentA'

export const UserCount = createContext()

function Context() {
  return (
    <div>
      <h1>useContext</h1>
      <UserCount.Provider value={100}>
      <ComponentA/>
      </UserCount.Provider>
    </div>
  );
}

export default Context; 