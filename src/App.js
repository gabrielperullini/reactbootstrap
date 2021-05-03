import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';


import { Button, Alert, Card, input, form, Form, Container, Row, Col } from 'react-bootstrap';

//**FUNCION */
// const respuesta = () =>{
//   return fetch(`http://apihost:4000/iecho?text=test`, {"headers": "accept : application/json"})
//   .then(res => res.json()) //RECIBO JSON
//   .then(resp => {
//     const {data} = resp;  //guardo el JSON
//     console.log("hola mundo")  //MUESTRO EL JSON
//     return "";
//   })
// }


import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { texto: '' };
  }
  mySubmitHandler = async (e) => {
    e.preventDefault();
    return await fetch(`http://localhost:4000/iecho?text=${this.state.texto}`, {"Headers":"accept:application/json"})
    .then( res => res.json())
    .then(resp => {
      const {data} = resp;  //guardo el JSON
      return data  //MUESTRO EL JSON
     // return "";
    })
  }
  myChangeHandler = (event) => {
    this.setState({texto: event.target.value});
  }
  render() {
   return (
     <div>
       <header className="App-header">        
       <div class="fixed-top justify-content-center" style={{backgroundColor:"#e5e5e5"}}>
         <Card style={{backgroundColor:"Red",width:"100%",position:"top"}}>
           <Card.Img/>
               <Card.Body>
                 <Form onSubmit={this.mySubmitHandler}>
                   <Form.Group>
                       <div class="container">
                         <Row>
                           <Col md>
                               <Form.Control style={{width:"750px"}} type="text" class="form-control" id="imput1" placeholder="Insert text" onChange={this.myChangeHandler}/>
                           </Col>
                           <Col md>
                               <Button type="submit">Send</Button>
                           </Col>
                           </Row>
                       </div>    
                     </Form.Group>
                 </Form>              
               </Card.Body>
         </Card>      

          


         <div class="m-5 row justify-content-center">
         <Card style={{backgroundColor:"White",width:"70%",height:"400px",position:"Top", color:"black"}}>
           <Card.Img/>
               <Card.Body>
                   <div class="m-3 row justify-content-left">                            
                       <Card.Text>
                         Result:
                       </Card.Text>                      
                   </div>   
                   <div class="m-5 justify-content-center">                            
                     <div class="form-group">
                         <input style={{width:"70%"}} type="text" class="form-control" id="third_text" placeholder="third text" disabled></input>
                     </div>
                     <div class="form-group">
                         <input style={{width:"70%"}} type="text" class="form-control" id="second_text" placeholder="second text" disabled></input>
                     </div>
                     <div class="form-group">
                         <input style={{width:"70%"}} type="text" class="form-control" id="first_text" placeholder="first text" disabled></input>
                     </div>
                   </div>
                 </Card.Body>
         </Card>

         </div>
         </div>
        
         <p>
        
         </p>
        
       </header>
     </div>
   );











     //return (
    //   <form onSubmit={this.mySubmitHandler}>
    //   <h1>Hello {this.state.username}</h1>
    //   <p>Enter your name, and submit:</p>
    //   <input
    //     type='text'
    //     onChange={this.myChangeHandler}
    //   />
    //   <input
    //     type='submit'
    //   />
    //   </form>
    //);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;

















// // //** */
// class App extends Component { 
  
// render(){
//   return (
//     <div>
//       <header className="App-header">        
//       <div class="fixed-top" style={{backgroundColor:"#e5e5e5"}}>
//         <Card style={{backgroundColor:"Red",width:"100%",position:"top"}}>
//           <Card.Img/>
//               <Card.Body>
//                 <Form onSubmit={this.respuesta}>
//                   <Form.Group>
//                       <div class="container">
//                         <Row>
//                           <Col md>
//                               <Form.Control style={{width:"750px"}} type="text" class="form-control" id="imput1" placeholder="Insert text" />
//                           </Col>
//                           <Col md>
//                               <Button type="submit">Send</Button>
//                           </Col>
//                           </Row>
//                       </div>    
//                     </Form.Group>
//                 </Form>              
//               </Card.Body>
//         </Card>      
//         <div class="m-5 row justify-content-center">
//         <Card style={{backgroundColor:"White",width:"70%",height:"400px",position:"Top", color:"black"}}>
//           <Card.Img/>
//               <Card.Body>
//                   <div class="m-3 row justify-content-left">                            
//                       <Card.Text>
//                         Result:
//                       </Card.Text>                      
//                   </div>   
//                   <div class="m-5 justify-content-center">                            
//                     <div class="form-group">
//                         <input style={{width:"70%"}} type="text" class="form-control" id="third_text" placeholder="third text" disabled></input>
//                     </div>
//                     <div class="form-group">
//                         <input style={{width:"70%"}} type="text" class="form-control" id="second_text" placeholder="second text" disabled></input>
//                     </div>
//                     <div class="form-group">
//                         <input style={{width:"70%"}} type="text" class="form-control" id="first_text" placeholder="first text" disabled></input>
//                     </div>
//                   </div>
//                 </Card.Body>
//         </Card>

//         </div>
//         </div>
        
//         <p>
        
//         </p>
        
//       </header>
//     </div>
//   );
// }
// }

// export default App;























































// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import React, { Component } from 'react';
// import { Button, Card, input, Form, Row, Col } from 'react-bootstrap';



// class App extends Component {


//   constructor(props){
//     super(props);

//     this.state = {
//       texto: '',
//     }
//     this.onChange = this.onChange.bind(this);
//     //this.enviarAlaBD = this.enviarAlaBD.bind(this);
//   }
//   onChange = e =>{
//     const {texto, value} = e.target;
//     this.setState({
//       [texto]: value,
//     });
//   }
 
// onChange = e =>{
//     e.preventDefault();
//     fetch (`http://apihost:4000/iecho?text=test`)
//       .then(res => res.json())
//       .then(res => {
//         if (res.success) { // exito
//           console.log("hola mundo")  //MUESTRO EL JSON
//         }
//       })
// }
//   //  const respuesta = e => {
//   //    fetch (`http://apihost:4000/iecho?text=test`)
//   //    .then(res => res.json())
//   //    .then(res => {
//   //      if (res.success) { // exito
//   //        console.log("hola mundo")  //MUESTRO EL JSON
//   //      }
//   //    })
//   //  }


// // // //**FUNCION */
// //  const respuesta = (text = "test") =>{
// //    return fetch(`http://apihost:4000/iecho?text=${text}`)  //llamar API
// //    .then(res => res.json()) //RECIBO JSON
// //    .then(resp => {
// //      const {data} = resp;  //guardo el JSON
// //      console.log("hola mundo")  //MUESTRO EL JSON
// //      return "";
// //    })
// //  }

// // //** */




// render(){
//   return (
//     <div className="App">
//       <header className="App-header">
//       <div class="fixed-top" style={{backgroundColor:"#e5e5e5"}}>
//         <Card style={{backgroundColor:"Red",width:"100%",position:"top"}}>
//           <Card.Img/>
//               <Card.Body>                 
//                       <div class="d-flex justify-content-center">
//                       <form onSubmit={this.onSubmit.bind(this)}>
//                           <input type="text" value={this.state.texto} onChange={this.onInputChange.bind(this)} />
//                           <button type="submit">Enviar nombre</button>
//                       </form>
//                       {/* <form onSubmit={respuesta}>
//                           <input type="text" />
//                           <button type="submit">Enviar</button>
//                       </form> */}
//                          {/* <Row>
//                           <Col md>
//                               <input style={{width:"750px", height:"40px"}} type="text" class="form-control" id="imput1" placeholder="Insert text"/>
//                           </Col>
//                           <Col md>
//                               <Button type="submit" onClick={respuesta}>Send</Button>
//                           </Col>
//                           </Row> */}
//                       </div>
                    
//               </Card.Body>
//         </Card>
//         <div class="m-5 row justify-content-center">
//         <Card style={{backgroundColor:"White",width:"70%",height:"400px",position:"Top", color:"black"}}>
//           <Card.Img/>
//               <Card.Body>
//                   <div class="m-3 row justify-content-left">
//                       <Card.Text>
//                         Result:
//                       </Card.Text>
//                   </div>
//                   <div class="m-5 justify-content-center">
//                     <div class="form-group">
//                         <input style={{width:"70%"}} type="text" class="form-control" id="third_text" placeholder="third text" disabled></input>
//                     </div>
//                     <div class="form-group">
//                         <input style={{width:"70%"}} type="text" class="form-control" id="second_text" placeholder="second text" disabled></input>
//                     </div>
//                     <div class="form-group">
//                         <input style={{width:"70%"}} type="text" class="form-control" id="first_text" placeholder="first text" disabled></input>
//                     </div>
//                   </div>
//                 </Card.Body>
//         </Card>

//         </div>
//         </div>

//         <p>

//         </p>

//       </header>
//     </div>
//   );
// }
// }
// export default App;
