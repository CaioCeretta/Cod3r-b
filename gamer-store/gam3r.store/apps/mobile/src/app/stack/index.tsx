import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import CartProvider from '@/src/data/contexts/CartContext'
import { PaymentProvider } from '@/src/data/contexts/PaymentContext'
import { ProductsProvider } from '@/src/data/contexts/ProductsContext'
import Payment from './Payment'
import ProductDetails from './ProductDetails'
import Tabs from '../tabs'
import LastPurchases from './LastPurchases'
import React from 'react'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <ProductsProvider>
            <CartProvider>
                <PaymentProvider>
                    <NavigationContainer theme={DarkTheme}>
                        <Stack.Navigator initialRouteName="Tabs">
                            <Stack.Screen
                                name="Tabs"
                                component={Tabs}
                                options={{
                                    headerShown: false,
                                }}
                            />
                            <Stack.Screen
                                name="ProdutoDetalhes"
                                component={ProductDetails}
                                options={{
                                    title: 'Detalhes do Produto',
                                    headerBackTitle: 'Voltar',
                                    headerShown: true,
                                    headerStyle: { backgroundColor: '#0D001E' },
                                    headerTintColor: '#FFF',
                                }}
                            />
                            <Stack.Screen
                                name="Pagamento"
                                component={Payment}
                                options={{
                                    title: 'Detalhes do Pagamento',
                                    headerBackTitle: 'Voltar',
                                    headerShown: true,
                                    headerStyle: { backgroundColor: '#0D001E' },
                                    headerTintColor: '#FFF',
                                }}
                            />
                            <Stack.Screen
                                name="UltimasCompras"
                                component={LastPurchases}
                                options={{
                                    title: 'Últimas Compras',
                                    headerBackTitle: 'Voltar',
                                    headerShown: true,
                                    headerStyle: { backgroundColor: '#0D001E' },
                                    headerTintColor: '#FFF',
                                }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </PaymentProvider>
            </CartProvider>
        </ProductsProvider>
    )
}
