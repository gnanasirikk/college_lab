import { useState } from 'react';
import './App.css';

let istudents = [{ name: "Gnana", age: 23, grade: 32 },
    { name: "Rahul", age: 21, grade: 23 },
    { name: "Priya", age: 22, grade: 32 },
    { name: "Kiran", age: 20, grade: 23 }]

function App() {
  let [students,setStudents] = useState(istudents)
  let [editIndex,setEditIndex] = useState(null)
  let [search,setSearch] = useState("")
  let [formData,setFormData] = useState({name:"",age:"",grade:""})
  const handleDelete=(i)=>{
    const updatedStudents = students.filter((s,index)=>index!==i)
    // alert(i)
    setStudents(updatedStudents)
  }

    const handleAdd=()=>{
        // alert("added ")
        setStudents([...students,formData])
        setFormData({name:"",age:"",grade:""})
    }

    const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }
  
  const handleEdit=(i)=>{
    setEditIndex(i)
    setFormData(students[i])
  }

  const handleUpdate=()=>{
    const updatedStudents=students.map((s,i)=>i==editIndex?formData:s)
    setStudents(updatedStudents)
    setEditIndex(null)
    setFormData({name:"",age:"",grade:""})

  }




  return (
    <div className="App">
      <div className="form">

            <input  className="form-control" name="search" value="" placeholder='Type to search'></input>

<h2>{editIndex==null? "Add students" : "Update students"}</h2>
        <input
        className="form-control m-2"
        value={formData.name}
        name="name"
        onChange={handleChange}/>

<input className="form-control m-2" value={formData.age} name="age" onChange={handleChange}/>

<input
  className="form-control m-2"
  value={formData.grade}
  name="grade"
  onChange={handleChange}
/>
        {editIndex==null? <button className="btn btn-primary" onClick={()=>handleAdd()}>ADD Students</button>

        :<button className="btn btn-primary" onClick={()=>handleUpdate()}>Update Students</button>}

      </div>


      <h2>Student List</h2>
<table className="table table-bordered" border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.grade}</td>
              <td>
                <button className="btn btn-info" onClick={()=>handleEdit(index)}>Edit</button>
                <button className="btn-btn-danger" onClick={()=>handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;