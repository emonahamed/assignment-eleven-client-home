import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center'>
            <div className='my-5'>
                <p className='text-2xl text-blue-700'>1.Difference between SQL and NoSQL</p>
                <p className='text-xl'>Ans:SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. <br />
                    A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. </p>
            </div>
            <div>
                <p className='text-2xl text-blue-700'>2.What is JWT, and how does it work?</p>
                <p className='text-xl'>Ans:</p>
            </div>
            <div>
                <p className='text-2xl text-blue-700'>3.What is the difference between javascript and NodeJS?</p>
                <p className='text-xl'>Ans:</p>
            </div>
            <div>
                <p className='text-2xl text-blue-700'>4.How does NodeJS handle multiple requests at the same time?</p>
                <p className='text-xl'>Ans:</p>
            </div>

        </div>
    );
};

export default Blogs;