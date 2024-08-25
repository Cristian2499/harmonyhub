import React, {useEffect, useState, useContext, act} from 'react'
import {Context} from "../store/appContext"
import "../../styles/search-bar.css";
import { objectOf } from 'prop-types';
import { useParams } from 'react-router-dom';

const SearchBar = ({setUsers}) => {
    const {actions} = useContext(Context)
    const [musicGenders, setMusicGenders] = useState([])
    const [musicRoles, setMusicRoles] = useState([])
    // new line to get only the cities where we have users
    const [cities, setCities] = useState([])

    //search button function to map and filter the correct users to show
    const getUsersByParam = async (value, param)=>{
        const response = await actions.getAllUsersByParam(value, param)
        if (response){
            setUsers(response)
            console.log(response)
        }
    } 

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
        // new line to get the cities
        const getCities = async ()=>{
            const response = await actions.getAllCountrys()
            if (response){
                setCities(response)
                console.log(cities)
            }
        } 
        getMusicGenders()
        getMusicRoles()
        getCities()
    },[])

   
    return (
        <div className='container d-flex gap-5 justify-content-center'>
            <div className='row'>
                <label className='fw-bold ps-0 mb-1' htmlFor="">Choose a place</label>
                <select onChange={(e) => getUsersByParam(e.target.value, "country")} defaultValue={"default"} className="form-select form-select-sm text-capitalize" aria-label="Small select example">
                    <option disabled value="default">-</option>
                    {cities && cities.length>0 && cities.map((item, index) => {
                        return(
                            <option key={index} value={item}>{item}</option>
                        )
                    })}
                </select>
            </div>
            {/* de aqui para abajo ayudo alexis para el search */}
            <div className='row'>
                <label className='fw-bold ps-0 mb-1' htmlFor="">Choose a role</label>
                <select onChange={(e) => getUsersByParam(e.target.value, "role")} defaultValue={"default"} className="form-select form-select-sm text-capitalize" aria-label="Small select example">
                    <option disabled value="default">-</option>
                    {musicRoles && musicRoles.length>0 && musicRoles.map(item => {
                        return(
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )
                    })}
                </select>
            </div>
            <div className='row'>
                <label className='fw-bold ps-0 mb-1' htmlFor="">Choose a music gender</label>
                <select onChange={(e) => getUsersByParam(e.target.value, "gender")} defaultValue={"default"} className="form-select form-select-sm text-capitalize" aria-label="Small select example">
                    <option disabled value="default">-</option>
                    {musicGenders && musicGenders.length>0 && musicGenders.map(item => {
                        return(
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )
                    })}
                </select>
            </div>
            {/* <div className='d-flex align-items-end'>
            <button className="search px-4" 
            // esto seria la funcion para hacer el search y mostrarlo en cards
                    onClick={searchAndShow}>Search
            </button>
            </div> */}
        </div>
    )
}

export default SearchBar