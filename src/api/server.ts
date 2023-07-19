let token = 'cc3d32f485957b198d45ce9a0696400519d530410e8b2f51'
import { DroneState } from "../redux/slices/rootSlice";

export const serverCalls={
    get: async () => {
        const response = await fetch(`https://ranger-drones-121.glitch.me/api/drones`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}` 
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from server'), response.status
        }
        return await response.json()
    },
    create: async(data: DroneState) => {
        const response = await fetch(`https://ranger-drones-121.glitch.me/api/drones`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });        
        if(!response.ok){
            throw new Error('Failed to Create new data on server'), response.status
        }
        return await response.json()
    },
    update: async(id: string, data: DroneState) => {
        const response = await fetch(`https://ranger-drones-121.glitch.me/api/drones/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create data on server'), response.status 
        }
        return await response.json()
    },
    delete: async(id:string) => {
        const response = await fetch(`https://ranger-drones-121.glitch.me/api/drones/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to delete data'), response.status
        }
    } 
}