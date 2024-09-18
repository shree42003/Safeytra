import { useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { useRef } from "react";
import CustomButtton from "../../components/CustomButton";
import { router } from "expo-router";

const onboarding = () =>{

      const swiperRef = useRef<Swiper>(null)
      const [activeIndex, setActiveIndex] = useState(0)
      const isLastSlide = activeIndex === onboarding.length-1;
    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-white  ">
           <TouchableOpacity onPress={() =>{
            //  router.replace(href: "/(auth)/sign-up")
           }}
           className="w-full flex justify-end items-edn p-5"
           >
            <Text className="text-black text-md font-JakartaBold">Skip</Text>
           </TouchableOpacity>
           <Swiper ref={swiperRef}
          loop={false}
          dot={<View className="w-[32px] h=[4px] mx-1 bg-[#E2E8F0] rounded-full"/>}
          active={<View className="w-[32px] h=[4px] mx-1 bg-[#0286FF] rounded-full"/>
          }
          onIndexChanged={(index) => setActiveIndex(index)}
          >
           {onboarding.map((item) =>(
            <View key={item.id} className="flex items-center justify-center p-5">
                <Image source ={item.image} className="w-full h-[300px]" />
                <View className="flex flex-row items-center justify-center w-full mt-10">
                    <Text className="tect-black text-3xl font-bold mx-10 text-center">
                        {item.title}
                    </Text>
                </View>
                <Text className="text-md fpont-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
                    {item.description}
                </Text>
                </View>
           ))}
           </Swiper>
           <CustomButtton
           title={isLastSlide ? 'Get Started' : 'Next'}
           onPress={() =>isLastSlide ? router.replace('/(auth/sign-up)')}
           className="w-11/12 mt"
            />
        </SafeAreaView>
    );
};

export default onboarding;