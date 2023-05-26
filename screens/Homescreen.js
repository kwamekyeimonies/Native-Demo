import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import myImg from "../assets/profile.jpg"

const Homescreen = () =>
{
    const navigation = useNavigation();

    useLayoutEffect(() =>
    {
        // Modify default settings
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView>
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={myImg}
                    // source={{
                    //     uri: 'https://links.papareact.com/wru'
                    // }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View>
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Homescreen