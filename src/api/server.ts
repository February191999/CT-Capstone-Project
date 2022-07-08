let token = '4b7ccbf100bc8756c47844a9e5e4c40f8281bcec26138c05'
let cat_search_token = 'e993faaa-8de1-4b7d-a851-7ef0c54acd0b'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://app-home-for-cats-rh.herokuapp.com/api/cats`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://app-home-for-cats-rh.herokuapp.com/api/cats`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
		},

        update: async (id:string, data:any = {}) => {
            const response = await fetch(`https://app-home-for-cats-rh.herokuapp.com/api/cats/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
        },

        delete: async(id:string) => {
            const response = await fetch(`https://app-home-for-cats-rh.herokuapp.com/api/cats/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                }
            })
        }
    }

export const cat_pictures = {
    getpictures: async () => {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?format=json", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': `${cat_search_token}`
              },
        });
         
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    
}