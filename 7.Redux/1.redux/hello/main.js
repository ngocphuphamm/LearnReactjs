

const { createStore } = window.Redux;
// SET UP REDUX STORE
//state
//reducer
// store
const initialState = JSON.parse(localStorage.getItem('hobby_list')) || [];

const hobyReducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'addHobby':{
            const newList = [...state];
            newList.push(action.payload);
            return newList;
        }
        default : return state;
    }
}

// sử dụng redux
const  store = createStore(hobyReducer);

// RENDER REDUX HOBBY LIST
const renderHobbyList = (hobbyList)=>{
    // kiểm tra mảng
    if(!Array.isArray(hobbyList)|| hobbyList.length === 0)
    {
        // do nothing
        return ; 
    }
    else
    {
        const ulElement = document.querySelector('#hobbydListId');
        if(!ulElement) return ;
        // xóa lần render truốc
        ulElement.innerHTML = '';
        // lặp qua cái mảng hobbyList
        for (var el of hobbyList)
        {
            const liElement = document.createElement('li');
            liElement.textContent =  el;
            ulElement.appendChild(liElement);
        }
    }
}

// render intial hobby List
// lấy giá trị hiện tại của store
const intialHobbyList =  store.getState();
// console.log(intialHobbyList);
renderHobbyList(intialHobbyList);
// renderHobbyList([1,2,3]);


//HANDLE FORM SUBMIT
const hobbyFormElement = document.querySelector('#hobbyFormId');
if(hobbyFormElement)
{
    const handleSubmit = (e) => {
        e.preventDefault();

        const hobbyText = hobbyFormElement.querySelector('#hobbyTextId');
        if(!hobbyText)
        {
            return;   
        }
        console.log("SUBMIT",hobbyText.value);

        // tạo action add dispatch
        const action = {
            type : 'addHobby',
            payload : hobbyText.value
        };
        // đẩy lên thằng reducer
        store.dispatch(action);

        hobbyFormElement.reset();
    }
    
    hobbyFormElement.addEventListener('submit',handleSubmit);
}

store.subscribe(()=>{
    console.log("state update",store.getState());
    const newHobbyList = store.getState();
    renderHobbyList(newHobbyList);

    localStorage.setItem("hobby_list",JSON.stringify(newHobbyList));
})


