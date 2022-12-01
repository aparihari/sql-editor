import { useResultState } from '../../lib/context/ResultContext'
import styles from '../../styles/Result.module.css'

export const Result = () => {
  const state = useResultState()!

  if (!state.data) return <></>

  return (
    <div className='w-full'>
      <section className='py-1 bg-blueGray-50'>
        <div className='w-full px-4 mx-auto'>
          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg'>
            <div className='rounded-t mb-0 px-4 py-3 border-0'>
              <div className='flex flex-wrap items-center'>
                <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
                  <h3 className='font-semibold text-base text-blueGray-700'>
                    {state.title}
                  </h3>
                </div>
                <div className='relative w-full px-4 max-w-full flex-grow flex-1 text-right'></div>
              </div>
            </div>

            <div className='block w-full overflow-x-auto max-h-[58vh] overflow-y-scroll'>
              <table className='items-center bg-transparent w-full border-collapse'>
                <thead>
                  <tr>
                    {state.fields.map((field: string, i: number) => (
                      <th
                        key={i}
                        className='px-3 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'
                      >
                        {field}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {state.data.map((item: any) => (
                    <>
                      {state.title === 'Customer' && (
                        <tr key={item.id}>
                          <td className={styles.row}>{item.id}</td>
                          <td className={styles.row}>{item.first_name}</td>
                          <td className={styles.row}>{item.last_name}</td>
                          <td className={styles.row}>{item.email}</td>
                          <td className={styles.row}>{item.gender}</td>
                          <td className={styles.row}>{item.country}</td>
                        </tr>
                      )}
                      {state.title === 'Order' && (
                        <tr key={item.id}>
                          <td className={styles.row}>{item.id}</td>
                          <td className={styles.row}>{item.first_name}</td>
                          <td className={styles.row}>{item.last_name}</td>
                          <td className={styles.row}>{item.email}</td>
                          <td className={styles.row}>{item.product}</td>
                          <td className={styles.row}>{item.price}</td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
