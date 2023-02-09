"use client"
import {MdOutlineCall} from 'react-icons/md'
import { dataPerumahan } from '@/lib/dbperumahan'
import Image from 'next/image'
import Link from 'next/link'
import PropertyCard from './propertyCard'
import { formatter } from '@/lib/fungsi'
import { useState } from 'react'

export default function Home() {
  const listPerumahan = dataPerumahan?.filter(data=>data.onprogress).slice(0,6)

  const [cicilanBulanan, setCicilanBulanan] = useState(null)
  const [hargaRumah, setHargaRumah] = useState(null)
  const [dpRumah, setDpRumah] = useState(null)
  const [plafondKpr, setPlafondKpr] = useState(null)
  const [bungaTahunan, setBungaTahunan] = useState(null)
  const [jangkaWaktu, setJangkaWaktu] = useState(null)
  
  const handleChangeHargaRumah = e => {
    setHargaRumah(e.target.value)
    setPlafondKpr(hargaRumah && dpRumah !== null ?  hargaRumah - dpRumah : null)
  }
  
  const handleChangeDpRumah = e => {
    setDpRumah(e.target.value)
    setPlafondKpr(hargaRumah - e.target.value)
  }
  
  const handleChangePlafondKpr = e => {
    setPlafondKpr(e.target.value)
  }
  
  const handleChangeBungaTahunan = e => {
    setBungaTahunan(e.target.value)
  }
  
  const handleChangeJangkaWaktu = e => {
    setJangkaWaktu(e.target.value)
  }

  const handleSubmit = e => {
    setCicilanBulanan(((plafondKpr * bungaTahunan * jangkaWaktu)/100) / (jangkaWaktu * 12))
    e.preventDefault()
  }


  return (
    <>
    {/* hero */}
    <div className='w-full h-full md:max-w-7xl mx-auto relative text-center my-10'>
      <div className='relative w-full h-[40rem]'>
        <Image src={'/images/bg.png'} alt='img' fill className='object-bottom object-cover' />
      </div>
      <div className='flex flex-col justify-between absolute top-52 right-1/2 transform translate-x-1/2 md:bg-black md:bg-opacity-50 px-5 py-10 rounded-3xl md:text-white text-orange-900'>
        <h2 className='text-3xl font-bold mb-5'>Find your house</h2>
        <p>Temukan <span className='font-semibold italic'>tempatmu untuk pulang</span> bersama kami</p>
        <button className='flex items-center mx-auto border-2 border-white bg-white bg-opacity-60 text-black rounded-md px-2 py-1 mt-10 hover:bg-opacity-80 duration-300 text-semibold'><MdOutlineCall /><p>Hubungi kami</p></button>
      </div>
    </div>

    {/* property on progress */}
    <div className="w-full px-5 my-10 md:max-w-7xl md:mx-auto">
        <h2 className="font-bold text-2xl">Property On Progress</h2>
        <div className='md:grid md:grid-cols-3 md:gap-8 w-full'>
          <PropertyCard listPerumahan={listPerumahan} />
        </div>
        <Link href={'/property'}>
          <button className='shadow-sm px-3 py-1 bg-sky-500 rounded-md text-white font-semibold'>Lihat Semua Property</button>
        </Link>
    </div>

    <div className='w-full px-5 md:max-w-7xl md:mx-auto mb-5'>
      <div className='w-full bg-blue-300 rounded-lg p-3 md:flex border border-black md:items-center md:text-center'>
        <form className='space-y-3 w-full md:w-fit md:pr-16' onSubmit={(e)=>handleSubmit(e)}>
          <div className='space-y-2'>
            <p className='text-sm'>Harga Rumah</p>
            <input id='hargaRumah' type={'text'} name='hargaRumah' className='w-full md:w-96 border px-3 rounded-md placeholder:italic placeholder:text-sm' placeholder='masukan harga rumah' onChange={(e)=>handleChangeHargaRumah(e)}  /> 
          </div>
          <div className='space-y-2'>
            <p className='text-sm'>DP Rumah</p>
            <input id='dprumah' type={'text'} name='dprumah' className='w-full md:w-96 border px-3 rounded-md placeholder:italic placeholder:text-sm' placeholder='masukan dp rumah' onChange={(e)=>handleChangeDpRumah(e)}  /> 
          </div>
          <div className='space-y-2'>
            <p className='text-sm'>Pinjaman ke Bank / Plafond KPR (rupiah)</p>
            <input id='plafondkpr' type={'text'} name='plafondkpr' className='w-full md:w-96 border px-3 rounded-md placeholder:italic placeholder:text-sm' placeholder='masukan nilai plafond' value={plafondKpr} onChange={(e)=>handleChangePlafondKpr(e)}  />
          </div>
          <div className='space-y-2'>
            <p className='text-sm'>Bunga Per Tahun (%)</p>
            <input id='bungatahunan' type={'text'} name='bungatahunan' className='w-full md:w-96 border px-3 rounded-md placeholder:italic placeholder:text-sm' placeholder='masukan bunga tahunan' onChange={(e)=>handleChangeBungaTahunan(e)} />
          </div>
          <div className='space-y-2'>
            <p className='text-sm'>Jangka Waktu (tahun)</p>
            <input id='jangkawaktu' type={'text'} name='jangkawaktu' className='w-full md:w-96 border px-3 rounded-md placeholder:italic placeholder:text-sm' placeholder='masukan jangka waktu' onChange={(e)=>handleChangeJangkaWaktu(e)}/>
          </div>
          <div className='space-y-2'>
          <button className='shadow-sm px-3 py-1 bg-sky-500 rounded-md text-white font-semibold'>Hitung</button>
          </div>
        </form>
        <div className='flex-1 space-y-1 text-center w-full'>
          <h3 className='text-lg text-semibold'>Cicilan Bulanan</h3>
          <p className='text-3xl font-bold'>{formatter.format(cicilanBulanan?cicilanBulanan : 0)} </p>
          <p className='text-xs w-full md:w-60 md:mx-auto'>Hasil simulasi ini bersifat estimasi berdasarkan perhitungan internal kami, hasil akan berbeda ketika pengambilan KPR tergantung internal Bank yang akan memberi pinjaman</p>
        </div>
      </div>
    </div>
    </>
  )
}
