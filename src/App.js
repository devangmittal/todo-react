import "./App.css";
import Card from "./Card";
import { useEffect, useState } from "react";

const App = () =>
{
  let [str, setStr] = useState();
  let [tasks, setTasks] = useState([]);


  const handleStr = (e) =>
  {
    setStr(e.target.value.toLowerCase());
  }

  const handleAdd = () =>
  {
    setTasks([...tasks, str]);
    setStr("");
  }

  const handleDelete = (del) =>
  {
    setTasks(tasks.filter((task) => task !== del));
  }

  const handleEdit = (original, updated) =>
  {
    const temp = tasks.map((task) =>
    {
      if (task === original) {
        task = updated;
        console.log(task + "task");
        return task;
      } else {
        return task;
      }
    })
    setTasks(temp);
    console.log(original + " original");
    console.log(updated + " updated");
    console.log(tasks + " tasks")
  }


  return (
    <div className="background">
      <div className="center">
        <input type="text" placeholder="Enter Task" value={str} onChange={handleStr} className="input" />
        <button onClick={handleAdd} className="button"> Add </button>

        <div className="container">
          {
            tasks.map((temp) => <Card text={temp} handleDelete={handleDelete} handleEdit={handleEdit} />)
          }
        </div>

      </div>

    </div>
  );
}
export default App;