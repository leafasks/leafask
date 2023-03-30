import { educationData } from "@/data/education"
import Link from "next/link"

export default function EducationList({ onSelect }: { onSelect: (id: number) => void }) {
    return (
        <div className={'w-full h-full flex flex-col'}>
            {
                educationData.map((item, index) => {
                    return (
                        <div
                            onClick={() => onSelect(item.id)}
                            className={'p-3 flex flex-col'}>
                            <h1 className={'text-xl cursor-pointer font-bold mt-2 underline underline-offset-4 decoration-2 decoration-green-800'}>{item.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}
