import React , {useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Axios from 'axios'
import SimpleCard from './Card'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    marginLeft : 450
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },

}));

export default function Recherche() {
  const classes = useStyles();
  const [Search , setSearch] =useState('')
  const [Result , setResult] =useState('')

  
  const handleChange = (e) => {
    setSearch(e.target.value)
   }

   const handleSubmit = (e) => {
       e.preventDefault()
        

        Axios.post('http://localhost:3003/api/Recherche' , {rec : Search}).then((res ,err) => {
            if (res.data[0] === undefined) {
                setResult('Indisponible')
            }
            else {
                console.log(res.data[0].Title)
                setResult(res.data[0].Title)
            }

         })

        setSearch('')

    }   

  return (
  <div>
    <Paper component="form" className={classes.root}>

      <InputBase
        className={classes.input}
        placeholder="Search "
        value ={Search}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'search ' }}
      />
      <IconButton type="submit" onClick={handleSubmit} className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
    <SimpleCard res ={Result} />
 </div>
    
  );
}