import React from 'react';
import NavbarComp from "./NavbarComp.jsx";
import './Dashboard.css';


 import {
    BrowserRouter as Router,
     Switch,
     Route,
     useParams
   } from "react-router-dom";
   import {LinkContainer} from "react-router-bootstrap";
   import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Col,Row } from 'react-bootstrap';
   import 'bootstrap/dist/css/bootstrap.min.css';
class Dashboard extends React.Component {

/* render() {
  return (

    <div>        
<Form>
  <div className="tasksclass">
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label className="label" column sm={2}>
      Tasks
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="text" placeholder="Tasks" />
    </Col>
  </Form.Group>
  </div>

  <div className ="clientsclass">
  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label className="label"  column sm={2}>
      Clients
    </Form.Label>
    <Col sm={4}>
      <Form.Control type="text" placeholder="Client Name" />
    </Col>
  </Form.Group>
  </div>
  <fieldset>
    <Form.Group as={Row} className='formgroup'>
      <Form.Label  className="label" as="legend" column sm={2}>
        Status
      </Form.Label>
      <Col sm={4}>
        <Form.Check
          type="radio"
          label="To Do"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="In Progress"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Done"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Save Information</Button>
    </Col>
  </Form.Group>

</Form>
    </div>
 
  )
}
} */



    
      constructor(props) {
        super(props)
        this.state = {
          tasks: [
            {
              id: 1,
              task: 'Meeting Today',
              type: 'Business'
            },
            {
              id: 2,
              task: 'Work Out',
              type: 'Personal'
            }, {
              id: 3,
              task: 'Learn React',
              type: 'Personal'
            }
          ],
          searchTaskValue: '',
          completedTask: []
        }
      }
      
      deleteTask = (id) => {
        const {tasks, completedTask} = this.state;
        const filterTasks = tasks.filter(task => task.id !== id)
        const clearCompleted = completedTask.length > 0 && completedTask.filter(task => task.id !== id)
        
        this.setState({
          tasks: filterTasks,
          completedTask: clearCompleted
        })
      }
      
      addTask = (task, id, type) => {
        const {tasks} = this.state
        
        tasks.unshift({task, id, type})
        
        this.setState({
          tasks: tasks
        })
      }
      
      saveEditTask = (task, id) => {
        const { tasks } = this.state
        tasks.map(todo => {
          if(todo.id === id) {
            todo.task = task
          }
        })
        this.setState({tasks})
      }
      
      searchTask = (taskName) => {
        this.setState({searchTaskValue: taskName})
      }
    
      completeTask = (id) => {
        const {completedTask, tasks} = this.state
        const completed = tasks.filter(task => task.id === id)
        
        completedTask.push(...completed)
        this.setState({
          completedTask
        })
      }
      
