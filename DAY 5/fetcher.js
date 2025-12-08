const res = fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res=>
            {
                return res.json()
            }).then(photos=>
            {
                console.log(photos)
            })
console.log(res)