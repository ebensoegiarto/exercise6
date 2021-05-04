import logo from './logo.svg';
import { Component } from 'react';
import Title from './Title';
import Komponen from './Komponen';

//function App() {
//  let margaName = "Doe";
//  return (
//    <div className="container">
//    <h1>hello world</h1>
//    <h2>welcome {margaName}</h2>
//    </div>
//  );
//}
class App extends Component{
  state = {
    isShow: true,
  };
  toggleButton = () => {
    this.setState({isShow: !this.state.isShow});
  };
  render(){
    const backend = [
      {
        nama: "eben",
        address: "bitung",
      },
    ]
    const webpro = [
      {
        nama: "ramoy",
        address: "manado",
      }
    ]
    return(
      <div>
        <Title/>
        {
          this.state.isShow && (
          <Komponen title="Back end" students={backend}/>)
        }
        {/* <Komponen title="Back end" students={backend}/> */}
       <Komponen title ="Webpro" students={webpro}/>
       <button onClick={this.toggleButton}>toggle list student</button>
      </div>
    );
  }
}

export default App;
