import { KeyboardAvoidingView, TouchableWithoutFeedback,View,Text } from "react-native";
const InputField =({
    label, labelStyle
})
const InputField = ({label, labelStyle}) =>(
 <KeyboardAvoidingView>
    <TouchableWithoutFeedback>
        <View>
            <Text className={`1text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
                {label}
            </Text>
        </View>
    </TouchableWithoutFeedback>
 </KeyboardAvoidingView>
);

export default InputField;