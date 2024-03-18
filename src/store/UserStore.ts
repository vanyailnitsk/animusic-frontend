import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/response/AuthResponse";

export default class UserStore {
    user = {};
    isAuth = false
    isAuthInProgress = false
    constructor() {
        makeAutoObservable(this)
    }
    setAuth(bool:boolean){
        this.isAuth = bool;
    }
    setUser(user : IUser | {}){
        this.user = user
    }
    async login(email:string,password:string){
        this.isAuthInProgress = true
        try{
            const response = await AuthService.login(email,password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e : unknown){
            console.log(e)
        } finally {
            this.isAuthInProgress = false
        }

    }
    async registration(username:string, email:string,password:string){
        this.isAuthInProgress = true
        try{
            const response = await AuthService.registration(username,email,password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e : any){
            console.log(e.response?.data?.message)
        } finally {
            this.isAuthInProgress = false
        }
    }
    async logout(){
        this.isAuthInProgress = true
        try{
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({})
        } catch (e : any){
            console.log(e.response?.data?.message)
        } finally {
            this.isAuthInProgress = false
        }
    }
    async checkAuth(){
        this.isAuthInProgress = true
        try{
            const response = await axios.post<AuthResponse>(`${process.env.REACT_APP_API_URL}/auth/refresh`,{},{withCredentials:true})
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
        } catch (e : any){
            console.log(e.response?.data?.message)
        } finally {
            this.isAuthInProgress = false
        }
    }
}