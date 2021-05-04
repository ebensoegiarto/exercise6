import { useState } from 'react';
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
const App = () => {
  const [isShow, setIsShow] = useState(true)
  const toggleButton = () => {
    setIsShow(!isShow);
  };

  const webpro = [
    {
      nama: "ramoy",
      address: "manado",
    },
    {
      nama: "eben",
      address: "bitung",
    },
  ]

  return(
    <div>
      <Title/>
     <Komponen title ="Webpro" students={webpro} isShow={isShow}/>
     <button onClick={toggleButton}>toggle list student</button>
    </div>
  );
}

export default App;
