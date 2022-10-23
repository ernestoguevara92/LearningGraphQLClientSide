import { Form, Input } from 'antd'

const AddContact = () => {
    return (
        <Form name='add-contact-form' layout='inline' size='large' style={{marginBottom: '40px'}}>
            <Form.Item name='firstName'
               rules={[{ required: true, message: 'Please input your first name!'}]}>
                <Input placeholder='Dwayne' />
            </Form.Item>
            <Form.Item name='lastName'
               rules={[{ required: true, message: 'Please input your last name!'}]}>
                <Input placeholder='Johnson' />
            </Form.Item>
        </Form>
    )
}

export default AddContact