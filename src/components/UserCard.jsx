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
    <>
        <div className='names'>
            <article className='user__info'>
                <h2 className='user__name'>{`${user.first_name} ${user.last_name}`}</h2>
                <ul className='user__list'>
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
                    <button className='user__btn' onClick={handleDelete}><i className='bx bx-trash'></i></button>
                    <button className='user__btn2' onClick={handleEdit}><i className='bx bx-edit'></i></button>
                </div>
            </article>
        </div>
    </>
  )
}

export default UserCard