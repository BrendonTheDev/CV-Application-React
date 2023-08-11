import { useState } from 'react'


function App() {
  //state at time
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="master-container">
        <div className="left input-container">
          {/* Need to use Controlled Components instead of default state for form inputs. */}


        </div>

        <div className="right input-container"></div>
      </div>
      
    </>
  )
}

export default App
