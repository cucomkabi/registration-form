import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Admission from './Apply_button/admission_Form/Admission'
import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom'; // Import React Router
import Form1 from './Apply_button/admission_Form/Forms/Form1/Form1';
import Form2 from './Apply_button/admission_Form/Forms/Form2/Form2';
import Form3 from './Apply_button/admission_Form/Forms/Form3/Form3';
import Form4 from './Apply_button/admission_Form/Forms/Form4/Form4';
import Form5 from './Apply_button/admission_Form/Forms/Form5/Form5';
import Form6 from './Apply_button/admission_Form/Forms/Form6/Form6';

function App() {

  return (
    <>
      
      <Router>
        <div>
        <Routes>
          <Route path="/" element={<Admission/>} /> 
          <Route path="/form1" element={<Form1/>} />
          <Route path='/form2' element={<Form2 />} />
          <Route path='/form3' element={<Form3 />} />
          <Route path='/form4' element={<Form4 />} />
          <Route path='/form5' element={<Form5 />} />
          <Route path='/form6' element={<Form6 />} />
          <Route path='/Admission' element={<Admission />} />
        </Routes>
          <div>
            
          </div>
        </div>
    
    </Router>
    </>
  )
}

export default App
