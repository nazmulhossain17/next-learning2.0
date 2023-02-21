import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h4>What is cors?</h4>
                <p>Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there.</p>
                <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                <h4>How does the private route work?</h4>
                <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                <h4>What is Node? How does Node work?</h4>
                <p>Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.</p>
            </div>
        </div>
    );
};

export default Blog;