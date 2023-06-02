import { UserCount } from '../App'
import { useContext} from 'react'

const ComponentC = () => {
		//追記
    const count = useContext(UserCount)
    return (
        <div>
            <p>Componet C</p>
            <p>{count}</p>
        </div>
    )
}

export default ComponentC