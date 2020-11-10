import React , {useState , useEffect , useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' 
import {v4 as uuid} from 'uuid'
import Axios from 'axios'
import List from './component/List'
import Input from './component/Input'


function Affiche() {

    const [Title , setTitle] = useState('')
    const [id , setId] =useState(uuid())
    const [titles , setTitles] =useState([])
    const [edittitle , setedittitle] = useState(false)

    const handleChange  =(e) => {

        setTitle(e.target.value)
  
    }

    useEffect(() => {
        Axios.get('http://localhost:3003/api/get').then((response) =>{
    
          setTitles(response.data)
          console.log(response.data)
    
        })
    } , [])



    const handleSubmit = (e) => {

        e.preventDefault()
        const newTitle = {
    
            id : id,
            title : Title,
              
    
        }
          
    
        if (edittitle === true) {

        Axios.put('http://localhost:3003/api/update' , newTitle)
    
        }
    
        Axios.post('http://localhost:3003/api/insert' , newTitle).then( ()=> {
    
              console.log('success')
        })
    
        setTitles([...titles, newTitle])
        setTitle('');
        setId(uuid())
        setedittitle(false)
    }

    const handleDelete = (id) => {
        Axios.delete(`http://localhost:3003/api/delete/${id}`);
    
        const filterdItems = titles.filter( (title) => 
          title.id !== id
        )
        
        setTitles(filterdItems)
     
    }

    const handleEdit = (id) => {

        const filterdTitles = titles.filter( title => 
          title.id !== id
        )
        
        const selectedTitle = titles.find(Title => Title.id === id)
    
        
    
        setTitles(filterdTitles)
        setTitle(selectedTitle.title);
        setedittitle(true)
        setId(id)
    }
    




    
 return (

  <div className='container'>
    <div className='row'>

      <div className="col-5 mx-auto col-md-8 mt-4">


            <h3 className='text-capitalize text-center'> Todo input</h3>

            <Input titre={Title}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    edittitle={edittitle}

            />

            <List titles={titles} 
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
              />




        </div>
    </div>
   </div>

    )


    
  
 }
export default Affiche
