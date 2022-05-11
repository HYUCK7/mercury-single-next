import tableStyle from '@/styles/Table.module.css'

export function Read ({columns, colspan, data}) {
    return(
        <table className= {tableStyle.table}>
            <thead>
                <tr className={tableStyle.tr}>
                    {columns.map((column)=>(
                        <th key={columns._id} className = {tableStyle.tr}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.length == 0? <tr className={tableStyle.tr}><td colSpan={colspan} className={tableStyle.td}>NODATA</td>
                </tr> : data.map((trip) => (
                    <tr className = {tableStyle.tr} key = {trip._id}>
                    <td className={tableStyle.td}>{trip.place}</td>
                    <td className={tableStyle.td}>{trip.date}</td>
                    <td className={tableStyle.td}>{trip.inOut}</td>
                    <td className={tableStyle.td}>{trip.subject}</td>
                  </tr>
                ))}
            </tbody>
        </table>
    )
}