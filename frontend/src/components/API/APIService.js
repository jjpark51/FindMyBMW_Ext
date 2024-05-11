export default class APIService {
    static InsertArticle(body){
        return fetch('/test', {
            'method': 'POST',
            headers: {
                'Content-Type': 'applications/json'
            },
            body:JSON.stringify(body)
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    }
}