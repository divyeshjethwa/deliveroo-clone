import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"
import Categories from './components/Categories';
import FeaturedRow from './components/FeaturedRow';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView className="bg-white pt-5">


            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image source={{ uri: "https://links.papareact.com/wru", }} className="h-7 w-7 bg-gray-300 rounded-full" />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
                    <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>



            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="gray" size={20} />
                    <TextInput placeholder="Restaurents and cuisines" keyboardType="default" />
                </View>

                <AdjustmentsVerticalIcon color="#00CCBB" />

            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100"
                contentContainerStyle={{}}
            >
                {/* Categories */}
                <Categories />
                {/* Featured Rows */}
                <FeaturedRow id='123' title="Featured Row 1" desc="Paid placements from our partners" />
                {/* Tasty Discounts */}
                <FeaturedRow id='1234' title="Featured Row 2" desc="Everyone's been enjoying these juicy discountss" />
                {/*  Offers near rryou */}
                <FeaturedRow id='1235' title="Featured Row 3" desc="Why not support your local restaurant tonight" />
            </ScrollView>

        </SafeAreaView>
    )

}

export default HomeScreen;