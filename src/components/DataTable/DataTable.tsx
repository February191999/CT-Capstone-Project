import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { CatForm } from '../CatForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'name', headerName: 'Cat Name', flex: 1 },
    { field: 'breed', headerName: 'Cat Breed', flex: 1 },
    { field: 'color', headerName: 'Cat Color', flex: 1 },
    { field: 'owner_name', headerName: 'Owner Name', flex: 1 },
    { field: 'owner_contact_number', headerName: 'Contact Number', flex: 1 },
];

interface gridData {
    data: {
        id?:string
    }
}

export const DataTable = () => {

    let { catData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}});
    const [selectionModel, setSelectionModel] = useState<any>([]);
    

    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        setTimeout( () => { window.location.reload(); }, 1000)
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Cats Info</h2>

        <DataGrid rows={ catData } columns={ columns } pageSize={ 5 } checkboxSelection={true} 
        onSelectionModelChange={ (item) => {
            setSelectionModel(item)
          }}
        />

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        {/* Dialog pop-up */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Cat Info {selectionModel}</DialogTitle>
            <DialogContent>
                <DialogContentText>Update Cat Info</DialogContentText>
                    <CatForm id={selectionModel!}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleClose} color="primary">Done</Button>
            </DialogActions>
        </Dialog>
            
        </div>
    )
}