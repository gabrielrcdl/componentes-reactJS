import Item from './components/';
import Card from './components/card'

const App = () =>{
  return(


    <>
      <h1>Minha Primeira Aplicação com ReactJs</h1>
      <ul>

       <Item texto="Item 1"/>
       <Item texto="Item 2"/>
       <Item texto="Item 3"/>
      </ul>

      <Card/>
 
    </>


  )
}
export default App;