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
    getList: jest.fn(() => {
        return Promise.resolve({
            data: [
                {
                    userList: 'List Task'
                }
            ]
        })
    }),
    getTask: jest.fn(() => {
        return Promise.resolve({
            data: [
                {
                    userList: 'Get Task'
                }
            ]
        })
    }),
    putTask: jest.fn(() => {
        return Promise.resolve({
            data: [
                {
                    userList: 'Put Task'
                }
            ]
        })
    }),
    deleteTask: jest.fn(() => {
        return Promise.resolve({
            data: [
                {
                    userList: 'Delete Task'
                }
            ]
        })
    })
}