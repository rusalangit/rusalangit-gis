export default function Page({ params }: { params: any }) {
    const { id } = params
    console.log(id)

    return (
        <div>
            <>{id}</>
        </div>
    )
}

export async function generateStaticParams() {
    const res = await fetch("/api/locations")
    const locations = await res.json()
    console.log(locations)

    return locations.map((location: any) => ({
        id: location.id,
    }))
}
