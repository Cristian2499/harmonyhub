import React, {useEffect, useState, useContext, act} from 'react'
import {Context} from "../store/appContext"
import "../../styles/search-bar.css";

const SearchBar = () => {
    const {actions} = useContext(Context)
    const [musicGenders, setMusicGenders] = useState([])
    const [musicRoles, setMusicRoles] = useState([])

    useEffect(()=>{
        const getMusicGenders = async ()=>{
            const response = await actions.getAllMusicGenders()
            if (response){
                setMusicGenders(response)
            }
        }

        const getMusicRoles = async ()=>{
            const response = await actions.getAllMusicRoles()
            if (response){
                setMusicRoles(response)
            }
        } 
        getMusicGenders()
        getMusicRoles()
    },[])
    return (
        <div className='container d-flex gap-5 justify-content-center'>
            <div className='row'>
                <label className='fw-bold ps-0 mb-1' htmlFor="">Choose a place</label>
                <select defaultValue={"default"} className="form-select form-select-sm" aria-label="Small select example">
                    <option disabled value="default">Open this select menu</option>
                    <option value="Colombia-Bogota">Colombia-Bogota</option>
                    <option value="Venezuela-Caracas">Venezuela-Caracas</option>
                    <option value="Ecuador-Quito">Ecuador-Quito</option>
                    <option value="Peru-Lima">Peru-Lima</option>
                    <option value="Bolivia-La paz">Bolivia-La paz</option>
                    <option value="Mexico-CDMX">Mexico-CDMX</option>
                    <option value="Chile-Santiago">Chile-Santiago</option>
                    <option value="Paraguay-Asuncion">Paraguay-Asuncion</option>
                    <option value="Uruguay-Montevideo">Uruguay-Montevideo</option>
                    <option value="Argentina-BSAS">Argentina-BSAS</option>
                </select>
            </div>
            {/* de aqui para abajo ayudo alexis para el search */}
            <div className='row'>
                <label className='fw-bold ps-0 mb-1' htmlFor="">Choose a role</label>
                <select defaultValue={"default"} className="form-select form-select-sm" aria-label="Small select example">
                    <option disabled value="default">Open this select menu</option>
                    {musicRoles && musicRoles.length>0 && musicRoles.map(item => {
                        return(
                            <option className='text-capitalize' key={item.id} value={item.id}>{item.name}</option>
                        )
                    })}
                </select>
            </div>
            <div className='row'>
                <label className='fw-bold ps-0 mb-1' htmlFor="">Choose a music gender</label>
                <select defaultValue={"default"} className="form-select form-select-sm" aria-label="Small select example">
                    <option disabled value="default">Open this select menu</option>
                    {musicGenders && musicGenders.length>0 && musicGenders.map(item => {
                        return(
                            <option className='text-capitalize' key={item.id} value={item.id}>{item.name}</option>
                        )
                    })}
                </select>
            </div>
            <div className='d-flex align-items-end'>
            <button className="search px-4">Search</button>
            </div>
        </div>
    )
}

export default SearchBar