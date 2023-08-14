import HookForm from "./components/HookForm"
import PersonalInfoForm from "./components/PersonalForm"
// import HookForm from './components/HookForm'


function App() {
  //state at time

  return (
    <>
      <div className="master-container">
        <div className="left input-container">
          {/* Need to use Controlled Components instead of default state for form inputs. */}
           <div className="personal-container">
            <HookForm />
           </div>
           <div className="experience-container">
            
           </div>
           <div className="education-container">
            
           </div>

        </div>

        <div className="right input-container"></div>
      </div>
      
    </>
  )
}

export default App
