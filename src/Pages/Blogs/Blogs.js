import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {

    useTitle('blogs')




    return (
        <div className='text-center'>
            <div className='my-5 p-5'>
                <p className='text-2xl text-blue-700'>1.Difference between SQL and NoSQL</p>
                <p className='text-xl'>Ans:SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. <br />
                    A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. </p>
            </div>
            <div className='my-5 p-5'>
                <p className='text-2xl text-blue-700'>2.What is JWT, and how does it work?</p>
                <p className='text-xl'>Ans: JWTs or JSON Web Tokens are most commonly used to identify an authenticated user. They are issued by an authentication server and are consumed by the client-server (to secure its APIs). <br />
                    A JWT contains three parts:

                    Header: Consists of two parts:
                    The signing algorithm thats being used.
                    The type of token, which, in this case, is mostly “JWT”.
                    Payload: The payload contains the claims or the JSON object.
                    Signature: A string that is generated via a cryptographic algorithm that can be used to verify the integrity of the JSON payload.

                </p>
            </div>
            <div className='my-5 p-5'>
                <p className='text-2xl text-blue-700'>3.What is the difference between javascript and NodeJS?</p>
                <p className='text-xl'>Ans: JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div className='my-5 p-5'>
                <p className='text-2xl text-blue-700'>4.How does NodeJS handle multiple requests at the same time?</p>
                <p className='text-xl'>Ans:NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue</p>
            </div>

        </div>
    );
};

export default Blogs;