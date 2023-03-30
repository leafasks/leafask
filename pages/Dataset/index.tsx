import React from "react"
import { datasetData } from "@/data/dataset"

export default function Dataset() {
    return (
        <div className={'w-full h-full grid grid-cols-2'}>
            {
                datasetData.map((item, index) => {
                    return (
                        <div className={'p-3 flex flex-col'}>
                            <img src={item.image} alt={item.name} className={'w-full h-96 rounded-lg object-cover'}/>
                            <div>
                                <h1 className={'text-lg font-bold mt-2'}>{item.name}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
