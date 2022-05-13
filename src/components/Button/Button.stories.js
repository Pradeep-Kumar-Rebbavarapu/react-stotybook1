import React from "react";
import Button from "./Button";


// default props
export default {
    title:'Form/Button',
    component:Button,
    args:{
        children:"button"
    }
}


export const Primary = () => <Button variant="primary">primary</Button>
export const secondary = () => <Button variant="secondary">secondary</Button>
export const success = () => <Button variant="success">success</Button>
export const danger = () => <Button variant="danger">danger</Button>
export const info = () => <Button variant="info">info</Button>
export const warning = () => <Button variant="warning">warning</Button>

const Template = (args) => <Button {...args}/>

export const PrimaryA = Template.bind({})

PrimaryA.args = {
    variant:"primary",
    children:"Primary Args"
}


export const DangerA = Template.bind({})
DangerA.args = {
    variant:"danger",
    children:"Danger Args"
}


export const LongPrimaryA = Template.bind({})

LongPrimaryA.args = {
    ...PrimaryA.args,
    children:'Long Primary A'
}


