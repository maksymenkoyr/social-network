import React, {useEffect} from 'react'
import Button from '../../common/Buttons/Button'
import {useForm} from 'react-hook-form'
import {getHeadlineRequest} from '../../../API/requests'

const HeadlineForm = ({setHeadlineValue, setEditMode, setHeadline, headlineValue}) => {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            headline: headlineValue,
        },
    })
    const headlineModal = React.createRef()

    const onSubmit = ({headline}) => {
        console.log(headline)
        setHeadlineValue(headline)
        setHeadline(headline)
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
                <input name='headline' ref={register} className='headline-form__input'></input>
                <Button className='headline-form__button'>Save</Button>
            </form>
        </div>
    )
}

export default HeadlineForm
