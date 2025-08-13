import { Product } from '@gstore/core'
import {
    IconChevronDown,
    IconMoodConfuzed,
    IconMoodHappy,
    IconMoodSad,
} from '@tabler/icons-react'

export interface PriceMeasurerProps {
    product: Product
}

export default function PriceMeasurer(props: PriceMeasurerProps) {
    const {
        lowestPrice: minimum,
        highestPrice: maximum,
        promotionalPrice: current,
        averagePrice: average,
    } = props.product

    let percentual
    if (current > average) {
        percentual = ((current - average) / (maximum - average)) * 50 + 50
    } else {
        percentual = (1 - (average - current) / (average - minimum)) * 50
    }

    return (
        <div className="flex flex-col border border-white/10 p-7 rounded-xl gap-4 bg-violet-dark">
            <div className="flex items-center gap-2">
                {percentual >= 40 && percentual < 60 ? (
                    <IconMoodConfuzed
                        size={40}
                        stroke={1.5}
                        className="text-yellow-500"
                    />
                ) : percentual >= 60 ? (
                    <IconMoodSad
                        size={40}
                        stroke={1.5}
                        className="text-red-500"
                    />
                ) : (
                    <IconMoodHappy
                        size={40}
                        stroke={1.5}
                        className="text-green-500"
                    />
                )}
                <div className="flex flex-col">
                    <div className="flex gap-1.5">
                        <span>The product price is </span>
                        <div className="font-bold">
                            {percentual >= 40 && percentual < 60 ? (
                                <span className="text-yellow-500">
                                    on average
                                </span>
                            ) : percentual >= 60 ? (
                                <span className="text-red-500">
                                    above the average
                                </span>
                            ) : (
                                <span className="text-green-500">
                                    under the average
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="text-zinc-400 text-sm">
                        According to the price of {' '}
                        <span className="text-white">30 days before</span>.
                    </div>
                </div>
            </div>

            <div
                className="
                    flex items-center h-2 bg-gradient-to-r 
                    from-green-500 via-yellow-400 to-red-500
                    rounded-full relative border-2 border-black
                "
            >
                <div
                    className="absolute flex justify-center items-center h-4 w-4 bg-white rounded-full"
                    style={{
                        left: `${percentual}%`,
                    }}
                >
                    <IconChevronDown
                        size={20}
                        className="absolute text-white -mt-8"
                    />
                    <div className="h-2.5 w-2.5 bg-black rounded-full"></div>
                </div>
            </div>
        </div>
    )
}
