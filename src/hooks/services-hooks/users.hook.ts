import { updateUserProfileAPI } from "@/services/users.api"
import { useMutation } from "@tanstack/react-query"

export const useUpdateUser = ()=>{
return useMutation({
    mutationFn:(body:any)=>updateUserProfileAPI(body)
})
}