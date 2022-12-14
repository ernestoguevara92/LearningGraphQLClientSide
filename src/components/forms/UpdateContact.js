import { Form, Input, Button } from 'antd'
import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_CONTACT } from '../../queries'

const UpdateContact = props => {
    const [updateContact] = useMutation(UPDATE_CONTACT);
    const { id, firstName, lastName } = props

    const [form] = Form.useForm()
    const [, forceUpdate] = useState()

    useEffect(() => {
        forceUpdate({})
    }, [])

    const onFinish = values => {
        const { firstName, lastName } = values
        
        updateContact({
            variables: {
                id,
                firstName,
                lastName
            }
        })

        props.onButtonClick()
    }

    return (
    <Form
    form={form}
    name='update-contact-form'
    layout='inline'
    onFinish={onFinish}
    initialValues={{
        firstName: firstName,
        lastName: lastName
    }}
    >
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
                <Button
                type='primary'
                htmlType='submit'
                disabled={
                    (!form.isFieldTouched('firstName') && !form.isFieldTouched('lastName')) ||
                    form.getFieldsError().filter(({ errors }) => errors.length).length
                }
                >Update Contact</Button>
            )}
        </Form.Item>
        <Button type='danger' onClick={props.onButtonClick}>Cancel</Button>
    </Form>
    )
}

export default UpdateContact