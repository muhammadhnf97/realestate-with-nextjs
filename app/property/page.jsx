import PropertyCard from "../propertyCard"
import { dataPerumahan } from "@/lib/dbperumahan"

export default function Property () {
    const propertyOnProgress = dataPerumahan.filter(data=>data.onprogress)
    const propertySoldOut = dataPerumahan.filter(data=>!data.onprogress)
    return (
        <div className="w-full px-5 md:max-w-7xl md:mx-auto mt-20 mb-10">
            <h2 className="font-bold text-2xl">Daftar Property</h2>
            <h3 className="font-bold text-lg border-b-2 border-red-700 mt-5 text-right pb-1">Property On Progress</h3>
            <div className="md:grid md:grid-cols-3 md:gap-8 my-5">
                <PropertyCard listPerumahan={propertyOnProgress} />
            </div>
            <h3 className="font-bold text-lg border-b-2 border-red-700 mt-5 text-right pb-1">Property Sold Out</h3>
            <div className="md:grid md:grid-cols-3 md:gap-8 mt-5">
                <PropertyCard listPerumahan={propertySoldOut} />
            </div>
        </div>
    )
}