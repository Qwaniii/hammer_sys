import { Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClients, updateClient } from 'store/slices/workSlice';
import Loading from './shared-components/Loading';
import { Link } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'configs/AppConfig';


function Clients () {

  const dispatch = useDispatch()

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, client) => <Link onClick={() => dispatch(updateClient(client))} to={`${APP_PREFIX_PATH}/dashboards/clients/line/edit-user/${text}`}>{text}</Link>,
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

    useEffect(() => {
        dispatch(getClients())
    }, [])

    const users = useSelector((state) => state.work.users)
    const loading = useSelector((state) => state.work.loading)


    if(loading) {
    return (
        <Loading cover="content"/>
      )
    } else {
      return (
        <Table columns={columns} dataSource={users} />
      )
    }
}
export default Clients;