import { Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClients } from 'store/slices/workSlice';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, email) => <a onClick={() => console.log({text, email})}>{text}</a>,
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'website',
    dataIndex: 'website',
    key: 'website',
  },
];

function Clients () {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getClients())
    }, [])

    const users = useSelector((state) => state.work.users)

    return (
        <Table columns={columns} dataSource={users} />
    )
}
export default Clients;