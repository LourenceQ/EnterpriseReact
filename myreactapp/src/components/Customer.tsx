import React from "react";

type Person = {
    firstName: string;
    lastName: string;
    age: number;
    address?: string;       // optional
    isLegal: boolean;
};

const Customer = (props: Person) => {
    const {firstName, lastName, age, isLegal} = props;

    return (
        <div>
            <h1>Hello React</h1>
        </div>
    );
};

export default Customer;