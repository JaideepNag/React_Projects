import {useState} from "react";
import styled from "styled-components";

function App() {



let [weight,setWeight]=useState();
const [height,setHeight]=useState();
const [bmi,setBmi]=useState();
const [msg,setMsg]=useState();

let calcbmi=(e)=>{
  e.preventDefault();
  if(weight==0||height==0)
  {
    alert("Please enter valid height and weight");
  }
  else
  {
    let bmi=(weight/(height*height*0.306*0.305));
    setBmi(bmi.toFixed(1));
    if(bmi<18.5)
    {
      setMsg("You are underweight");
    }
    else if(bmi>=18.5 && bmi<24.9)
    {
      setMsg("You are Normal(healthy)")
    }
    else if(weight==null||height==null){
      setMsg("Please enter weight and height")
    }
    else
    {
      setMsg("You are underweight")
    }
  }
}

let reload=()=>{
  window.location.reload();
}


  return (
    <>
      <Container>
        <Card>
        <h1>Body Mass Index</h1>
        <form action="">
          <div>
            <label htmlFor="weight">Weight</label>
            <input type="text" value={weight} placeholder="Enter your weight(kg)" 
            onChange={(e)=>setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="height">Height</label>
            <input type="text" value={height} placeholder="Enter your height(feet)" 
            onChange={(e)=>setHeight(e.target.value)}
            />
          </div>
          <div className="btn">
            <button onClick={calcbmi}>Submit</button>
            <button onClick={reload}>Reload</button>
          </div>
          <h4>Your BMI is {bmi}</h4>
          <h5>{msg}</h5>
        </form>
        </Card>
      </Container>
    </>
  );
}

export default App;

const Container=styled.div`
width: 100vw;
height: 100vh;
background-color: grey;
display: flex;
justify-content: center;
align-items: center;
`;

const Card=styled.div`
width: 30vw;
min-height: 40vh;
background-color: #489672;
border-radius: 10px;
h1,h4,h5{
  text-align: center;
  padding: 15px;
}
div{
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
}
label{
  font-size: 20px;
  padding-right:15px ;
}
input{
  border-radius: 5px;
  border: none;
  padding: 5px;
  font-size: 15px;
}
.btn{
  display: flex;
  gap: 15px;
}
button{
  padding: 5px;
  cursor: pointer;
  &:hover{
    background-color: yellow;
  }
}

`;
