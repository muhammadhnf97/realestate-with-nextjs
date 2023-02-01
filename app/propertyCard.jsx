import Link from "next/link"
import Image from "next/image"
import {BiBed} from 'react-icons/bi'
import {FaShower} from 'react-icons/fa'
import {BsHouseDoor} from 'react-icons/bs'
import {MdTerrain} from 'react-icons/md'
import {BiMap} from 'react-icons/bi'

export default function PropertyCard({listPerumahan}){
    return (
        listPerumahan?.map(data=>{
            return (
              <Link key={data?.id} href={{ pathname : `/property/${data?.id}`}}>
                <section className="w-full my-2 flex flex-col bg-white hover:bg-slate-50 relative rounded-md overflow-hidden shadow-sm">
                    <div className="relative w-full h-48">
                        <Image src={data?.thumbnail} alt={'thumbnail'} fill className="object-cover"/>
                    </div>
                    {!data?.onprogress ? <div className="absolute w-full text-center top-30 font-semibold text-red-700 text-7xl h-full bg-black bg-opacity-50"><p>SOLD</p> <p>OUT</p></div> : <div className="absolute w-full text-center top-30 font-semibold text-red-700 text-7xl h-full bg-black bg-opacity-0 hover:bg-opacity-10 hover:duration-200"></div>}
                    <div className='mx-2 absolute top-40 font-semibold text-white bg-black bg-opacity-40 flex items-center'><BiMap className='text-red-700 mr-1' />{data.alamat}</div>
                    <div className="mx-2 flex-1 my-2">
                        <p className="font-semibold text-lg leading-4">{data?.nama}</p>
                        <p className="">{data?.kota}</p>
                        <div className='grid grid-cols-2 items-center text-sm'>
                          <div className='flex items-center gap-2 w-full'><BiBed />Kamar Tidur : {data?.desc.kt}</div>
                          <div className='flex items-center gap-2 w-full'><FaShower />Kamar Mandi : {data?.desc.km}</div>
                          <p className='flex items-center gap-2 w-full'><BsHouseDoor/>Luas Bangunan : {data?.desc.lb}</p>
                          <p className='flex items-center gap-2 w-full'><MdTerrain/>Luas Tanah : {data?.desc.lt}</p>
                        </div>
                    </div>
                </section>
              </Link>
            )
        })
    )
} 