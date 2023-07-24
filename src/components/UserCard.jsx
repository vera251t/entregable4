import './styles/UserCard.css'

const UserCard = ({user, deleteUserById, setUpdateInfo, setIsCloseForm}) => {

    const handleDelete = () => {
        deleteUserById('/users', user.id)
    }

    const handleEdit = () => {
        setUpdateInfo(user)
        setIsCloseForm(false)
    }

  return (
    <article className="crud">
        <h2 className='crud__name'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul className='crud__list'>
            <li>
                <span>Email: </span>
                <span>{user.email}</span>
            </li>
            <li>
                <span>Birthday: </span>
                <span>{user.birthday}</span>
            </li>
        </ul>
        <div>
            <button className='crud__btn' onClick={handleDelete}><i className='bx bx-trash'></i></button>
            <button className='crud__btn2' onClick={handleEdit}><i className='bx bx-edit'></i></button>
        </div>
    </article>
  )
}

export default UserCard