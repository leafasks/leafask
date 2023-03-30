import React, {useEffect,useState} from "react"
import { router } from "next/client"
import { educationData } from "@/data/education"
import { educationType } from "@/types";

export default function Education({ id }:{ id: string }) {
    const [article, setArticle] = useState<educationType>()
    useEffect(() => {
        // 在 educationData 中找到 id 为当前 id 的数据
        const data = educationData.find(item => item.id === Number(id))
        setArticle(data)
    }, [id])
    return (
        <div className={'h-full w-full'}>
            <h1 className={'text-4xl font-bold'}>{article?.name}</h1>
            <div className={'w-full h-96 bg-gray-200 mt-2 rounded-lg'}>
                <img src={article?.image} alt={article?.name} className={'w-full h-full rounded-lg my-2 object-cover'}/>
            </div>
            <div className={'w-full h-full mt-2'}>
                <p className={'text-lg font-bold'}>详情</p>
                <p className={'text-lg'}>{article?.description}</p>
            </div>
        </div>
    )
}
