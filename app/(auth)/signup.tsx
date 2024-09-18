import { View, Text, ScrollView } from "react-native"
import { images } from "../../constants";

const SignUp = () =>{
    return (
        <ScrollView className ="flex-1 bg-white">
            <View>
                <View className="relative w-full h-[250px]">
                    <Image source={images.signupCar} className/>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignUp;