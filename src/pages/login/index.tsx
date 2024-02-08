import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormInput from "../../components/form/FormInput"
import AuthForm from "../../components/form/AuthForm"
import { inputs } from "./utils/inputs"
import { ApiService } from "../../services/ApiService"
import { API } from "../../common/apiEndPoints"
import useSignIn from "react-auth-kit/hooks/useSignIn"
import { useNavigate } from "react-router-dom"

const LoginFormSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
})

type LoginFormInput = z.infer<typeof LoginFormSchema>

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: "kminchelle",
      password: "0lelplR",
    },
  })

  const signIn = useSignIn()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    try {
      const res = await ApiService.post(
        API.auth.login,
        { ...data, expiresInMins: 3600 },
        {
          signal: 15000,
          useAuthorization: false,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      const { token, ...authUserState } = res.data
      console.log({ token, authUserState })
      signIn({
        auth: {
          token: token,
          type: "Bearer",
        },
        userState: authUserState,
      })
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthForm title="Login" onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((item) => (
        <FormInput
          key={item.name}
          label={item.label}
          name={item.name}
          type={item.type}
          placeholder={item.placeholder}
          register={register(item?.name)}
          message={errors?.[item.name]?.message}
        />
      ))}
    </AuthForm>
  )
}

export default Login
