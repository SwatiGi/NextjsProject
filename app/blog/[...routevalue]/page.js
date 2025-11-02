export default async function Resourse({params}) {
    let { routevalue } = await params
    let NestedRoute = JSON.stringify(routevalue)
    return <>
        <h1>{`This is ${NestedRoute} page...`}</h1>
        
    
    </>
}