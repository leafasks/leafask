import Head from 'next/head'
import Identify from "@/pages/Identify";
import EducationList from "@/pages/EducationList";
import Education from "@/pages/Education";
import Dataset from "@/pages/Dataset";
import {useState} from 'react'

export default function Home() {
    const [activeID, setActiveID] = useState<number>(0)
    const [file, setFile] = useState<File | null>(null)
    const [articleId, setArticleId] = useState<number>(0)
    const navItemsStyle = `hover:text-green-800 transition-all ease-in-out duration-800 cursor-pointer `
    const clickNavItems = (id: number): void => {
        setActiveID(id)
    }
    const RouterSwitch = (): JSX.Element => {
        switch (activeID) {
            case 0:
                return (
                    <div className={'w-full px-3'}>
                        <Identify
                            onUpload={(file: File | null) => {
                                console.log(file)
                                setFile(file)
                            }}
                        />
                        <div className={'w-full flex items-end justify-end'}>
                            {file?.name}
                        </div>
                        <div className={'w-full h-full flex flex-col items-center justify-center mt-12'}>
                            <img src='/empty.svg' className={'h-48 mt-2'} alt={'empty'}/>
                            <p>
                                暂无数据，请先上传图片
                            </p>
                        </div>
                    </div>
                )
            case 1:
                return <Dataset/>
            case 2:
                return <EducationList onSelect={
                    (id: number) => {
                        console.log(id)
                        setArticleId(id)
                        setActiveID(3)
                    }
                } />
            case 3:
                return <Education id={String(articleId)}/>
            default:
                return <div>Identify</div>
        }
    }
    return (
        <>
            <Head>
                <title>LeafAsk</title>
                <meta name="description" content="叶问跨植物病害识别系统"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={'w-full min-h-screen h-full bg-white'}>
                <img src={'/leaf.svg'} className={'z-0 w-1/2 mx-auto mt-20 fixed -top-96 -left-20 opacity-50'}
                     alt={'leaf'}/>

                <div className={'z-20 relative w-full h-full min-h-screen px-20 py-5'}>
                    <div className={'col-span-12 flex h-8 row-span-1'}>
                        <div className={'h-max w-full flex items-center justify-between py-3'}>
                            <div className={'h-max fixed flex justify-center items-center'}>
                                <img src={'/logo.svg'} className={'w-6 mr-3'} alt={'logo'}/>
                                <div>
                                    <h1 className={'text-2xl font-bold text-lg text-black'}>叶问跨植物病害识别系统</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={'fixed bottom-3 h-full row-span-4 flex items-start justify-end flex-col gap-3 text-lg text-black font-sans'}>
                        <div
                            onClick={() => clickNavItems(0)}
                            className={`${navItemsStyle} ${activeID === 0 ? 'text-green-800 underline decoration-2 underline-offset-4 decoration-green-700' : 'text-black'}`}>
                            Identify 识别
                        </div>
                        <div
                            onClick={() => clickNavItems(1)}
                            className={`${navItemsStyle} ${activeID === 1 ? 'text-green-800 underline decoration-2 underline-offset-4 decoration-green-700' : 'text-black'}`}>
                            Data 数据
                        </div>
                        <div
                            onClick={() => clickNavItems(2)}
                            className={`${navItemsStyle} ${activeID === 2 ? 'text-green-800 underline decoration-2 underline-offset-4 decoration-green-700' : 'text-black'}`}>
                            Education 科普
                        </div>
                    </div>
                    <div className={'col-span-12 row-span-4 h-max ml-96 overflow-auto'}>
                        <RouterSwitch/>
                    </div>
                </div>
            </main>
        </>
    )
}
