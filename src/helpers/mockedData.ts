import * as faker from 'faker'

export function getData(): Promise<any> {
    return new Promise((resolve, reject) => {
        let data = []
        const {
            internet: { email },
            name: { firstName, lastName, title, jobDescriptor },
            phone: { phoneNumber },
            random: { number }
        } = faker
        for (let i = 0; i <= 150; i++) {
            const item = {
                id: i,
                name: firstName(),
                lastName: lastName(),
                email: email(),
                telephone: phoneNumber(),
                title: title(),
                bio: jobDescriptor(),
                rating: number({
                    'min': 1,
                    'max': 10
                })
            }
            data.push(item)
        }
        resolve(data)
    }).catch(err => console.log(err))
}