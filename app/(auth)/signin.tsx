import {Image, View, Text, ScrollView } from "react-native"
import { images } from "../../constants";
import InputField from "../../components/InputField";
import { useCallback, useState } from "react";
import CustomButtton from "../../components/CustomButton";
import { Link, Router } from "expo-router";
import { useSignIn } from "@clerk/clerk-expo";

const SignIn = () =>{
    const { signIn, setActive, isLoaded } = useSignIn()
    const router = useRouter()
    const [form, setForm] = useState({
        email:'',
        password:'',
    });

    const onSignInPress = useCallback(async () => {
        if (!isLoaded) {
          return
        }
    
        try {
          const signInAttempt = await signIn.create({
            identifier: form.email,
            password:form.password,
          })
    
          if (signInAttempt.status === 'complete') {
            await setActive({ session: signInAttempt.createdSessionId })
            router.replace('/')
          } else {
            // See https://clerk.com/docs/custom-flows/error-handling
            // for more info on error handling
            console.error(JSON.stringify(signInAttempt, null, 2))
          }
        } catch (err: any) {
          console.error(JSON.stringify(err, null, 2))
        }
      }, [isLoaded, form.email, form.password])

    return (
        <ScrollView className ="flex-1 bg-white">
            <View>
                <View className="relative w-full h-[250px]">
                    <Image source={images.signUpCar} className="z-0 w-full h-[250px]"/>
                    <Text className="text-2xl text-black font-JakartaSemiBold absolutebottom-5 left-5">Welcome 👋
                    </Text>
                </View>

                  <View className ="p-5">
                    
                    <InputField
                     label="Email"
                     placeholder="Enter your email"
                    icon ={icons.email}
                    value={form.email}
                    onChangeText ={(value) =>setForm({ ...form,
                        email:value,

                    })}
                    />
                    <InputField
                     label="Password"
                     placeholder="Enter your password"
                     secureTextEntry={true}
                    icon ={icons.person}
                    value={form.password}
                    onChangeText ={(value) =>setForm({ ...form,
                        password:value,

                    })}
                    />

                     <CustomButtton title="Sign In" onPress={onSignUpPress} className="mt-6" />

                     {/* OATS  */}

                     <Link href="/sign-up" className="text-lg text-center text-general-200 mt-10">
                     <Text>Dpn't have an account?</Text>
                     <Text className="text-purple-500">Log In</Text>
                     </Link>
                </View>
              
              {/* Verofication Model */ }

            </View>
        </ScrollView>
    );
};

export default SignIn;