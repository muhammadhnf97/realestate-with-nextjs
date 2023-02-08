import Image from "next/image"

export default function About (){
    return (
    <div className="max-w-7xl mt-20 mx-auto">
        <div className="flex gap-5 items-center">
            <Image src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" alt="img" width={400} height={400} className="object-cover" />
            <div className="space-y-3">
                <h2 className="font-semibold text-lg">DIDIRIKAN PADA TAHUN 1981.</h2>
                <p>Kini Niph Dev telah menjadi salah satu pengembang Indonesia yang paling terpercaya dan terdiversifikasi dari segi produk, lokasi dan segmen pasar. Niph Dev merintis pembangunan skala besar di Indonesia. Hingga saat ini, Niph Dev telah memiliki sekitar 99 proyek di 35 kota di dalam negeri maupun di luar negeri. </p>

                <h2 className="font-semibold text-lg">THE VISION</h2>
                <p>“Indonesia setelah kemerdekaannya seperti sebuah fajar yang mulai merekah bagi Indonesia Baru yang adil dan makmur. Alam raya Anugerah Tuhan bagi Indonesia serta Sumber Daya Manusia yg melimpah telah membuka peluang-peluang bisnis yang luar biasa. Niph Group ingin berperan serta membangun negeri dengan membangun sebuah grup usaha bisnis dalam bidang property dan atau yang terkait dengan property yang akan memberi manfaat bagi kemakmuran dan kesejateraan masyarakat.”</p>
                
                
                <h2 className="font-semibold text-lg">THE MISSION</h2>
                <p>Kami akan menjadi yang terdepan dalam bisnis property dan yang berkaitan dengan property dengan menjadi yang paling unggul, professional dan menguntungkan sehingga menjadi pilihan pertama para konsumen,menjadi investasi yang paling menguntungkan bagi pemegang saham,menjadi tempat kerja yang paling menarik dan menantang bagi karyawan serta menjadi berkat yang nyata bagi masyarakat dan tanah air.</p>
            </div>
        </div>
    </div>
    )
}