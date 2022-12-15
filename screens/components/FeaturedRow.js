import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, desc }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{desc}</Text>

            <ScrollView horizontal contentContainerStyle={{
                paddingHorizontal: 15
            }} showsHorizontalScrollIndicator={false}>

                {/* Restaurant Cards */}
                <RestaurantCard id="123" imgUrl="https://links.papareact.com/gn7" title="Yo! Sushi" rating={4.5} genre="Japanese" address="123 Main st" short_description="This is text desc" dishes={[]} long={20} lat={0} />
                <RestaurantCard id="123" imgUrl="https://links.papareact.com/gn7" title="Yo! Sushi" rating={4.5} genre="Japanese" address="123 Main st" short_description="This is text desc" dishes={[]} long={20} lat={0} />
                <RestaurantCard id="123" imgUrl="https://links.papareact.com/gn7" title="Yo! Sushi" rating={4.5} genre="Japanese" address="123 Main st" short_description="This is text desc" dishes={[]} long={20} lat={0} />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default FeaturedRow;
