import Api from './api'


const UsersService={
    register:(params)=>Api.post('/users/register',params),
    login: async(params)=>{
        const response = await Api.post("/users/login", params)
        //para armazenar no localstorage do navegador o token do usuário ao 
        //efetuar login
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);

    }
}

export default UsersService;