import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import inputs from './inputs';
import Contact from './Contact';
import Profile from './Profile';
import Login from './Login';
import './Homebody.css'
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route, // for later,
  Switch
} from 'react-router-dom'


function Input({match}){
  const input = inputs.find(({id}) => id === match.params.problemId)
  console.log(match.params.problemId);
  

  const ess=inputs[match.params.problemId-1];
  
  return (
    <div>
      <Navbar/>
      <div className="hom">
          
            <div className="ques">
              <h2>Interview prep</h2>
              <br></br>
              
              <h5>{ess.question}</h5>
              
              <p>{ess.description}</p>
              <br></br>
              <p>{ess.input1}</p>
              <p>{ess.output1}</p>
              <p>{ess.input2}</p>
              <p>{ess.output2}</p>
              <p>{ess.solution}</p>
              </div>
              </div>
              

      <Footer/>
    </div>
  )
}

function Home(){
  return (
    <div>
      <Navbar/>
      {inputs.map(({title,id}) =>(
        <div className="hom">
          <div className="ho"> 
            <div className="ques">
              <div key={id}>
                <Link to={`/${id}`}>
                  <h5>{title}</h5>
                  <p>{title}</p>
                 </Link>
              </div>
            </div>
          </div>
        </div>
        
      ))}
      
      <Footer/>
      
      
    </div>
  )
}

class App extends React.Component {
  render() {

    return (
      <div className="container">
        <Router>
          <div>
            <Switch>
            <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/" component={Home}/>
              <Route path={`/:problemId`} component={Input}/>
              
            </Switch>
              
          </div>
              
      </Router>
        
      </div>
    );
  }

  }
  





export default App;



// import React from "react";
// import { Route, Link, Switch } from "react-router-dom";
// import categories from './inputs';

// const categories = [
//   { id: 0, title: "Kingdom: Animal", subcategories: [1, 2, 3, 4] },
//   { id: 1, title: "Phylum: Chordata", subcategories: [2] },
//   { id: 2, title: "Clade: Synapsida", subcategories: [3] },
//   { id: 3, title: "Class: Mammailia", subcategories: [4] },
//   { id: 4, title: "Order: Carnivora", subcategories: [5] },
//   { id: 5, title: "Subfamily: Felinae", subcategories: [6] },
//   { id: 6, title: "Genus: Felis", subcategories: [7] },
//   { id: 7, title: "Species: Felis catus", subcategories: [] }
// ];

// const Category = ({ match }) => {
//   const category = categories.find(category => {
//     return parseInt(match.params.catId) === category.id;
//   });

//   return (
//     <>
//       {match.isExact && (
//         <>
//           <h1>{category.title}</h1>
//           {category.subcategories.map(subCategoryId => {
//             return (
//               <div>
//                 <Link key={subCategoryId} to={`${match.url}/${subCategoryId}`}>
//                   {categories.find(cat => cat.id === subCategoryId).title}
//                 </Link>
//               </div>
//             );
//           })}
//           {category.id === 7 && (
//             <img src="https://cataas.com/cat" alt="cat" height="300" />
//           )}
//         </>
//       )}
//       <Switch>
//         <Route path={`${match.path}/:catId`} component={Category} />
//       </Switch>
//     </>
//   );
// };

// export const RoutingExample = () => {
//   return (
//     <Switch>
//       <Route path={`/:catId`} component={Category} />
//     </Switch>
//   );
// };
