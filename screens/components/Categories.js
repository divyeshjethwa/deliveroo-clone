import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
    return (
        <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }} showsHorizontalScrollIndicator={false}>
            {/* CategoryCard */}

            <CategoryCard imgUrl='https://links.papareact.com/gn7' title="title 1" />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title="title 2" />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title="title 3" />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title="title 1" />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title="title 2" />
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title="title 3" />
        </ScrollView>
    );
}


export default Categories;
