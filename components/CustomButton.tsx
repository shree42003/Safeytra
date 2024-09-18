import {Text, TouchableOpacity } from "react-native"


const getBgvariantStyle =(variant: Buttonprops["bgVariant"]){
    switch (variant){
    case "secondary":
        return "bg-gray-500";
    case "danger":
        return "bg-red-500";
    case "success":
        return "bg-green-500";
    case "outline":
        return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
        return "bg-[#0286ff]";                
}
}; 
const getTextvariantStyle =(variant: Buttonprops["textVariant"]){
    switch (variant){
    case "primary":
        return "text-black";
    case "secondary":
        return "text-gray-100";
    case "danger":
        return "bg-red-100";
    case "sucess":
        return "bg-green-100";
    default:
        return "bg-#ffff";                
}
};
const CustomButtton = ({onPress,
    title,
    bgVariant ="primary",textvariant = "default",IconLeft,
    IconRight,
    className,
}) =>{
   <TouchableOpacity  onPress={onPress}  className={`w-full rounded-full p-3 flex flex-row justify-center items-center shawdow-md shadow-neutral-400/70 ${getBgvariantStyle(bgVariant)} ${className}`} {...props}>
    {IconLeft && <IconLeft/>}
    <Text className ={`text=lg font-bold ${getTextvariantStyle(textValue)}`}>{title}</Text>
    {IconRight && <IconRight/>}
   </TouchableOpacity>
}

export default CustomButtton