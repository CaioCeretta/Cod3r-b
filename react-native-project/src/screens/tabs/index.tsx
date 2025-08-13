import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

export default function Tabs() {
    const Tabs = createBottomTabNavigator()
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="Tab1"
                component={Tab1}
                options={{
                    title: 'First',
                    tabBarIcon: ({ focused }: any) => (
                        <Ionicons
                            name="home-outline"
                            size={20}
                            color={focused ? '#1C80FF' : '#000'}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Tab2"
                component={Tab2}
                options={{
                    title: 'Second',
                    tabBarIcon: ({ focused }: any) => (
                        <Ionicons
                            name="cart-outline"
                            size={20}
                            color={focused ? '#1C80FF' : '#000'}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Tab3"
                component={Tab3}
                options={{
                    title: 'Third',
                    tabBarIcon: ({ focused }: any) => (
                        <Ionicons
                            name="settings-outline"
                            size={20}
                            color={focused ? '#1C80FF' : '#000'}
                        />
                    ),
                }}
            />
        </Tabs.Navigator>
    )
}
