import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/response/AuthResponse";

export default class UserStore {
    user = {} as IUser;
    isAuth = false
    constructor() {
        makeAutoObservable(this)
    }
    setAuth(bool:boolean){
        this.isAuth = bool;
    }
    setUser(user : IUser){
        this.user = user
    }
    async login(email:string,password:string){
        try{
            const response = await AuthService.login(email,password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
        } catch (e : unknown){
            console.log(e)
        }
    }
    async registration(username:string, email:string,password:string){
        try{
            const response = await AuthService.registration(username,email,password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
        } catch (e : any){
            console.log(e.response?.data?.message)
        }
    }
    async logout(){
        try{
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
        } catch (e : any){
            console.log(e.response?.data?.message)
        }
    }
    async checkAuth(){
        try{
            const response = await axios.post<AuthResponse>(`${process.env.REACT_APP_API_URL}/auth/refresh`,{},{withCredentials:true})
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
        } catch (e : any){
            console.log(e.response?.data?.message)
        }
    }
}