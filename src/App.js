
import { useState } from 'react';
import './App.css';
import AddButton from './components/AddButton';
import TaskInput from './components/TaskInput';
import CompletedCheckbox from './components/CompletedCheckbox';
import DeleteButton from './components/DeleteButton';
import EditButton from './components/EditButton';
import TickButton from './components/TickButton';
import EditInput from './components/EditInput';
import DismissButton from './components/DismissButton';


function App() {

  const [toDo, setTodo] = useState('')
  const [toDos, setTodos] = useState([])
  const [editModeId, setEditModeId] = useState(false)
  const [editTodoText, setEditTodoText] = useState('')


  const addTodo = () => {
    if (toDo.trim() != '') {
      setTodos([{ id: Date.now(), task: toDo, taskStatus: false }, ...toDos])

      setTodo('')
    }

  }

  const changeStatus = (id) => {
    const updatedTodos = toDos.map((toDo) => {
      if (toDo.id == id) {
        return { ...toDo, taskStatus: !toDo.taskStatus }
      } else {
        return toDo
      }
    })

    setTodos(updatedTodos)
  }

  const taskInputChange = (e) => {
    setTodo(e.target.value);
  };

  const deleteTask = (index) => {
    const updatedTodos = [...toDos]
    updatedTodos.splice(index, 1)
    setTodos(updatedTodos)
  }

  const setToEdit = (id, currToDo) => {
    setEditTodoText(currToDo)
    setEditModeId(id)

  }

  const changeEditInput = (e) => {
    setEditTodoText(e.target.value)
  }

  const updateTask = (id, updatedTaskText) => {
    const updatedToDo = toDos.map((toDo) => {
      if (toDo.id == id) {
        setEditModeId(false)
        return { ...toDo, task: updatedTaskText }
      }
      return toDo
    })
    setTodos(updatedToDo)
  }
  const dismissEditMode = () => {
    setEditModeId(false)
  }
  return (
    <div className="App">
      <h1> <span style={{ color: '#00FFFF' }}>To</span>
        <span style={{ color: '#4FFFB0' }}> do</span>
        <span style={{ color: 'white' }}> App</span></h1>
      <div className='task-add-area'>
        <TaskInput currentValue={toDo} taskInputChange={taskInputChange} />
        <AddButton onClick={addTodo} />
      </div>

      <div className='parentTaskDiv'>
        <div className='allTasks'>
          <h2 style={{ color: 'white' }}>All Tasks</h2>
          {
            toDos.map((obj, index) => {
              return (
                <div key={obj.id} >
                  {editModeId == obj.id ? (


                    <><EditInput value={editTodoText} onChange={changeEditInput} /><TickButton updateTask={updateTask} id={obj.id} updatedTaskText={editTodoText} /><DismissButton onClick={dismissEditMode} /> </>
                  ) :
                    (<h3 style={{ color: 'white' }}>{obj.task} <CompletedCheckbox obj={obj} changeStatus={changeStatus} /><EditButton setToEdit={setToEdit} id={obj.id} toDo={obj.task} /><DeleteButton deleteTask={deleteTask} index={index} /></h3>)
                  }
                </div>

              )
            })


          }
        </div>

        <div className='completedTasks'>
          <h2 style={{ color: 'white' }}>Completed Tasks</h2>

          {
            toDos.map((obj, index) => {

              if (obj.taskStatus) {
                return (
                  <div className='taskTile'>
                    <h3 key={index} style={{ color: 'white', marginRight: '10px' }}>{obj.task}<DeleteButton deleteTask={deleteTask} index={index} /></h3>

                  </div>
                )
              }

            })
          }
        </div>

      </div>

    </div>
  );
}

export default App;
