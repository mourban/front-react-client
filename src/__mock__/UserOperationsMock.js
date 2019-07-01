module.exports = {
    postAdd: jest.fn(() => {
        return Promise.resolve({
            data: [
                {
                    status: 'test@test.com registrado'
                }
            ]
        })
    }),
    postLogin: jest.fn(() => {
        return Promise.resolve({
            data: [
                {
                    token: 'asdasda87s89fywr8ruwryw74r8oreuryw47co47w4897'
                }
            ]
        })
    }),
    getList: jest.fn(() => {
        return Promise.resolve({
            data: [
                {
                    userList: 'List Users'
                }
            ]
        })
    }),
    getUser: jest.fn(() => {
        return Promise.resolve({
            data: [
                {
                    userList: 'Get User'
                }
            ]
        })
    }),
    putUser: jest.fn(() => {
        return Promise.resolve({
            data: [
                {
                    userList: 'Put User'
                }
            ]
        })
    }),
    deleteUser: jest.fn(() => {
        return Promise.resolve({
            data: [
                {
                    userList: 'Delete User'
                }
            ]
        })
    })
}