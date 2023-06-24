import { Button, Col, DatePicker, Form, Input, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';


export const EditUser = () => {
  const updClient = useSelector((state) => state.work.client)

  return (
    <>  
      <div className="mt-4">
					<Form
						name="basicInformation"
						layout="vertical"

					>
						<Row>
							<Col xs={24} sm={24} md={24} lg={16}>
								<Row >
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label={updClient.name}
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
											label={updClient.name}
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
											label={updClient.email}
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
											label={updClient.name}
											name="dateOfBirth"
										>
											<DatePicker className="w-100"/>
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label={updClient.name}
											name="phoneNumber"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label={updClient.name}
											name="website"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={24}>
										<Form.Item
											label={updClient.name}
											name="address"
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


export default EditUser;
