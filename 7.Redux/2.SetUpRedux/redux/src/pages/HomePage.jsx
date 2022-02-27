import { useSelector ,useDispatch} from "react-redux";
import HobbyList  from "../components/Home/HobbyList"
import "./homepage.css";
import {addNewHobby , setActiveHobby} from "../actions/hobby"

function HomePage(){
    const randomNumber = ()=>{
        return 1000 + Math.trunc((Math.random() * 9000));
    }
    // chỉ định hobby reducer
    // trong hobby có cái state là list
    // lấy state
    const hobbyList = useSelector(state => state.hobby.list);
    // lấy state
    const activeId = useSelector(state => state.hobby.activeId);

    const dispatch = useDispatch();

    const handleAddHobbyClick = ()=>{
        const newId = randomNumber();
        // ramdom hobby
        var newHobby = {
            id : newId,  
            tittle : `Hobby ${newId}`,

        }
        // gọi action 
        const action = addNewHobby(newHobby);
        // dispatch action lên reducers hobby
        dispatch(action);
    }

    const handleClick = (el)=>{
        const action = setActiveHobby(el);
        dispatch(action);

    }
    console.log(hobbyList);
    return (
        <div className="home-Page">
            <h1>REDUX HOOKS - HOMEPAGE</h1>

            <button onClick = {handleAddHobbyClick} >Ramdom Hobby</button>
            <ul>
            {hobbyList.map((el)=>{
                return (
                    <li key ={el.id} 
                    onClick = {()=>{handleClick(el)}}
                    className = {el.id === activeId ? 'active' : ''}
                    >{el.tittle}</li>
                )
            })}
            </ul>
        </div>
    );
}
export default HomePage;