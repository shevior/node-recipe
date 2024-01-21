import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import HomePage from './component/HomePage';
import MyRecipes from './recipe/MyRecipes';
import ShoppingCart from './component/ShoppingCart';
import RecipesList from './recipe/RecipeList';
import Recipe from './recipe/RecipeForm';
//npm install semantic-ui-react semantic-ui-css
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div class="contaiter">
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/homepage" element={<HomePage />}/>
        <Route path="/myrecipes" element={<MyRecipes/>}/>
        <Route path="/recipe" element={<Recipe/>}/>
        <Route path="/recipes" element={<RecipesList/>}/>
        <Route path="/shoppingcart" element={<ShoppingCart/>}/>
        {/* <Route path="/recipes" element={<Recipes />}/> */}
        {/* <Route path="/recipesList" element={<RecipeList />}/> */}
        {/* <Route path="https://localhost:8080/api/recipe/edit" element={}></Route>
       <Route path="https://localhost:8080/api/category" element={}></Route>
       <Route path="https://localhost:8080/api/buy/:userid" element={}></Route>
       <Route path="https://localhost:8080/api/buy/edit" element={}></Route>
       <Route path="https://localhost:8080/api/buy/delete/:Userid/:Id" element={}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
