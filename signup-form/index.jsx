import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

    // /*
    // * Old way
    // *
    // */
    // function handleSubmitEvent(event) {
    //     event.preventDefault()
    //     const formEl = event.currentTarget
    //     const formData = new FormData(formEl)
    //     const email = formData.get("email")
    //
    //     formEl.reset()
    // }

    /*
    * New way
     */
    // function signUp(formData) {
    //     const email = formData.get("email")
    //     const pwd = formData.get("password")
    //     const description = formData.get("description")
    //     const employmentStatus = formData.get("employmentStatus")
    //     const dietaryRestrictions = formData.getAll("dietaryRestrictions") // only for checkbox
    //     const favColor = formData.getAll("favColor") // only for checkbox
    //
    //     console.log(favColor)
    // }

    function signUp(formData){
        console.log(Object.fromEntries(formData))
        const data = Object.fromEntries(formData)
        const dietaryData = formData.getAll("dietaryRestrictions")

        const allData = {
            ...data,
            dietaryRestrictions: dietaryData
        }

        console.log(allData)
    }

    return (
        <section>
            <h1>Signup form</h1>
            <form action={signUp} method="POST">
                {/*<form onSubmit={handleSubmitEvent} method="POST">*/}
                <label htmlFor="email">Email:</label>
                <input id="email" defaultValue="joe@example.com" type="email" name="email"
                       placeholder="joe@example.com"/>
                <br/>

                <label htmlFor="password">Password:</label>
                <input id="password" defaultValue="password123" type="password" name="password"/>
                <br/>

                <label htmlFor="description">Description:</label>
                <textarea id="description" defaultValue="description" name="description"></textarea>

                <fieldset>
                    <legend>Employment Status:</legend>
                    <label>
                        <input type="radio" name="employmentStatus" value="Unemployed"/>
                        Unemployed
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" value="Part-time"/>
                        Part-time
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" defaultChecked={true} value="Full-time"/>
                        Full-time
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Dietary restrictions:</legend>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="kosher"/>
                        Kosher
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="vegan"/>
                        Vegan
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free"/>
                        Gluten-free
                    </label>
                </fieldset>

                <label htmlFor="favColor">What is your favorite color ?</label>
                <select id="favColor" name="favColor" defaultValue="">
                    <option value="" disabled>-- Choose a color --</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>

                <button>Submit</button>

            </form>
        </section>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
);
