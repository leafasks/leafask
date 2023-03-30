import React from 'react'

export default function Identify({onUpload}: {onUpload: (file: File | null) => void}) {
    return (
        <div className={'w-full h-max flex flex-col'}>
            <div className={'w-full relative bg-green-700 overflow-hidden h-72 rounded-lg bg-scanner px-3 py-2 flex justify-between items-between text-white'}>
                <div className={'flex flex-col h-full justify-center'}>

                </div>
                <div className={'flex flex-col h-full justify-center items-end'}>
                    <h1 className={'text-4xl font-bold'}>
                        病害识别
                    </h1>
                    <p className={'text-lg my-1'}>
                        上传一张植物照片,对病害进行识别
                    </p>
                    <button
                        onClick={() => {
                            // 创建一个 input 元素
                            const input = document.createElement('input')
                            // 设置 input 元素的 type 属性为 file
                            input.type = 'file'
                            // 设置 input 元素的 accept 属性为 image/*
                            input.accept = 'image/*'
                            if (input) {
                                input.click()
                            }
                            input?.addEventListener('change', (e) => {
                                const target = e.target as HTMLInputElement
                                onUpload(target.files ? target.files[0] : null)
                            })
                        }}
                        className="btn btn-accent w-36 h-10 bg-white rounded-lg text-black btn-sm">
                        ▲ 上传图片
                    </button>
                </div>
            </div>
        </div>
    )
}
