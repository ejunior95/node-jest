const { User } = require('../../src/app/models')

describe('Authentication', () => {
    it('should sum two numbers', async () => {
        const user = await User.create({
            name: 'Stefani',
            email: 'stefanihtinha@hotmail.com',
            password_hash: '28190992'
        })

        console.log(user)

        expect(user.email).toBe('stefanihtinha@hotmail.com')
    })
})