import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from "react-native-feather";
import { themeColor } from '../theme'
import Categories from '../components/Categories/categories';
import { featured } from '../constants';
import FeatureRow from '../components/featureRow/featureRow';

export default function HomeScreen() {
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="dark-content" />
            <View className="flex-row items-center space-x-2 px-4 pb-2 ">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder='Resturants' className="ml-2 flex-1" keyboardType='default' />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.MapPin height="20" width="20" stroke="gray" />
                        <Text className="text-gray-600">Aluthgama, Kalutara</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: themeColor.bgColor(1) }} className="p-3 rounded-full">
                    <Icon.Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50
                }}>
                <Categories/>
                <View className="mt-5">
                    {
                        [featured, featured, featured].map((item, index)=> {
                            return (
                                <FeatureRow
                                    key={index}
                                    title={item.title}
                                    restaurants={item.restaurants}
                                    description={item.description}
                                />
                            )
                        })
                    }

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
