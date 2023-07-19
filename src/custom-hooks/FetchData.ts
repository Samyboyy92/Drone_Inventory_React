import React, { useState, useEffect } from 'react';
import { serverCalls } from '../api';
import { DroneState } from '../redux/slices/rootSlice';

export const useGetData = () => {
    const [droneData, setData] = useState<DroneState[]>([]);

    async function handleDataFetch(){
        const result = await serverCalls.get();
        setData(result)
    }

    // Introducing the useEffect Hook to add our data to react State
    useEffect( () => {
        handleDataFetch();
    }, [])
    return {droneData, getData:handleDataFetch}
}