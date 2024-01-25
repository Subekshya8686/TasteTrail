import React, { useState } from 'react';
import './css/TermsAndConditions.css'


const TermsAndConditions: React.FC = () => {
    const [agree, setAgree] = useState(false);

    const handleAgreeChange = () => {
        setAgree(!agree);
    };

    const handleConfirm = () => {
        // Add your logic to handle the user's confirmation
        console.log('User confirmed agreement');
        // You can perform additional actions here when the user confirms
    };

    return (
        <div className={"main"}>
            <h1>Terms and Conditions</h1>

            <p>
                Welcome to Taste Trail! These terms and conditions outline the rules and regulations for the use of our website.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
                By accessing this website, you are agreeing to be bound by these website terms and conditions of use, all applicable laws, and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>

            {/* Add more sections based on your specific terms and conditions content */}

            <h2>2. Intellectual Property</h2>
            <p>
                The content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Taste Trail and is protected by copyright and other intellectual property laws.
            </p>

            <h2>3. User Contributions</h2>
            <p>
                Users may visit recipes and other content to the website. By submitting comments, you grant Taste Trail a perpetual, irrevocable, royalty-free, and transferable right to use, modify, reproduce, and distribute the content on our website.
            </p>

            <h2>4. Disclaimer</h2>
            <p>
               Taste Trail makes no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of the information contained on the website.
            </p>

            <h2>6. Changes to Terms</h2>
            <p>
                Taste Trail may revise these terms and conditions at any time without notice. By using this website, you agree to be bound by the current version of these terms and conditions.
            </p>

            <p>
                For the full terms and conditions, please contact us at Taste Trail.
            </p>

            <div>
                <label>
                    I have read and agree to the Terms and Conditions
                    <input type="checkbox" checked={agree} onChange={handleAgreeChange} />
                </label>
            </div>

            <button onClick={handleConfirm} disabled={!agree}>
                Confirm
            </button>
        </div>
    );
};

export default TermsAndConditions;