      render() {
        const {tasks, searchTaskValue, completedTask} = this.state
        
        const calculateCompletedTask = (completedTask.length / tasks.length)* 100 ;
        const percentage = calculateCompletedTask.toFixed(0)
        // console.log(`${percentage}%`)
        
        // get todays date
        const d = new Date()
        const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        const day = weekDay[d.getDay()]
        const month = months[d.getMonth()]
        const date = d.getDate()
        const year = d.getFullYear()
        
        const searchFilter = tasks
                          .filter(todo => 
                           todo.task.toLowerCase().includes(searchTaskValue.toLowerCase()) 
                           || 
                           todo.type.toLowerCase().includes(searchTaskValue.toLowerCase()))
        
        
        return (
          <div id="app">
    
            <header>
              <div className="date">
                <TodaysDate day={day} month={month} date={date} year={year} />
              </div>
              <div className="type-of-tasks">
                <PersonalTask tasks={tasks} />
                <BusinessTask tasks={tasks} />
              </div>
              <div className="task-completion">
                <span>{percentage === 'NaN' ? 0 : percentage }% done</span>
              </div>
            </header>
            
            {tasks.length > 1 && <SearchTask searchTask={this.searchTask} />}
            
            <ul>
              {
                searchFilter.map(todo => 
                <TodoTask key={todo.id}
                  {...todo}
                  deleteTask={this.deleteTask}
                  saveEditTask={this.saveEditTask}
                  completeTask={this.completeTask}
                  />)
              }
            </ul>
            
            <AddTaskForm addTask={this.addTask}/>
            
          </div>
        )
      }
    }
    
    // filter list to check type & retrieve length
    const TypeCount = (list, type) => <p>{list.filter(l => l.type == type).length} <span>{type}</span></p>;
    
    const PersonalTask = ({tasks}) => TypeCount(tasks, 'Personal');
    const BusinessTask = ({tasks}) => TypeCount(tasks, 'Business');
    
    const TodaysDate = ({day, month, date, year}) => <p>{day} <span>{month} {date}, {year}</span></p>
    
    
    class SearchTask extends React.Component {
      
      searchTask = () => {
        const searchValue = this.searchInput.value
        const {searchTask} = this.props
        searchTask(searchValue);
      }
      
      render() {
        return (
          <div id="search-field">
            <input 
              type="text"
              placeholder="Search Task"
              onChange={this.searchTask}
              ref={input => this.searchInput = input} />
            <i className="fa fa-search"></i>
          </div>
        )
      }
    }
    
    class TodoTask extends React.Component{
      constructor(props) {
        super(props)
        this.state = {
          isEdit: false,
          isComplete: false
        }
      }
      
      deleteTask = () => {
        const { id , deleteTask } = this.props
        deleteTask(id)
      }
      
      editTask = () => {
        this.setState({
          isEdit: true
        })
      }
      
      completeTask = () => {
        const {completeTask, id} = this.props
        completeTask(id)
        this.setState({
          isComplete: true
        })
      }
      
      saveEditTask = (e) => {
        e.preventDefault()
        
        const {id} = this.props
        const {saveEditTask} = this.props
        
        if(!this.editInput.value) {
          return null
        }
        else {
          saveEditTask(this.editInput.value, id)
          this.setState({
            isEdit: false
          })
        }
        
      }
      
    
      render() {
        const {task, type} = this.props
        const {isEdit, isComplete} = this.state
        const disableBtn = isComplete && 'disable-btn'
        
        return (
            <li>        
              {
              isEdit ?
                <form
                  id="edit-task-form"
                  onSubmit={this.saveEditTask}>
                  <input 
                    defaultValue={task}
                    ref={editInput => this.editInput = editInput} 
                    />
                  <button>Save</button>
                </form>
                :
                <div>
                <p 
                  className={isComplete && 'completed'}>
                  {task} <span>{type}</span>
                </p>
                  <button 
                    className='delete-btn'
                    onClick={this.deleteTask}>
                    Delete
                </button>
                  <button
                    className={disableBtn}
                    disabled={isComplete}
                    onClick={this.editTask}>
                    Edit
                </button>
                  <button
                    className={disableBtn}
                    disabled={isComplete}
                    onClick={this.completeTask}>
                    Complete
                </button>
                </div>
            }
            </li>
        )
      }
    }
    
    class AddTaskForm extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          selected: ''
        }
      }
      
      handleSelectChange = (e) => {
        this.setState({selected: e.target.value})
      }
      
      addTask = (e) => {
        const {addTask} = this.props
        
        e.preventDefault()
        
        if(!this.taskInput.value || !this.state.selected) {
          return null
        }
        else {
          const date = new Date()
          const id = date.getTime()
          const type = this.state.selected
          addTask(this.taskInput.value, id, type)  
          this.taskInput.value = ''
          this.setState({selected: ''})
        }
      }
      
      render() {
        const { selected } = this.state
        return (
          <form id="add-task-form" onSubmit={this.addTask}>
            
              <input 
                id="task"
                type="text"
                placeholder="Add a task"
                ref={taskInput => this.taskInput = taskInput}/>
            
        
            <select
              value={selected}
              onChange={this.handleSelectChange}
              // ref={select => this.selectOption = select}
              >
              <option value="">Type</option>
              <option value="Personal">Personal</option>
              <option value="Business">Business</option>
            </select>
            <button>Add</button>
          </form>
        )
      }
    }
 
  
  

 

export default Dashboard;
