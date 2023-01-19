import BaseAPI from '$root/page/base.api'

const reqresApi = {
    register: (data) => BaseAPI.post('/register', data)
}

export default reqresApi;