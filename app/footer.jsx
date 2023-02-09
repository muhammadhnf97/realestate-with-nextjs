import Image from 'next/image'

export default function Footer(){
    return (
    <div className='text-center py-5 bg-white  mt-5'>
        <div className='px-5 md:max-w-7xl md:mx-auto'>
        <h2 className="font-bold text-2xl">Who's us ?</h2>
        <div className='md:flex items-center gap-5 text-sm'>
            <section className='px-2 py-1 rounded-lg mt-1 mb-5 flex-1'>
            <p>Kami merupakan perusahaan pengembang perumahan di Pekanbaru yang bergerak dibidang developer. Kami berusaha memberukan produk perumahan berupa kavling siap bangun. Dimana dengan produk semacam, ini diharapkan kualitas bangunan menjadi sebagaimana yang diinginkan, karena akan menjadi kontrol bersama antara developer dan pembeli pada saat atau proses pembangunan berlangsung.</p>
            </section>
            <div className='md:flex-1'>
                <h2 className="font-semibold">Official Bank Partner :</h2>
                <section className='grid grid-cols-2 w-fit mx-auto gap-5'>
                <div className='relative md:w-28 w-20 h-14 md:h-16'>
                    <Image src={'/images/brks.png'} alt={'brks'} fill className="object-contain items-center w-full" />
                </div>
                <div className='relative md:w-28 w-20 h-14 md:h-16'>
                    <Image src={'/images/bsi.png'} alt={'brks'} fill className="object-contain items-center w-full" />
                </div>
                <div className='relative md:w-28 w-20 h-14 md:h-16'>
                    <Image src={'/images/btns.png'} alt={'brks'} fill className="object-contain items-center w-full" />
                </div>
                <div className='relative md:w-28 w-20 h-14 md:h-16'>
                    <Image src={'/images/cimbns.png'} alt={'brks'} fill className="object-contain items-center w-full" />
                </div>
                </section>
            </div>
            </div>
        </div>
        <p>Copyright by <span className='italic'>Muhammad Hanif</span></p>
    </div>
    )
}