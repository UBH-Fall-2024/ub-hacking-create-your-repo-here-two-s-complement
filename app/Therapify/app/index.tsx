import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import beach_image from "../assets/meditation-images/beach.webp";
import CustomButton from '@/components/customButton';
import { useRouter } from 'expo-router';
import TaskCards from '@/components/TaskCards';

const App = () => {
    const router = useRouter();
  return (
    <View className="flex-1">
        <ImageBackground source={beach_image} resizeMode='cover' className='flex-1'>
            <LinearGradient 
                className="flex-1" 
                colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
            >
                <SafeAreaView className="flex-1 mx-5 my-8 justify-between">
                    <View>
                        <Text className="text-center text-white font-bold text-4xl">
                            Therapify
                        </Text>
                        {/* <Text className="text-center text-white text-1xl">
                            Your mental wellness companion, anytime, anywhere.
                        </Text> */}
                    </View>
                    <View>
                        <View >
                            <Text className='text-center text-white font-bold text-2xl'>Tasks</Text>
                        </View>
                        <TaskCards/>
                    </View>
                    <View>
                        <CustomButton onPress={() => router.push("/test")} title={'Get Started'} />
                    </View>
                    <StatusBar style="light"/>
                </SafeAreaView>
            </LinearGradient>
        </ImageBackground>
    </View>
  )
}

export default App