import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { themeColor } from '../../theme'
import RestaurantsCard from '../RestaurantsCard/restaurantsCard'

export default function FeatureRow({ title, description, restaurants }) {
    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-gray-500 text-xs">
                        {description}
                    </Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: themeColor.text }} className="font-semibold">See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                className="overflow-visible py-5"
            >
                {
                    restaurants.map((restaurant, index)=>{
                        return (
                            <RestaurantsCard
                                item={restaurant}
                                key={index}
                            />
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}
