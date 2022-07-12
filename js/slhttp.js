class slhttp{

    async get(url) {
        const res = await fetch(url);
        if(res.ok){
            const data = await res.json();
            // console.log(data.posts);
            return data
        }
        throw new Error(res.status + " " + res.statusText);
    }

    async post(url,data){
        const res = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if(res.ok){
            const data = await res.json();
            return data;
        }
        throw new Error(res.status + " " + res.statusText);
    }

    async put(url,data){
        const res = await fetch(url,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if(res.ok){
            const data = await res.json();
           return data
        }
        throw new Error(res.status + " " + res.statusText);
    }

    async delete(url){
        const res = await fetch(url,{
            method:'DELETE'
        })

        if(res.ok){
            const data = await res.json();
            return data
        }
        throw new Error(res.status + " " + res.statusText);
    }
}