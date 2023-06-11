import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

function App() {

  const [isCloseForm, setIsCloseForm] = useState(true)

  const [updateInfo, setUpdateInfo] = useState()

  const baseUrl = 'https://users-crud.academlo.tech/'
  
  const [ users, getAllUser, createNewUser, deleteUserById, updateUserById ] = useFetch(baseUrl)

  useEffect(() => {
    getAllUser('/users')
  }, [])

  const handleOpenForm = () => {
    setIsCloseForm(false)
  }

  return (
    <div>
      <div className='header'>
        <h1 className='header__title'>Users Crud</h1>
        <button className='header__btn' onClick={handleOpenForm}>
          <h2>Open Form</h2>
        </button>
      </div>
      <div className={`form__container ${isCloseForm ? 'form__close' : ''}`}>
        <FormUsers 
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setIsCloseForm={setIsCloseForm}
        />
      </div>
      <div>
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setIsCloseForm={setIsCloseForm }
            />
          ))
        }
      </div>
      <footer className='footer'>
        <a className='footer__link' href="https://github.com/vera251t/entregable4" target='_blank'>Repositorio</a>
      </footer>
    </div>
  )
}

export default App
