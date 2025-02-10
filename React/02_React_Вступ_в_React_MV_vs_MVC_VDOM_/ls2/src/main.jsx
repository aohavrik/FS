
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function aA() {
  console.log(222);

}
const ob = { s: 1 }
const num1 = 111
const n2 = true
const n3 = 'hello'
function b (){
  console.log(444);
  return 4444
  
}


createRoot(document.getElementById('root')).render(
  <div>
    <h1>Hello React</h1>

    {/* комент */}
    <div className='bg-red'>
      Hello text
    </div>

    <App variable="32523">
      <div></div>
    </App>
    <App></App>
    <App />
    {App()}


    111

    <div>111</div>

    <div>
      {/* {ob} */}
      {num1}
    </div>
    {111}

    <div>{aA()}</div>


    <div>
      {true}
      {n2}
    </div>

    <div>
      <h3>
        {n3}
      </h3>
      <div>
        {()=>{console.log(333)}}
      </div>
    </div>

    <div>
      {b()}
    </div>
  </div>
)
