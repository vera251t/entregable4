import { useEffect } from "react"
import { useForm } from "react-hook-form"
import './styles/FormUser.css'

const FormUsers = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, setIsCloseForm}) => {

    const { register, reset, handleSubmit } = useForm()

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])

    const submit = data => {
        if(updateInfo) {
            //Actualizar
            updateUserById('/users', updateInfo.id, data)
            setUpdateInfo()
        } else {
            //Crear
            createNewUser('/users', data)
        }
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        });
        setIsCloseForm(true)
    };

    const handleExit = () => {
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        });
        setIsCloseForm(true)
        setUpdateInfo()
    }

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
        <h2 className="form__title">Form Users</h2>
        <div onClick={handleExit} className="form__x">x</div>
        <div className="form__section">
            <label className="form__label" htmlFor="email">Email</label>
            <input className="form__input" {...register('email')} id="email" type="text" placeholder="Enter your email" />
        </div>
        <div className="form__section">
            <label className="form__label" htmlFor="password">Password</label>
            <input className="form__input" {...register('password')} id="password" type="password" placeholder="Enter your password" />
        </div>
        <div className="form__section">
            <label className="form__label" htmlFor="first_name">First Name</label>
            <input className="form__input" {...register('first_name')} id="first_name" type="text" placeholder="Enter your first name" />
        </div>
        <div className="form__section">
            <label className="form__label" htmlFor="last_name">Last Name</label>
            <input className="form__input" {...register('last_name')} id="last_name" type="text" placeholder="Enter your last name" />
        </div>
        <div className="form__section">
            <label className="form__label" htmlFor="birthday">Birthday</label>
            <input className="form__input" {...register('birthday')} id="birthday" type="date" />
        </div>
        <button className="form__btn">{updateInfo ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default FormUsers