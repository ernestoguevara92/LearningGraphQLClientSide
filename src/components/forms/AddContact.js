import { useState, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useMutation } from '@apollo/client';
import { ADD_CONTACT } from '../../queries';

const AddContact = () => {
    const [id] = useState(uuidv4());
    const [addContact] = useMutation(ADD_CONTACT);

    const [form] = Form.useForm();
    const [, forceUpdate] = useState();

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = values => {
        const { firstName, LastName} = values;
        console.log('First Name: ', firstName);
        console.log('Last Name: ', LastName);
    }

    return (
        <Form
            form={form} 
            onFinish={onFinish}
            name='add-contact-form' 
            layout='inline' size='large' 
            style={{marginBottom: '40px'}}>
            <Form.Item name='firstName'
               rules={[{ required: true, message: 'Please input your first name!'}]}>
                <Input placeholder='Dwayne' />
            </Form.Item>
            <Form.Item name='lastName'
               rules={[{ required: true, message: 'Please input your last name!'}]}>
                <Input placeholder='Johnson' />
            </Form.Item>
            <Form.Item shouldUpdate={true}>
                {() => (
                    <Button type='primary' htmlType='submit'
                    disabled={
                        !form.isFieldsTouched(true) || 
                        form.getFieldsError().filter(({errors}) => errors.length).length
                        }>
                        Add Contact
                    </Button>
                )}
            </Form.Item>
        </Form>
    )
}

export default AddContact