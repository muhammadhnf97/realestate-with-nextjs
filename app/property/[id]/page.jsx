import { dataPerumahan } from "@/lib/dbperumahan"
import {BiBed} from 'react-icons/bi'
import {FaShower} from 'react-icons/fa'
import {BsHouseDoor} from 'react-icons/bs'
import {MdTerrain} from 'react-icons/md'
import {BiMap} from 'react-icons/bi'
import {BsHouseFill} from 'react-icons/bs'
import Image from "next/image"
import PropertyCard from "@/app/propertyCard"
import { nanoid } from "nanoid"

export default function Details({params : {id}}){
    const formatter = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR',})
    return (
        <>
        {dataPerumahan.filter(data=>data.id == id).map(datarumah=>{
            return (
            <div key={datarumah.id} className="w-full px-5 md:max-w-7xl md:mx-auto mt-[4rem]">
                <div className="w-full md:h-[30rem] md:flex md:gap-3 md:mb-5">
                    <div className="relative w-full h-52 md:h-full flex-1">
                        <Image src={datarumah.thumbnail} alt='thumbnails' fill className="object-cover" />
                    </div>
                    <div className="md:w-[30rem] md:h-full md:flex md:flex-col">
                        <h3 className="font-semibold border-b-2 border-red-600 mb-1 text-md w-fit md:text-lg">Gallery</h3>
                        <div className="grid grid-cols-3 md:grid-cols-2 w-full max-h-24 md:max-h-full md:max-w-[30rem] gap-1 overflow-y-scroll bg-white p-1">
                            {datarumah.images.map(data=>{
                                return (
                                    <div key={nanoid()} className="relative w-full h-24 md:h-32">
                                        <Image src={data} alt='images' fill className="object-cover" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit bg-white rounded-sm shadow-sm px-3 py-3 my-5">
                    <p className="font-semibold text-2xl">{datarumah?.nama}</p>
                    <p>{datarumah?.kota}</p>
                    <div className="flex items-center"><span><BiMap className="text-red-700" /></span><p>{datarumah?.alamat}</p></div>
                    <div className="mt-2 grid grid-cols-2 border px-3 py-1 rounded-md my-2">
                        <p>DP</p>
                        <p>{formatter.format(datarumah.dp)}</p>
                        <p>Harga Rumah</p>
                        <p>{formatter.format(datarumah.harga)}</p>
                        <p className='flex items-center gap-2 w-full'><BiBed className="text-red-700" />Kamar Tidur</p>
                        <p>{datarumah?.desc.kt}</p>
                        <p className='flex items-center gap-2 w-full'><FaShower className="text-red-700" />Kamar Mandi</p>
                        <p>{datarumah?.desc.km}</p>
                        <p className='flex items-center gap-2 w-full'><BsHouseDoor className="text-red-700"/>Luas Bangunan</p>
                        <p>{datarumah?.desc.lb}m <sup>2</sup></p>
                        <p className='flex items-center gap-2 w-full'><MdTerrain className="text-red-700"/>Luas Tanah</p>
                        <p>{datarumah?.desc.lt}m <sup>2</sup></p>
                        <p className='flex items-center gap-2 w-full'><BsHouseFill className="text-red-700"/>Total Unit</p>
                        <p>{datarumah?.tot_unit} Unit</p>
                    </div>
                    <iframe src={datarumah?.maps} width="600" height="450" loading="lazy" className="w-full max-h-72 rounded-md"></iframe>
                    {datarumah?.onprogress && <button className="px-2 py-2 bg-blue-500 rounded-sm my-2 text-white hover:bg-blue-700 text-sm duration-200">Jadwalkan untuk Survey !</button>}
                </div>
                <div className="w-full h-fit my-10">
                <h2 className="font-bold text-lg">Property Lainnya</h2>
                <div className="grid grid-cols-3 gap-3">
                    <PropertyCard listPerumahan={dataPerumahan.filter(data=>data.onprogress)} />
                </div>

                </div>
            </div>
            )
        })
        }
        </>
    )
}