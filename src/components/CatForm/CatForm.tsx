import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseCatName, chooseCatBreed, chooseCatColor, chooseOwnerName, chooseOwnerContactNumber } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

interface CatFormProps {
    id?:string;
    data?:{}
}

interface CatState {
    name: string;
    breed: string;
    color: string;
    owner_name: string;
    owner_contact_number: string;
}

export const CatForm = (props:CatFormProps) => {

    const dispatch = useDispatch(); 
    const store = useStore();
    const name = useSelector<CatState>(state => state.breed);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            dispatch(chooseCatName(data.name));
            dispatch(chooseCatBreed(data.breed));
            dispatch(chooseCatColor(data.color));
            dispatch(chooseOwnerName(data.owner_name));
            dispatch(chooseOwnerContactNumber(data.owner_contact_number))
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Cat Name</label>
                    <Input {...register('name')} name="name" placeholder='Cat Name'/>
                </div>
                <div>
                    <label htmlFor="breed">Cat Breed</label>
                    <Input {...register('breed')} name="breed" placeholder='Cat Breed'/>
                </div>
                <div>
                    <label htmlFor="color">Cat Color</label>
                    <Input {...register('color')} name="color" placeholder='Cat Color'/>
                </div>
                <div>
                    <label htmlFor="owner_name">Owner Name</label>
                    <Input {...register('owner_name')} name="owner_name" placeholder='Owner Name'/>
                </div>
                <div>
                    <label htmlFor="owner_contact_number">Contact Number</label>
                    <Input {...register('owner_contact_number')} name="owner_contact_number" placeholder='Contact Number'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}