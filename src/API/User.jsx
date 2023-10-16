const url = "http://localhost:3000/user"
import axios from 'axios';

export async function CreateUser(cadastro, senha) {
    // 🥐
    try {

        const responseGet = await axios.get(url);
        console.log(responseGet.data);

    } catch (error) {
        console.log(error)
    }

    try {
        const data = { cadastro, senha };
        const responsePost = await axios.post(url, data);
        console.log(responsePost.data);

    } catch (error) {
        console.log(error);
    }


}


export async function ChangeUser(cadastro, novasenha) {

    console.log(cadastro, novasenha)

    try {

        const responseGet = await axios.get(url);
        console.log(responseGet.data);

    } catch (error) {
        console.log(error)
    }

    try {
        const data = { cadastro, novasenha };
        const responsePost = await axios.patch(url, data);
        console.log(responsePost.data);

    } catch (error) {
        console.log(error);
    }


}