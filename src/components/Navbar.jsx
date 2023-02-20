import {useState} from 'react';
import {Link, useNavigate} from  'react-router-dom';
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'


const Navbar = () => {
  const [search, setSearch] = useState( '' ) 
  const navigate = useNavigate()
  
  const handleSubmit = (e) =>{
    e.preventDefault()

    if(!search){
      alert('Enter a movie before searching.')
      return
    }

    navigate(`/search?q=${search.trim()}`)
    setSearch('')
  }
  
  return( 
    <nav id="navbar">

      <Link to='/'> 
        <h2>
          <span> <BiCameraMovie/> </span>
          <span className='nav-h2'> Movie Lib </span> 
        </h2>
      </Link>

      <form onSubmit={ handleSubmit }>
        <input type="text" placeholder='Find a movie' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button type='submit'> <span> <BiSearchAlt2/> </span> </button>
      </form>

    </nav>
  )
}

export default Navbar