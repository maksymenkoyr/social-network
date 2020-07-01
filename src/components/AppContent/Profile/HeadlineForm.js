import React, {useEffect} from 'react'
import Button from '../../common/Buttons/Button'
import {useForm} from 'react-hook-form'

const HeadlineForm = ({setHeadlineValue, setEditMode}) => {
    const {register, handleSubmit} = useForm()
    const headlineModal = React.createRef()

    const onSubmit = ({headlineValue}) => {
        console.log(headlineValue)
        setHeadlineValue(headlineValue)
        setEditMode(false)
    }

    useEffect(() => {
        const handleClick = event => {
            if (headlineModal.current && !headlineModal.current?.contains(event.target)) {
                setEditMode(false)
            }
        }
        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [headlineModal, setEditMode])
    return (
        <div ref={headlineModal}>
            <form onSubmit={handleSubmit(onSubmit)} className='headline-form '>
                <p className='headline-form__title'>Edit headline:</p>
                <input name='headlineValue' ref={register} className='headline-form__input'></input>
                <Button className='headline-form__button'>Save</Button>
            </form>
        </div>
    )
}

export default HeadlineForm
