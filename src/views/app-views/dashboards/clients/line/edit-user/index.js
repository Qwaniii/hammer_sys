import { Button, Col, DatePicker, Form, Input, Row } from 'antd';
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendLoading } from 'store/slices/workSlice';


export const EditUser = () => {
  const updClient = useSelector((state) => state.work.client)
  const loading = useSelector((state) => state.work.loading)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const saveData = () => {
	dispatch(sendLoading(true))
	setTimeout(() => {
		dispatch(sendLoading(false))
	}, 2000)
	navigate(-1)
  }

  if(loading) {
    return (
        <Loading cover="content"/>
      )
    } else {
  return (
    <>  
      <div className="mt-4">
					<Form
						name="basicInformation"
						layout="vertical"
						initialValues={updClient}
						onFinish={saveData}
					>
						<Row>
							<Col xs={24} sm={24} md={24} lg={16}>
								<Row >
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Name"
											name="name"
											rules={[
												{
													required: true,
													message: 'Please input your name!',
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Username"
											name="username"
											rules={[
												{
													required: true,
													message: 'Please input your username!'
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="E-mail"
											name="email"
											rules={[{ 
												required: true,
												type: 'email',
												message: 'Please enter a valid email!' 
											}]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Phone"
											name="phone"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Web"
											name="website"
										>
											<Input />
										</Form.Item>
									</Col>	
								</Row>
								<Button type="primary" htmlType="submit">
									Save Change
								</Button>
							</Col>
						</Row>
					</Form>
				</div>
    </>
  )
}
}


export default EditUser;
