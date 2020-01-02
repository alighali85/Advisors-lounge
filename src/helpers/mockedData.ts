import * as faker from 'faker'

export function getData (): Promise<any> {
return new Promise((resolve, reject) =>  {
    let data = []
        const {
            internet:{email},
            name: {firstName, lastName},
            phone:{phoneNumber}
        } =  faker
        for(let i = 0; i <= 300; i++) {
            const item = {
                name: firstName(),
                lastName: lastName(),
                email: email(),
                telephone: phoneNumber()
            }
            data.push(item)
        }
    resolve(data)
}).catch(err=> console.log(err))
}