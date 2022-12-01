import { useResultDispatch } from '../../lib/context/ResultContext'
import orders from '../../lib/data/orders.json'
import customers from '../../lib/data/customers.json'
import { DropdownIcon } from './DropdownIcon'

export const Dropdown = () => {
  const setResult = useResultDispatch()!

  return (
    <div className='flex items-center space-x-2 sm:space-x-3'>
      <div className='dropdown inline-block relative'>
        <button className='bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center'>
          <span className='mr-1'>Query</span>
          <DropdownIcon />
        </button>
        <ul className='dropdown-menu absolute hidden text-gray-700 pt-1 z-10'>
          <li className='' onClick={() => setResult(customers)}>
            <a className='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer'>
              select * from customer;
            </a>
          </li>
          <li className='' onClick={() => setResult(orders)}>
            <a className='bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer'>
              select * from orders;
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
