import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [selid, setSelId] = useState("0");

  useEffect(()=>{
    var url = "http://localhost:3000/todos/readtask";
    // var method = "GET"
    //using axios method
    
    axios.get(url).then((res)=>{
      console.log(res.data);
      setTodos(res.data);
    });
    //using fetch method

    // fetch(url,{method:method}).then((res)=>{
    //   res.json().then((data)=>{
    //     console.log(data)
    //     setTodos(data);
    //   })
      // console.log(res);
  //   }); 
  },[]);

  const handleAddTodo = () => {
    console.log(todo);
    if (selid != "0") {
      let newList = todos.map((t) =>
        t.id == selid
          ? { title: todo, isCompleted: t.isCompleted, id: t.id }
          : t
      );
      setTodos(newList);
      setSelId("0");
    } else {
      setTodos([{ title: todo, isCompleted: false, id: Date.now() }, ...todos]);
    }
    setTodo("");
  };

  
  const handleTodoChange = (id) => {
    let newList = todos.map((t) =>
      t.id == id ? { title: t.title, isCompleted: !t.isCompleted, id: t.id } : t
    );
    setTodos(newList);
  };
  const handleDelete = (id) => {
    let newList = todos.filter((t) => t.id != id);
    setTodos(newList);
  };
  const handleEdit = (id) => {
    let t = todos.find((t) => t.id == id);
    if (t) {
      setTodo(t.title);
      setSelId(id)
    }
  };
  const handleFetchData = () => {
    var url = "http://localhost:3000/todos/readtask";
    var method = "GET"
    fetch(url,{method:method}).then((res)=>{
      res.json().then((data)=>{
        console.log(data)
        setTodos(data);
      })
      console.log(res);
    }); 
  }
  return (
    <div>
      <div>
        <button onClick={handleFetchData}>Fetch Todos</button>
      </div>
      <div>
        <input
          type="text"
          name="txtTodo"
          id="txtTodo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>
          {selid != "0" ? "Update" : "Add"}
        </button>
      </div>
      <div>
        {todos.map((t) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <input
              type="checkbox"
              checked={t.isCompleted}
              onChange={() => handleTodoChange(t.id)}
            />
            {t.title}
            <button onClick={() => handleDelete(t.id)}>Delete</button>
            <button onClick={() => handleEdit(t.id)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


//id,name,email,status course info lie course code,name,status
// each course multiple student can enroll multiple courses 