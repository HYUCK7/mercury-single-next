import React, {useState} from 'react';
import {connect, useDispatch, useSelector } from 'react-redux';
import { Write } from '@/components';
import {writeRequest} from '@/modules/trip/write';

const WritePage = () => {
    const [comment, setComment] = useState({place: '', date: '', inOut: '', subject: ''})
    const dispatch = useDispatch()
    const onChange = e =>{
        e.preventDefault()
        const {name, value} = e.target;
        setComment({
            ...comment,
            [name] : value
        })
    }
    const { isWrited, writeUser } = useSelector(state => state.write)
    const onSubmit = event =>{
        event.preventDefault()
        dispatch(writeRequest(comment))
        alert(JSON.stringify(comment))

    }
    return (
        <Write onChange = {onChange} onSubmit ={onSubmit} />
        
    )
};
const mapStateToProps = state => ({writeUser: state.write.writeUser})
const writeActions = {writeRequest}
export default connect(mapStateToProps, writeActions)(WritePage)