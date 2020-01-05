const faker = require('faker')
const express = require('express')
const app = express();

const PORT = process.env.PORT || 3002;
const ADVISORS_ROUTE = '/advisors'

app.listen(PORT, () => {
    console.log('Backend app running on port 3002')
});

app.get(ADVISORS_ROUTE, (req, res) => {
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
                'max': 5
            })
        }
        data.push(item)
    }
    setTimeout(() => {
        res.send(data)
    }, 500)
});
